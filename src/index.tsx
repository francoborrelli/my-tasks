import { App } from './App';

import { Provider } from 'react-redux';
import { store, persistor } from './store/store';

import './index.scss';

import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
