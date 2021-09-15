import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { store, persistor } from './redux/store';
import Dashboard from './components/main/home/Dashboard';
import PrivateRoute from './components/private/PrivateRoute';
import Navbar from './components/layout/Navbar';
import FilteredTable from './components/main/table-elements/table/FilteredTable';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Navbar />
          <div className="App container">
            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/tickets/:status/:type' component={FilteredTable} />
              <Route exact path='/' component={Login} />
              <Route exact path='/sign-in' component={Login} />
              <Route exact path='/sign-up' component={Register} />
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
