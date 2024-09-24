import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn ? <Login onLogin={setIsLoggedIn} /> : <Dashboard />}
    </div>
  );
};

export default App;
