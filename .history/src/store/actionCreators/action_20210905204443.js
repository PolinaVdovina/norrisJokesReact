import { LOAD_JOKE } from "../actionTypes";

export function SaveJoke(value) {
    return {
      type: LOAD_JOKE,
      jokes: value
    };
}