import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
// import View from './DocumentViewer/View';
import App from './App'
// redux requirements
import { Provider } from 'react-redux'
import store from './Redux/BaseRedux/store'

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
document.getElementById('root')
);
