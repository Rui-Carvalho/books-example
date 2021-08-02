import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'src/components/app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

import {Provider} from "react-redux";
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import reducers from './module';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);


// Some Material-ui components throw warnings because of the React.StrictMode, and there's no way to
//   selectively apply StrictMode on the component tree (see: https://github.com/facebook/react/issues/16362)
// ReactDOM.render(
//     <React.StrictMode>
//         <Router>
//             <App/>
//         </Router>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
