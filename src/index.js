import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';



import rootReducer from './rootReducer'
import * as serviceWorker from './serviceWorker';

const store = createStore(
    rootReducer,composeWithDevTools(applyMiddleware(thunk))
)
ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
    <App />
    </Provider>
</BrowserRouter>,
 document.getElementById('root'));
serviceWorker.unregister();
