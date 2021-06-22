import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Blog from './components/Blog';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Blog} />
      <Switch>
        <Route exact path="/_" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
