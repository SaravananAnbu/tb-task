import React from 'react';
import { Route, Router} from 'react-router-dom';
import history from '../history';
import Home from './home';
import Inventory from './inventory';

export default class Root extends React.Component {

    render() {
        return (
            <Router history={history}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/item" component={Inventory}/>
                <Route path="/item/:id" component={Inventory}/>
            </Router>
        );
    }
}

