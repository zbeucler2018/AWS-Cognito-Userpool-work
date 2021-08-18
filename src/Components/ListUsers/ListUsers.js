import React from 'react';
import { CognitoIdentityProviderClient, ListUsersCommand } from "@aws-sdk/client-cognito-identity-provider";
import LUHelper from './ListUsersHelper';


const ACCESS_KEY = 'ACCESS_KEY'
const SECRET_KEY = 'SECRET_KEY'

export default class ListUsers extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: '',
            error: '',
        }
    }



    getData = async (ACCESS_KEY,SECRET_KEY) => {
        const client = new CognitoIdentityProviderClient({ region: "us-east-2",
        credentials: {
            accessKeyId: ACCESS_KEY,
            secretAccessKey: SECRET_KEY,
        }, });
        const params = {};
        const command = new ListUsersCommand({ UserPoolId: "USER-POOL-ID" });

        try {
            var res = await client.send(command);
            return this.setState({data: res})
        } catch (error) {
            console.error(error);
            return this.setState({error: error})
        } finally {
            console.log(this.state.data)
        }
    }

    componentDidMount(){
        this.getData(ACCESS_KEY, SECRET_KEY)
    }

    handlePress = e => {
        e.preventDefault();
        this.getData(ACCESS_KEY, SECRET_KEY)
    }

    render(){
        return(
            <div>
                <button onClick={this.handlePress}>Refresh Users</button>
                {
                    this.state.data !== '' ? this.state.data.Users.map( (user, index) => {
                        return (
                            <LUHelper info={user} index={index}/>
                        ) 
                    }) : <p>No users in DB</p>
                }
            </div>
        )
    }
}