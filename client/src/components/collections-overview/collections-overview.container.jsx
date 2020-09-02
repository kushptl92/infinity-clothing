import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selector.js';
import WithSpinner from '../with-spinner/with-spinn.componnt';
import CollectionsOverview from './collections-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
  });

//   export const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;