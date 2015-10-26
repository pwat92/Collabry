collabry.controller('facebookController', ['$scope', function($scope){
    $scope.groupMembers = ['Andrew Doe','Patrick Watson', 'Dan Givon', 'Isabelle Jameson' ];
    $scope.messages = [
        {
            name: 'Andrew Doe',
            date: 'October 13',
            time: '6:17pm',
            seenby: ['Andrew Doe','Patrick Watson'],
            comments: 4,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur bibendum pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc efficitur blandit dolor vel elementum. Vivamus eget ex ligula. Donec nec dolor '
        },{
            name: 'Patrick Smith',
            date: 'November 13',
            time: '5:34pm',
            seenby: ['Andrew Doe','Patrick Watson'],
            comments: 2,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur bibendum pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc efficitur blandit dolor vel elementum. Vivamus eget ex ligula. Donec nec dolor '

        }
    ];
}]);


