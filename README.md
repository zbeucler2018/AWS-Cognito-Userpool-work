# Run Instructions
1. Make sure that `node` and `npm` are installed on your computer
2. Download this repo
3. After the download finishes, `cd` into the directory and run `npm install`
5. Then, update the `UserPoolId` and `ClientId` variables in `UserPool.js`
6. Then update the `ACCESS_KEY`, `SECRET_KEY`, and `UserPoolId` variables in `ListUsers.js`
7. Then, run `npm start` to run the app

# Resources
### Tutorial video 
- https://www.youtube.com/watch?v=U9rIWahHwOI&list=PLRFRM3JNuCktnzEUihQOHINPFjmfHKZMg&index=1
### Playlists 
- https://www.youtube.com/playlist?list=PLRFRM3JNuCktnzEUihQOHINPFjmfHKZMg
- https://www.youtube.com/playlist?list=PLaxxQQak6D_eARpHp6JdMq3rvD5A-WU9N
### Delete user
- https://www.npmjs.com/package/amazon-cognito-identity-js


# Notes

### ATTRIBUTES
- ID
- name
- email
- customer_id
- customer_name
- password
- email_vertified (builtin?)
- role
- secondary_employee_id

## Delete user
```javascript
cognitoUser.deleteUser(function(err, result) {
	if (err) {
		alert(err.message || JSON.stringify(err));
		return;
	}
	console.log('call result: ' + result);
});
```