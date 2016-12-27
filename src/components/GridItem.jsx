import React, { Component} from 'react';

export default class GridItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {bemBlocks, result} = this.props

    return (
      <div className={bemBlocks.item().mix(bemBlocks.container("item"))} data-qa="hit">
        <a href="#">
          <img
            data-qa="image"
            className={bemBlocks.item("poster")}
            src={result._source.image}
            width="200"
            height="240"
            title={result._source.description}
          />
          <div
            data-qa="name"
            className={bemBlocks.item("name")}
            dangerouslySetInnerHTML={{__html:result._source.name.eng}}
          >
          </div>
          <div
            data-qa="name"
            className={bemBlocks.item("name")}
            dangerouslySetInnerHTML={{__html:result._source.price.r + " (R)"}}
          >
          </div>
          <div
            data-qa="name"
            className={bemBlocks.item("name")}
            dangerouslySetInnerHTML={{__html:result._source.price.l + " (L)"}}
          >
          </div>

        </a>
      </div>
    )
  }
}
