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