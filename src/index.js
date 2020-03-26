import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Loop from './components/loop';

ReactDOM.render(
  <React.StrictMode>
  <Loop/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
