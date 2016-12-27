import * as React from "react";
import * as ReactDOM from "react-dom";
import { SearchPage } from "./SearchPage";
import { App } from "./AppPage";
import {
  browserHistory,
  IndexRoute,
  Link,
  Route,
  Router
} from 'react-router'

const Home = () => {
  return (
    <div>
      <Link to="search">Search</Link>
    </div>
  )
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="search" component={SearchPage}/>
    </Route>
  </Router>
  ), document.getElementById('root')
);
