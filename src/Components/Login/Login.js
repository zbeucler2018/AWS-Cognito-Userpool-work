import React from 'react';
import { CognitoUser, AuthenticationDetails  } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';


export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [response, setResponse] = React.useState({});
  const [showDetails, setShowDetails] = React.useState('none');

  let styles = {
    display: showDetails
  }



  const onSubmit = e => {
    e.preventDefault();
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    })
    const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password
    })
  user.authenticateUser(authDetails, { // checks for user in group
      onSuccess: data => {
          console.log(`onSuccess`, data)
          setResponse(data.idToken.payload)
          setShowDetails('block')
      },
      onFailure: err => {
          console.log(`onFailure`, err)
      },
      newPasswordRequired: data => {
          console.log(`newPasswordRequired`, data)
      }
  })

  }

  return (
    <div>
        <form onSubmit={onSubmit}>
        <p>Email</p>
        <input 
          type='text' 
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p>password</p>
        <input 
          type='text' 
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type='submit'>Login</button>
        </form>
        <ul style={styles}>
          <li><strong>Cognito Username (UUID): </strong>{response["cognito:username"] === undefined ? "not defined" : response["cognito:username"]}</li>
          <li><strong>Customer ID: </strong>{response["custom:customerID"] === undefined ? "not defined" : response["custom:customerID"]}</li>
          <li><strong>Customer Name: </strong>{response["custom:customerName"] === undefined ? "not defined" : response["custom:customerName"]}</li>
          <li><strong>Name: </strong>{response["custom:name"] === undefined ? "not defined" : response["custom:name"]}</li>
          <li><strong>Role: </strong>{response["custom:role"] === undefined ? "not defined" : response["custom:role"]}</li>
          <li><strong>Secondary Employee ID: </strong>{response["custom:secEmployeeID"] === undefined ? "not defined" : response["custom:secEmployeeID"]}</li>
          <li><strong>Email: </strong>{response["email"] === undefined ? "not defined" : response["cognito:username"]}</li>
          <li><strong>Vertified email: </strong>{response["email_verified"] === undefined ? "not defined" : JSON.stringify(response["email_verified"])}</li>

        </ul>
    </div>
  );
}
