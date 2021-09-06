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

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOADING_JOKE:
        return {
            ...state,
            url: '',
            loading: true,
            error: false,
        };
      case LOAD_JOKE_SUCCESS:
        return {
            ...state,
            url: action.url,
            loading: false,
            error: false,
            jokes: action.jokes
        };
      case LOAD_JOKE_FAILED:
        return {
            ...state,
            url: '',
            loading: false,
            error: true,
        };
      default:
            return state;
    }
  };