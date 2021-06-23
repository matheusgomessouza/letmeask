import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';
import './styles/global.scss';

type ReactDOMProps = {
  render: () => void;
}

ReactDOM.render<ReactDOMProps>(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

