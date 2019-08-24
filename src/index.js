import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Root from './javascript/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
