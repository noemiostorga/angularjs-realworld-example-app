export default class User {
	constructor(AppContstants, $http){
		'ngInject';

		this._AppConstants = AppContstants;
		this._$http = $http;

		this.current = null;
	}

	attemptAuth (type, credentials){
		let route =(type === 'login') ? '/login' : '' ;
		return  this._$http = ({
			url: this._AppConstants.api + '/users' + route,
			method: 'POST',
			data: {
				user: credentials
			}
		}).then(
			(res) => {
				this.current = res.data.user;
				return res;
			}
		);
	}
}