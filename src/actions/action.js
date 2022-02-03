export const INCREMENT = (arg) => {
    return {
        type: "INCREMENT",
        payload: arg
    }
}
export const DECREMENT = (arg) => {
    return {
        type: "DECREMENT",
        payload: arg
    }
}
export const isLoggedIn = () => {
    return {
        type: "LoggedIn"
    }
}