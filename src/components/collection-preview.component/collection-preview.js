import React from 'react';
import CollectionItem from '../collectionItem.component/CollectionItem';

import './collection-preview.styles.scss';



const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
      <h1 className="title-">{title}</h1>
    <div className='preview'>
      {
        items.filter((item, idx) => idx < 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
      <h1 className="see-all">See All...</h1>
  </div>
)
 
export default CollectionPreview;