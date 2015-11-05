var app = angular.module("collabry", ['ngRoute']);
app.config(function($routeProvider){
		$routeProvider.when('/', {
    	//controller: 'notificationcontroller', not made yet, trying to get routes working first
      	templateURL: 'views/notifications.html'
    })
})