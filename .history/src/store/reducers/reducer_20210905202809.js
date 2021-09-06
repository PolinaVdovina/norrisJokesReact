import initialState from "../initialState";

const { LOAD_JOKE } = require("../actionTypes");

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_JOKE: return { 
            ...state,
            jokes: action.jokes 
        };        
        default: return state;
    }
}