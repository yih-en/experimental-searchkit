import React, { Component } from "react";
import * as _ from "lodash";
import GridItem from "./components/GridItem"

import {
  SearchkitManager, SearchkitProvider,
  SearchBox, RefinementListFilter, MenuFilter,
  Hits, HitsStats, NoHits, Pagination, SortingSelector,
  SelectedFilters, ResetFilters, ItemHistogramList,
  Layout, LayoutBody, LayoutResults, TopBar,
  SideBar, ActionBar, ActionBarRow,
  MultiMatchQuery
} from "searchkit";

require("./index.scss");

const url = "https://sandbox-8663525960.us-west-2.bonsaisearch.net/db/bubble_teas"

const searchkit = new SearchkitManager(url, {
  basicAuth: ""
})

export class SearchPage extends Component {
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
            <SearchBox
              searchOnChange={true}
              placeholder="Search drinks..."
              queryBuilder={(key) => {
                return MultiMatchQuery(key, {
                  type: "phrase_prefix",
                  fields: ["name.eng^5", "_all"],
                  operator: "or"
                })
              }}
            />
          </TopBar>
          <LayoutBody>
            <SideBar>
              <MenuFilter
                id="type"
                title="General Type"
                field="general_type"
              />
              <RefinementListFilter
                id="categories"
                title="Categories"
                field="category"
                operator="OR"
                size={10}/>
            </SideBar>
            <LayoutResults>
              <ActionBar>
                <ActionBarRow>
                  <HitsStats/>
                  <SortingSelector options={[
                    {label:"Lowest Price", field:"price.r", order:"asc", defaultOption:true},
                    {label:"Highest Price", field:"price.r", order:"desc"},
                    {label:"Hot Drinks", field:"hot"}
                  ]}/>
                </ActionBarRow>
                <ActionBarRow>
                  <SelectedFilters/>
                  <ResetFilters/>
                </ActionBarRow>
              </ActionBar>
              <Hits mod="sk-hits-grid" hitsPerPage={8} itemComponent={GridItem}
                sourceFilter={["name", "uid", "image", "description", "price", "hot"]}/>
              <NoHits/>
              <Pagination showNumbers={true}/>
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    )
  }
}
