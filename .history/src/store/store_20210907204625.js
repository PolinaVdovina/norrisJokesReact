import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer'
import { localStorageMiddleware, reHydrateStore, watchFetchJokes } from './saga/sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    //reHydrateStore(),
    applyMiddleware(sagaMiddleware/*, localStorageMiddleware*/)
);

sagaMiddleware.run(watchFetchJokes)

export default store;