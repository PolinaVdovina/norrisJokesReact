import axios from "axios";
import { JokeLoading, JokeLoadingFailed, SaveJoke } from "../actionCreators/action";
import { FETCHED_JOKES } from "../actionTypes";
import { call ,put, takeEvery } from 'redux-saga/effects'

export function* watchFetchJokes() {
    yield takeEvery(FETCHED_JOKES, fetchJokeAsync);
}
  
export function* fetchJokeAsync() {    
    try {
        yield put(JokeLoading());
        const data = yield call(() => {
            return axios.get("https://api.chucknorris.io/jokes/random")
                .then(response => response.data.value);
        });
        yield put(SaveJoke(data));
    } catch (error) {
        yield put(JokeLoadingFailed());
    }    
}

export const localStorageMiddleware = ({getState}) => { 
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(
            getState()
        ));
        return result;
    };
};


export const reHydrateStore = () => { 
    if (localStorage.getItem('applicationState') !== null) {
        return JSON.parse(localStorage.getItem('applicationState')) 
    }
}
