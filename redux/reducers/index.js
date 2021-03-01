import { combineReducers } from 'redux';
import company_reducer from './company_reducer';
import student_reducer from './student_reducer';

export default combineReducers({
    company: company_reducer,
    student: student_reducer
})