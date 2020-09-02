import { takeLatest, call, put, all } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';


export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap =  yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
    // collectionRef.get().then(snapshot => { console.log(snapshot);
    //   const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //   dispatch(fetchCollectionsSuccess(collectionsMap));
    // }).catch(error => dispatch (fetchCollectionsFailure(error.message)) );
}


export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETECH_COLLECTIONS_START, fetchCollectionsAsync);
}


export function* shopSaga() {
    yield  all(
        [call(fetchCollectionsStart)]
    );
}