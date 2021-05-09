import { takeLatest, call, put, all } from "redux-saga/effects";
import { UserActionType } from "../user/user.types";
import { clearCart } from "./cart.actions";


export function* onSignOutSuccess(){
    yield put(clearCart())
}

export function* clearUserCart(){
    yield takeLatest(UserActionType.SIGNOUT_SUCCESS, onSignOutSuccess)
}

export function* cartSagas() {
    yield all([
      call(clearUserCart)
    ])
}