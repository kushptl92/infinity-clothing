import ShopActionTypes from './shop.types';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = ()=> ({
type: ShopActionTypes.FETECH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETECH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETECH_COLLECTIONS_FAILURE,
    payload: errorMessage
})


export const fetchCollectionsStartAsync = ()=> {
    return dispatch =>{
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshot => { console.log(snapshot);
          const collectionsMap = convertCollectionSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch (fetchCollectionsFailure(error.message)) );
        // collectionRef.get().then(async snapshot => {
        //    const collectionMap= convertCollectionSnapshotToMap(snapshot);
        //    dispatch(fetchCollectionSuccess(collectionMap));
        // }).catch(error => dispatch (fetchCollectionFailure(error.message)) );
    };
    };

