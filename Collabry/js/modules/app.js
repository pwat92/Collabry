var collabry = angular.module("collabry", ['ngRoute']);
collabry.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'appsController',
            templateURL:'views/main.html'
        }),
        .otherwise({
        redirectTo: '/'
    });
});