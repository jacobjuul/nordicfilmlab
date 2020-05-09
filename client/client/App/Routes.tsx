import React, { FunctionComponent } from 'react';
import { Router, RouteComponentProps } from '@reach/router';

interface IProps {
  path: string;
}

const Home: FunctionComponent<IProps> = () => {
  return <div>Home page</div>;
};

const User: FunctionComponent<IProps> = () => {
  return <div>UserPage</div>;
};

const Routes = () => {
  return (
    <Router>
      <Home path="/" />
      <User path="/user" />
    </Router>
  );
};

export default Routes;
