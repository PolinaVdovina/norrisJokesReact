import { createStore } from 'redux';
import reducer from './reducers/reducer'
import { watchFetchJokes } from './saga/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchJokes)

export default store;