import { UserActionType } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.SIGNIN_SUCCESS:
      return {
        ...currentState,
        currentUser: action.payload,
        error: null,
      };
    case UserActionType.SIGNOUT_SUCCESS:
      return {
        ...currentState,
        currentUser: null,
        error: null,
      };
    case UserActionType.SIGNIN_ERROR:
    case UserActionType.SIGNOUT_ERROR:
      return {
        ...currentState,
        error: action.payload,
      };
    default:
      return currentState;
  }
};

export default userReducer;
