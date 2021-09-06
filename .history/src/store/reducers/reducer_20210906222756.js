import { LOADING_JOKE, LOAD_JOKE_FAILED, LOAD_JOKE_SUCCESS } from "../actionTypes";
import initialState from "../initialState";

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case LOADING_JOKE:
        return {
            ...state,
            loading: true,
            error: false,
        };
      case LOAD_JOKE_SUCCESS:
        return {
            ...state,
            loading: false,
            error: false,
            jokes: [...state.jokes, action.joke]
        };
      case LOAD_JOKE_FAILED:
        return {
            ...state,
            loading: false,
            error: true,
        };
      default:
            return state;
    }
};