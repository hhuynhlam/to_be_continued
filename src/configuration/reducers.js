import { combineReducers } from 'redux';

import { reducer as libraryReducer } from '../library';

export default combineReducers({
  library: libraryReducer
});
