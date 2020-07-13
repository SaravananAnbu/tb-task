import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { myDrawerScreen } from '../containers/navigation/stack-navigator';
import AppReducer from './app-reducer';

const navReducer = createNavigationReducer(myDrawerScreen);

const MainReducer = combineReducers({
    nav : navReducer,
    AppReducer
});

export default MainReducer;