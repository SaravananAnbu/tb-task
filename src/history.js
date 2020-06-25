import { createBrowserHistory } from 'history';
import configureStore from './store';

export const store = configureStore()

const history = createBrowserHistory({
    basename: '/'
});

export default history;
