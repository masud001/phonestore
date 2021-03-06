import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import {ProductsProvider} from './Context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ProductsProvider>
        <Router>
            <App />
        </Router>
    </ProductsProvider>, 
    document.getElementById('root')
);

// if (module.hot) {
//     module.hot.accept();
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
