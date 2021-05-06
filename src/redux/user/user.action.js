import { UserActionType } from "./user.types"

export const setCurrentUser = (user) => {
    return {
        type: UserActionType.SET_CURRENT_USER,
        payload: user
    }
}
