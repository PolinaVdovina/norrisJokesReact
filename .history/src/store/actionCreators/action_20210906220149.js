import { LOADING_JOKE, LOAD_JOKE_FAILED, LOAD_JOKE_SUCCESS } from "../actionTypes";

export function JokeLoading(value) {
    return {
      type: LOADING_JOKE,
      jokes: value
    };
}

export function SaveJoke(value) {
  return {
    type: LOAD_JOKE_SUCCESS,
    jokes: value
  };
}

export function JokeLoadingFailed(value) {
  return {
    type: LOAD_JOKE_FAILED
  };
}