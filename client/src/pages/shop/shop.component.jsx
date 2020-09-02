import React, {useEffect, lazy, Suspense} from 'react'
import { Route } from 'react-router-dom';
// import CollectionPageContainer from '../collection/collection.container';
// import CollectionPreview from '../../components/collections-overview/collections-overview.component';
// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import { createStructuredSelector }  from 'reselect';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner/spinner.componnt';
// import WithSpinner from '../../components/with-spinner/with-spinn.componnt';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner =WithSpinner(CollectionPage);

const CollectionPageContainer = lazy(() => import( '../collection/collection.container') );
const CollectionsOverviewContainer = lazy(() => import( '../../components/collections-overview/collections-overview.container') );

const ShopPage= ({fetchCollectionsStart, match}) =>{
  useEffect(()=>{
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);


        return (
            <div className='shop-page'> 
            <Suspense fallback={<Spinner/>}>
            <Route
            exact
            path={`${match.path}`}
            component= {CollectionsOverviewContainer}
            // render={props => (
            //   <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
            // )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component= {CollectionPageContainer}
            // render={props => (
            //   <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
            // )}
          />
          </Suspense>
            </div>
            );
    }



    const mapDispatchToProps = dispatch => ({
      fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    })

export default  connect(null, mapDispatchToProps)(ShopPage);





// const ShopPage= ({ match }) =>(
//     <div className='shop-page'> 
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//     );