app.controller("discosController", [
  "$scope",
  "discosServicio",
  function($scope, discosServicio) {
    /*Los discos!*/

    $scope.discos = {};
    $scope.discosModelo = {};
    $scope.selected = {};
    $scope.nombreDirectiva = "En Discos";

    discosServicio.dbGetDiscos().then(function(response) {
      angular.forEach(response.data, function(value, jey) {
        value.selected = false;
      });

      $scope.discosS = response.data;
    });

    $scope.agregarDisco = function() {
      var modal = $scope.discosModelo;

      discosServicio.dbPostDisco(modal).then(function(response) {
        $scope.discosS.push(response.data);
      });
    };

    $scope.oneSelected = function(modalSelected) {
      modalSelected.selected = true;
    };

    $scope.borrarDisco = function(index, modalSelected) {
      discosServicio.dbDeleteDisco(modalSelected).then(function(response) {
        $scope.DiscosS.splice(index, 1);
        modalSelected.selected = false;
      });
    };

    $scope.editarDisco = function(modalSelected) {
      discosServicio.dbPutDisco(modalSelected).then(function(response) {
        modalSelected.selected = false;
      });
    };
  }
]);
