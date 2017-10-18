app.controller("discosController", ["$scope","discosServicio", function($scope,discosServicio) {
  
  /*Los discos!*/

  $scope.discos={};
  $scope.discosModelo = {};
  $scope.selected = {};


discosServicio.dbGetDiscos().then(function(response){
  $scope.discosS = response.data;
});



$scope.agregarDisco = function() {
  var modal = $scope.discosModelo;

  discosServicio.dbPostDisco(modal).then(function(response) {
    $scope.discosS.push(response);
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
