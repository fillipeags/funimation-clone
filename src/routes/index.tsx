import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routes;
