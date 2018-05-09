import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import utilReducer from './utilReducer';

export default combineReducers({
  form: reduxForm,
  util: utilReducer
});
