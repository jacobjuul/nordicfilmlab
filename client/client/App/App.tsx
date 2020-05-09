import React, { Suspense, FunctionComponent } from 'react';
import Routes from './Routes';

const App: FunctionComponent = () => {
  return (
    <div>
      <header>test header</header>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes />
      </Suspense>
    </div>
  );
};

export default App;
