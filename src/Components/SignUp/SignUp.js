import React from 'react';
import { CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';

// video ==> https://www.youtube.com/watch?v=U9rIWahHwOI&list=PLRFRM3JNuCktnzEUihQOHINPFjmfHKZMg&index=1
// playlist ==> https://www.youtube.com/playlist?list=PLRFRM3JNuCktnzEUihQOHINPFjmfHKZMg
// AWS user portal ==> https://us-east-2.console.aws.amazon.com/cognito/users/?region=us-east-2#/pool/us-east-2_O2IGCbxFx/users?_k=w0p6ml

/* ATTRIBUTES
- ID
- name
- email
- customer_id
- customer_name
- password
- email_vertified (builtin?)
- role
- secondary_employee_id

*/

export default function SignUp() {
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [customer_id, setCustomer_id] = React.useState("");
  const [customer_name, setCustomer_name] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");
  const [secondary_employee_id, setSecondary_emplayee_id] = React.useState("");
  const [result, setResult] = React.useState("")



  const onSubmit = e => {
    e.preventDefault();
    
    setId(Math.random())
    
    var attributeList = [];
    attributeList.push(new CognitoUserAttribute({Name:"custom:ID",Value:id}));
    attributeList.push(new CognitoUserAttribute({Name:"custom:name",Value:name}));
    attributeList.push(new CognitoUserAttribute({Name:"custom:customerID",Value:customer_id}));
    attributeList.push(new CognitoUserAttribute({Name:"custom:customerName",Value:customer_name}));
    attributeList.push(new CognitoUserAttribute({Name:"custom:role",Value:role}));
    attributeList.push(new CognitoUserAttribute({Name:"custom:secEmployeeID",Value:secondary_employee_id}));
    
    UserPool.signUp(email, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err)
        setResult("Error!")
      } else {
        console.log(data)
        setResult("Success!!!")
      }
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>

        <p>name</p>
        <input 
          type='text' 
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        
        <p>Email</p>
        <input 
          type='email' 
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <p>customer_id</p>
        <input 
          type='text' 
          name='customer_id'
          value={customer_id}
          onChange={e => setCustomer_id(e.target.value)}
        />

        <p>customer_name</p>
        <input 
          type='text' 
          name='customer_name'
          value={customer_name}
          onChange={e => setCustomer_name(e.target.value)}
        />

        <p>Password</p>
        <input 
          type='text' 
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <p>role</p>
        <input 
          type='text' 
          name='role'
          value={role}
          onChange={e => setRole(e.target.value)}
        />


        <p>secondary_employee_id</p>
        <input 
          type='text' 
          name='secondary_employee_id'
          value={secondary_employee_id}
          onChange={e => setSecondary_emplayee_id(e.target.value)}
        />

        

        <button>Sign up for new account</button>
      </form>
      <p>{result}</p>
    </div>
  );
}
