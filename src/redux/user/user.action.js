import { UserActionType } from "./user.types"

export const googleSignInStart = () => {
    return {
        type: UserActionType.GOOGLE_SIGNIN_START
    }
}

export const signInSuccess = (user) => {
    return {
        type: UserActionType.SIGNIN_SUCCESS,
        payload: user
    }
}

export const signInError = (error) => {
    return {
        type: UserActionType.SIGNIN_ERROR,
        payload: error
    }
}

export const emailSignInStart = (emailAndPassword) => {
    return {
        type: UserActionType.EMAIL_SIGNIN_START,
        payload: emailAndPassword
    }
}

export const getCurrentUserSession = () => {
    return {
        type: UserActionType.GET_CURRENT_SESSION
    }
}

export const signOutStart = () => {
    return {
        type: UserActionType.SIGNOUT_START
    }
}

export const signOutSuccess = (user) => {
    return {
        type: UserActionType.SIGNOUT_SUCCESS    }
}

export const signOutError = (error) => {
    return {
        type: UserActionType.SIGNOUT_ERROR,
        payload: error
    }
}

export const signUpStart = (userDetails) => {
    return {
        type: UserActionType.SIGNUP_START,
        payload: userDetails
    }
}
