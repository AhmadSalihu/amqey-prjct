import React from 'react';
import CollectionPreview from '../collection-preview.component/collection-preview'
import SHOP_DATA from './Shop.data';
import './Shop.styles.scss'


class SHOP extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state; 
    return(
      <div className="shop-page">
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
      </div>
    )
  }
}


export default SHOP; 