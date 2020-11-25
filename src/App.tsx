import React from 'react';
import {
  Provider,
  defaultTheme,
  Button
} from '@adobe/react-spectrum';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SecretSanta from './secret-santa';



function App() {
  return (
    
      <Router>
        <Switch>
          <Route path="/:key/:ciphertext/:checktext">
          <Provider theme={defaultTheme}>
            <SecretSanta />
            </Provider>
          </Route>
          <Route path="*">
            <div>404 Not Found</div>
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
