import { CognitoUserPool } from 'amazon-cognito-identity-js';


const poolData = {
    UserPoolId: "USER_POOL_ID",
    ClientId: "CLIENT_ID",
  }  

export default new CognitoUserPool(poolData);