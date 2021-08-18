import React from 'react';
import './App.css';

import SignUp from './Components/SignUp/SignUp'
import Login from './Components/Login/Login'
import ListUsers from './Components/ListUsers/ListUsers'

function App() {
  const [showUsers, setShowUsers] = React.useState(false)
  const [showSignUp, setShowSignUp] = React.useState(false)
  const [showLogin, setShowLogin] = React.useState(false)


  return (
    <div>
      <button onClick={() => setShowSignUp(!showSignUp)}>Go To Sign Up</button>
      <button onClick={() => setShowLogin(!showLogin)}>Go To Login</button>
      <button onClick={() => setShowUsers(!showUsers)}>Go To Users</button>


      <div style={{display: showSignUp ? 'block' : 'none'}}>
        <SignUp />
      </div>

      <div style={{display: showLogin ? 'block' : 'none'}}>
        <Login />
      </div>
      
      <div style={{display: showUsers ? 'block' : 'none'}}>
        <ListUsers />
      </div>

    </div>
  );
}

export default App;
