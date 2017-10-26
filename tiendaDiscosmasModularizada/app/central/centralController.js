app.controller("centralController", [
  "$scope",
  function($scope) {
    $scope.nuevoDisco = {};
    $scope.Discos = [
      {
        texto: "nombre",
        autor: "autor",
        isEditing: false
      },
      {
        texto: "nombre",
        autor: "autor",
        isEditing: false
      }
    ];

    $scope.nuevoDisco.autor = "Nombre de Autor";
    $scope.isSendit = false;

    $scope.agregarDisco = function() {
      $scope.nuevoDisco.isEditing = false;

      $scope.agregarDisco.isEditing = false;
      $scope.discos.push($scope.nuevoDisco);
      $scope.nuevoDisco = {};
      $scope.nuevoDisco.autor = "...";
      $scope.nuevoDisco.isEditing = false;
      $scope.isSendit = false;
    };

    $scope.borrarDisco = function(disco) {
      var index = $scope.discos.indexOf(disco);

      $scope.discos.splice(index, 1);
      $scope.isSendit = false;
    };

    $scope.MostrarEditarDisco = function(disco) {
      disco.texto = "";
      disco.isEditing = true;
      $scope.isSendit = false;
    };

    $scope.editarDisco = function(disco) {
      disco.isEditing = false;
      $scope.isSendit = false;
    };

    $scope.enviarAlServer = function() {
      $scope.isSentit = true;
    };
  }
]);
