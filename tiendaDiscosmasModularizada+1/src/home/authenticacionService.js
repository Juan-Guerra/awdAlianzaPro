app.service("AuthenticationService", [
  "$http",
  "$cookies",
  "$rootScope",
  "usuariosServicio",
  function($http, $cookies, $rootScope, usuariosServicio) {
    this.login = function(username, password, callback) {
      usuariosServicio.dbGetUsuariosPorNombre(username).then(
        function(user) {
          if (user !== null && user.length > 0 && user[0].password) {
            response = { success: true, userRole: user[0].role };
          } else {
            response = {
              success: false,
              message: "Nombre de usuario o Password Incorrecto"
            };
          }
          callback(response);
        },
        function errorCallback(responseServer) {
          response = {
            success: false,
            message:
              "Error en el Servidor, por favor contacte al servicio de soporte:" +
              responseServer.status
          };
        },
        callback(response)
      );
    };
  }
]);
