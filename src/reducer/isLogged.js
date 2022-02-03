
export const isLogged = (state = false, action) => {
    switch (action.type) {
        case "LoggedIn":
            return !state;
        default:
            return false;       
    }

}