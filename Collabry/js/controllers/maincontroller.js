collabry.controller('mainController', ['$scope', function($scope){
    $scope.email = 'email@email.com';
    $scope.name = "John";
    $scope.fullName = "John Smith";
    $scope.projects = ['Mark 425', 'PsyCH 101', 'poli 373', 'mark 201']; //array of group names
    $scope.currentProject = $scope.projects[0];
    //$scope.pickProject = function($index){$scope.currentProject = $scope.projects[$index];};

}]);