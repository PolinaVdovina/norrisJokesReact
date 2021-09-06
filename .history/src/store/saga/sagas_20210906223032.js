import axios from "axios";
import { JokeLoading } from "../actionCreators/action";
import { FETCHED_JOKES } from "../actionTypes";

const {takeEvery} = ReduxSaga;
const {put, call} = ReduxSaga.effects;

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