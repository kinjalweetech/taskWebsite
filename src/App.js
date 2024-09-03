// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Head from './Component/Head';

import Navigation from './Component/Navigation/Navigation';
import store from './Store/Store';
// import Head from './Component/Head';

function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

export default App;
