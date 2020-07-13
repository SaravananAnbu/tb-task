import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Root } from 'native-base';
import { createReduxContainer, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createStore, applyMiddleware } from 'redux'
import { myDrawerScreen } from './src/containers/navigation/stack-navigator';
import MainReducer from './src/reducers/main-reducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import 'react-native-gesture-handler';

const middleware = createReactNavigationReduxMiddleware(
    state => state.nav
);

const Application = createReduxContainer(myDrawerScreen, "root")

const mapStateToProps = state => ({
    state : state.nav
})

const store = createStore(
    MainReducer, 
    applyMiddleware(middleware, thunk, promise),
)

const AppWithNavigationState = connect(mapStateToProps)(Application)

class App extends Component {
    render() {
        return (
             <Root>
                <Provider store={store}>
                    <AppWithNavigationState />
                </Provider>
            </Root>
        );
    }
}

export default App;
