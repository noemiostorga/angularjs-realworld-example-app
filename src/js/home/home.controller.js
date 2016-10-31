class HomeCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.random = AppConstants.random;

	console.log("hello");
  	
  }


}

export default HomeCtrl;
