app.controller("localesController", [
  "$scope",
  "localesServicio",
  function($scope, localesServicio) {
      
    // LOCALES//

    $scope.localesS = {};
    $scope.localesModelo = {};
    $scope.localesSOptions = localesServicio.dameOpcionesDelocalesServicio();

    $scope.selected = {};

    localesServicio.dbGetLocales().then(function(response) {
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

    $scope.editarLocal = function(modalSelected) {
      localesServicio.dbPutLocal(modalSelected).then(function(response) {
        modalSelected.selected = false;
      });
    };
  }
]);
