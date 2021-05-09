import {
  convertCollectionSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { ShopActionType } from "./shop.types";

export const fetchCollectionStart = () => {
  return {
    type: ShopActionType.FETCH_COLLECTION_START,
  };
};

export const fetchCollectionSuccess = (collectionMap) => {
  return {
    type: ShopActionType.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap,
  };
};

export const fetchCollectionError = (errorMessage) => {
  return {
    type: ShopActionType.FETCH_COLLECTION_FAILURE,
    payload: errorMessage,
  };
};

//Thunk usage
export const fetchCollectionAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionStart());
    const collectionRef = firestore.collection("collections");

    collectionRef
      .get()
      .then((snapshot) => {
        const transformedData = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(transformedData));
      })
      .catch((error) => {
        dispatch(fetchCollectionError(error.message));
      });
  };
};
