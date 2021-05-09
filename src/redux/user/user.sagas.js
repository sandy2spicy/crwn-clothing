import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from "../../firebase/firebase.utils";
import { signInError, signInSuccess, signOutError, signOutSuccess } from "./user.action";
import { UserActionType } from "./user.types";

export function* handleSignInResponse(user, otherProps) {
  try {
    const userRef = yield call(createUserProfileDocument, user, otherProps);
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInError(error.message));
  }
}

export function* onGoogleSignin() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield handleSignInResponse(user);
  } catch (error) {
    yield put(signInError(error.message));
  }
}

export function* signInWithGoogle() {
  yield takeLatest(UserActionType.GOOGLE_SIGNIN_START, onGoogleSignin);
}

export function* onSignInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield handleSignInResponse(user);
  } catch (error) {
    yield put(signInError(error.message));
  }
}

export function* onSignUpWithEmail({payload: {email, password, displayName}}){
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield handleSignInResponse(user, {displayName});
  } catch (error) {
    yield put(signInError(error.message));
  }
}

export function* onCheckUserSession() {
  try {
    const user = yield getCurrentUser();
    if(!user) return;
    yield handleSignInResponse(user);
  } catch (error) {
    yield put(signInError(error.message));
  }
}

export function* onSignOutUser() {
  try{
     yield auth.signOut();
     yield put(signOutSuccess());
  }catch (error) {
    yield put(signOutError(error.message));
  }
}

export function* signInWithEmail() {
  yield takeLatest(UserActionType.EMAIL_SIGNIN_START, onSignInWithEmail);
}

export function* getCurrentUserSession() {
  yield takeLatest(UserActionType.GET_CURRENT_SESSION, onCheckUserSession);
}

export function* signOutUser() {
  yield takeLatest(UserActionType.SIGNOUT_START, onSignOutUser);
}

export function* signUpWithEmail() {
  yield takeLatest(UserActionType.SIGNUP_START, onSignUpWithEmail);
}


export function* userSagas() {
  yield all([
    call(signInWithGoogle),
    call(signInWithEmail),
    call(getCurrentUserSession),
    call(signOutUser),
    call(signUpWithEmail)
  ]);
}
