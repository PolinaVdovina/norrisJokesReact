import { JokeLoading } from "../actionCreators/action";
import { FETCHED_JOKES } from "../actionTypes";

function* watchFetchJokes() {
    yield takeEvery(FETCHED_JOKES, fetchJokeAsync);
}
  
function* fetchJokeAsync() {
    (getState) => {
        try {
            yield put(JokeLoading());
            const data = yield call(() => {
                return axios.get("https://api.chucknorris.io/jokes/random").then(response => 
                    [...getState.jokes, response.data.value]
                );
            });
            yield put(SaveJoke(data));
        } catch (error) {
            yield put(JokeLoadingFailed());
        }
    }
}