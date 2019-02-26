import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import decode from 'jwt-decode'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';



import rootReducer from './rootReducer'
import * as serviceWorker from './serviceWorker';
import {userLoggedIn} from './actions/auth'

const store = createStore(
    rootReducer,composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.bookwormJWT){
    const payload = decode(localStorage.bookwormJWT);
    const user = {token: localStorage.bookwormJWT, email: payload.email, confirmed: payload.confirmed};
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
    <Route component={App }/>
    </Provider>
</BrowserRouter>,
 document.getElementById('root'));
serviceWorker.unregister();
