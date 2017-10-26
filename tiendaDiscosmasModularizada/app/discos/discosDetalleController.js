app.controller("discosDetalleController", [
  "$scope",
  "discosServicio",
  "$routeParams",
  function($scope, discosServicio, $routeParams) {
    
    // Detalles del Disco //

    $scope.discoDetalleModelo = {};

    discosServicio.dbGetDetalle($routeParams.id).then(function(response) {
      $scope.discosDetalleModelo = response.data;
    });
  }
]);
