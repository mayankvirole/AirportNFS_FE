import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes';

function RouterProvider() {
  return (
    <Router>
      <Route>
        {
					routes.map( route => {
						<Route path={route.path} component={route.component} exact={route.exact} />
					})
				}
      </Route>
    </Router>
  )
}

export default RouterProvider;