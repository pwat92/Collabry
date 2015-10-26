collabry.directive('appSum', function(){
    return {
        restrict: 'E',
        scope: {info: '='},
        template: '<div class="col-md-6"><div class="updates"></div></div>' //templateURL: "appsum.html"
    };
});
