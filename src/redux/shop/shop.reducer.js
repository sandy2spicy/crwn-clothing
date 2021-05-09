import { ShopActionType } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionType.FETCH_COLLECTION_START:
      return {
        ...currentState,
        isFetching: true,
      };
    case ShopActionType.FETCH_COLLECTION_FAILURE:
      return {
        ...currentState,
        isFetching: true,
        errorMessage: action.payload,
      };
    case ShopActionType.FETCH_COLLECTION_SUCCESS:
      return {
        ...currentState,
        isFetching: false,
        collections: action.payload,
      };
    default:
      return currentState;
  }
};

export default shopReducer;
