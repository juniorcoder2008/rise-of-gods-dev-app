import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Changelogs from './components/Changelogs';
import CreateChangelog from './components/CreateChangelog';

const App = () => {

  const [loginState, setLoginState] = useState(false);

  return (
    <div>
      <Navbar />
        {!loginState ? <Login setLoginState={v => setLoginState(v)} loginState={loginState} /> : <div>
        <CreateChangelog />
        <Changelogs />
      </div>}
    </div>
  )
}

export default App