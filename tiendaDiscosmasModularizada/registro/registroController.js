app.controller("registroController", [
  "$scope",
  "usuariosServicio",
  "$location",
  "$rootScope",
  function($scope, usuariosServicio, $location, $rootScope) {
    $scope.register = function() {
      $scope.dataLoading = true;
      usuariosServicio.dbPostUsuarios($scope.usuario).then(
        function(response) {
          if (response) {
            $location.path("/acceso");
          } else {
            $scope.dataLoading = false;
          }
        },
        function errorCallback(response) {
          $scope.dataLoading = false;
          console.log("Error:" + response.status);
        }
      );
    };
  }
]);
