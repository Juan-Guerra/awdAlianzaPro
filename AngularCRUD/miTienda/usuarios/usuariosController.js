app.controller("usuariosController", [
  "$scope",
  "usuariosServicio",
  function($scope, usuariosServicio) {
    /* Discos */

    $scope.usuariosS = {};
    $scope.usuariosModelo = {};
    $scope.selected = {};

    usuariosServicio.dbGetUsuarios().then(function(response) {
      $scope.usuariosS = response.data;
    });

    $scope.agregarUsuario = function() {
      var modal = $scope.usuariosModelo;

      usuariosServicio.dbPostUsuario(modal).then(function(response) {
        $scope.usuariosS.push(response);
      });
    };

    $scope.oneSelected = function(modalSelected) {
      modalSelected.selected = true;
    };

    $scope.borrarUsuario = function(index, modalSelected) {
      usuariosServicio.dbDeleteUsuario(modalSelected).then(function(response) {
        $scope.usuarioS.splice(index, 1);
        modalSelected.selected = false;
      });
    };

    $scope.editarUsuario = function(modalSelected) {
      usuariosServicio.dbPutUsuario(modalSelected).then(function(response) {
        modalSelected.selected = false;
      });
    };
  }
]);
