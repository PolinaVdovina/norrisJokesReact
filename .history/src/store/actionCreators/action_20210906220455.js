import { FETCHED_JOKES, LOADING_JOKE, LOAD_JOKE_FAILED, LOAD_JOKE_SUCCESS } from "../actionTypes";

export function JokeLoading() {
    return {
      type: LOADING_JOKE
    };
}

export function SaveJoke(value) {
    return {
      type: LOAD_JOKE_SUCCESS,
      jokes: value
    };
}

export function JokeLoadingFailed() {
    return {
      type: LOAD_JOKE_FAILED
    };
}

export function FetchJokes() {
    return { 
      type: FETCHED_JOKES 
    }
};