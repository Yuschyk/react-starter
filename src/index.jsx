import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app';
import { createStore } from "./packages/utils";
import { rootReducer } from "./reducer";
import { rootSaga } from "./rootSaga";
import 'react-notifications-component/dist/theme.css'

const store = createStore(rootReducer);

store.runSaga(rootSaga)

ReactDOM.render(
    <Provider store={store}>
      <App>
        <h1>REACT STARTER</h1>
      </App>
    </Provider>,

  document.getElementById('root'),
);

