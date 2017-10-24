app.factory("discosServicio", [
  "$http",
  function($http) {
    return {
      dbGetDiscos: function() {
        return $http({ method: "GET", url: "http://localhost:3000/discos" });
      },

      dbPostDiscos: function(nuevoDisco) {
        return $http({
          method: "POST",
          url: "http://localhost:3000/discos" + nuevoDisco
        });
      },

      dbBorrarDisco: function(borrarDisco) {
        return $http({
          method: "DELETE",
          url: "http://localhost:3000/discos/" + borradDisco.id
        });
      },

      dbPutDisco: function(editarDisco) {
        return $http.put(
          "http://localHost:3000/discos/" + editarDisco.id,
          editarDisco
        );
      }
    };
  }
]);
