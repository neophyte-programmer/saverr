export const actionTypes = {
    SET_USER: "SET_USER",
    SET_TARGETS: "SET_TARGETS",
    ADD_TARGET: "ADD_TARGET",
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case actionTypes.SET_TARGETS:
            return {
                ...state,
                targets: action.targets,
            }
        case actionTypes.ADD_TARGET:
            return {
                ...state,
                targets: [...state.targets, action.target],
            }
        default:
            return state
    }
}

export default reducer