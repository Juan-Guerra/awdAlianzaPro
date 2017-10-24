app.controller("loginController", ['$scope', 'md5', 'loginServicio', function ($scope, md5, loginServicio) {
    $scope.watch('password', function () {
        $scope.usuario.password = md5.createHash($scope.password || '');
    });

    AuthenticationService.Login($scope.username, md5UserPassword, function (response) {
        if (response.success) {
            AuthenticationService.SetCredentials($scope.username, md5UserPassword, response.userRole);
            $location.path('/');
        } else {
            $scope.dataLoading = false;
            console.log("Error:"+response.message);
        }
    });

$scope.logout = function() {
    AuthenticationService.ClearCredentials();
    $location.path('/login');
};
}]);
