app.controller("accessController", [
  "$scope",
  "$location",
  "autenticacionServicio",
  function($scope, $location, autenticacionServicio) {
    $scope.acceso = function() {
      $scope.dataLoading = true;
      autenticacionServicio.Login(
        $scope.usuario.nombre,
        $scope.usuario.password,
        function(response) {
          if (response.success) {
            autenticacionServicio.SetCredentials(
              $scope.usuario.nombre,
              $scope.password
            );
            $location.path("/");
          } else {
            $scope.dataLoading = false;
            console.log("Error:" + response.message);
          }
        }
      );
    };
    $scope.logout = function() {
      autenticacionServicio.ClearCredentials();
      $location.path("/acceso");
    };
  }
]);
