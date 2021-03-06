import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { isCollectionFetching } from '../../redux-store/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner'
import CollectionOverview from './collection-overview'

const mapStateToProps = createStructuredSelector({
	isLoading: isCollectionFetching
})

export const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview);


export default CollectionsOverviewContainer;