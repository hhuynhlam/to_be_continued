import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';

export default function configureStore(initialState) {
  const enhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  );

  const store = createStore(reducers, initialState, enhancer);

  return store;
}
