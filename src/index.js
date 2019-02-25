import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
<App />
</BrowserRouter>,
 document.getElementById('root'));
serviceWorker.unregister();
