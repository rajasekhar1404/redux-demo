import { UPDATE_USER } from "./actionTypes";

const initialState = {
    email: '',
    password: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_USER : {
            state = action.payload
            return state
        }
        default : return state
    }
}

export default reducer