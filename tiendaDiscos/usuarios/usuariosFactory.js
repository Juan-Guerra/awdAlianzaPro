app.factory("usuariosServicio", [
  "$http",
  "$q",
  function($http, $q) {
    return {
      dbGetUsuarios: function() {
        var deferred = $q.defer();
        $http({ method: "GET", url: "http://localhost:3000/usuarios" }).then(
          function(response) {
            deferred.resolve(response.data);
          },
          function errorCallback(response) {
            deferred.reject(response);
          }
        );
        return deferred.promise;
      },

      dbGetUsuariosPorNombre: function(nombre) {
        var deferred = $q.defer();
        $http({
          method: "GET",
          url: "http://localhost:3000/usuarios/?nombre=" + usuario.nombre
        }).then(
          function(response) {
            deferred.resolve(response.data);
          },
          function errorCallback(response) {
            deferred.reject(response);
          }
        );
        return deferred.promise;
      },

      dbPutUsuario: function(editarUsuario) {
        var deferred = $q.defer();
        $http
          .put(
            "http://localhost:3000/usuarios/" + editarUsuario.id,
            editarUsuario
          )
          .then(
            function(response) {
              deferred.resolve(response.data);
            },
            function errorCallback(response) {
              deferred.reject(response);
            }
          );

        return deferred.promise;
      }
    };
  }
]);
