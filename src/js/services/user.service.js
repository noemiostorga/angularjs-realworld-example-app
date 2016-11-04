export default class User {
   constructor(JWT, AppConstants, $http) {
    'ngInject';

     this._JWT = JWT;
     this._AppConstants = AppConstants;
     this._$http = $http;

    // Object to store our user properties
    this.current = null;
  }

  attemptAuth(type, credentials){
  	let route = (type === 'login') ? '/login' : '';
  	return this._$http({
  		url: this._AppConstants.api + '/users' + route,
  		method: 'POST',
  		data: {
  			user: credentials
  		}
  	}).then(
  	//on success
  		(res) => {
        this._JWT.save(res.data.user.token);
  			this.current = res.data.user;

  			return res;
  		}
  	);
  }

}