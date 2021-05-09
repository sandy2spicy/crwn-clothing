import { takeLatest, call, put, all } from "redux-saga/effects";
import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { fetchCollectionError, fetchCollectionSuccess } from "./shop.action";
import { ShopActionType } from "./shop.types";

export function* fetchCollectionDataAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const collectionSnaphot = yield collectionRef.get();
    const transformedData = yield call(
      convertCollectionSnapshotToMap,
      collectionSnaphot
    );
    yield put(fetchCollectionSuccess(transformedData));
  } catch (error) {
    yield put(fetchCollectionError(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionType.FETCH_COLLECTION_START,
    fetchCollectionDataAsync
  );
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ])
}
