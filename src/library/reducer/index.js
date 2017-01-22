import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import { setLibrary } from '../action';

const initialState = fromJS([]);

function setLibraryReducer(state, action) {
  return fromJS(action.payload);
}

export default handleActions({
  [setLibrary]: setLibraryReducer,
}, initialState);
