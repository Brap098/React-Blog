import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home-page'
import PageNotFound from './pages/404-page'

function App({ currentUser, checkUserSession }) {
 
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
    </Router>
  );
}

