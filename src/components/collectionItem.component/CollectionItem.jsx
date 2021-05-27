import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { addItem } from '../../redux-store/cart/cart.actions';


import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  // PriceButton,
} from './collectiomItem.styles';


const CollectionItem = ({ item, addItem, history }) => { 
  const { name, imageUrl } = item;
// console.log(`${match.path}/${item.id}`)
  return (
    <>
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} onClick={() => history.push(`/detail/${item.id}`)} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
      </CollectionItemContainer>
    </>  
  );  
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CollectionItem));