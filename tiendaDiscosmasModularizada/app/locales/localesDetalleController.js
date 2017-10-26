app.controller("localesDetalleController", [
  "$scope",
  "localesServicio",
  "$routeParams",
  function($scope, localesServicio, $routeParams) {
    // detalles de los locales //

    $scope.localesDetalleModelo = {};
    // me trae el valor de locales id de la URL con el servicio de Angular $routeParams, proveído por el módulo ng-Route
    localesServicio
      .dbGetLocalesDetalle($routeParams.id)
      .then(function(response) {
        $scope.localesDetalleModelo = response.data;
      });
  }
]);
