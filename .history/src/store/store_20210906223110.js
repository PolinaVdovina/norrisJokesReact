import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer'
import { watchFetchJokes } from './saga/sagas'

const createSagaMiddleware = ReduxSaga.default;

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchJokes)

export default store;