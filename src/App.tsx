import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/global.scss';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
