app.controller("localesController", [
  "$scope",
  "localesServicio",
  function($scope, localesServicio) {
    // LOCALES//

    $scope.localesS = {};
    $scope.localesModelo = {};
    $scope.localesSOptions = localesServicio.dameOpcionesDelocalesServicio();
    $scope.tituloDirectiva = "En Locales";
    $scope.selected = {};

    localesServicio.dbGetLocales().then(function(response) {
      angular.forEach(response.data, function(value, key) {
        value.selected = false;
      });

      $scope.localesS = response.data;
    });

    $scope.agregarLocal = function() {
      var modal = $scope.localesModelo;

      localesServicio.dbPostLocal(modal).then(function(response) {
        $scope.localesS.push(response.data);
      });
    };

    $scope.oneSelected = function(modalSelected) {
      modalSelected.selected = true;
    };

    $scope.borrarLocal = function(index, modalSelected) {
      localesServicio.dbDeleteLocal(modalSelected).then(function(response) {
        $scope.localesS.splice(index, 1);
        modalSelected.selected = false;
      });
    };

    ($scope.editarLocal = function(modalSelected) {
      localesServicio.dbPutLocal(modalSelected).then(function(response) {
        modalSelected.selected = false;
      });
    }),
      ($scope.mapeoValorGeneral = "Lo que el controller General nos da");
    console.log("Este es:", $scope.mapeoValorGeneral);

    $scope.clickHiGeneral = function(msgDirectiva) {
      console.log("Esta es la función en el controlador General.");
      $scope.mensaje = msgDirectiva;
    };
  }
]);
