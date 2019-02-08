import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routing';

ReactDOM.render(<Routing />, document.getElementById('root'));

serviceWorker.unregister();
