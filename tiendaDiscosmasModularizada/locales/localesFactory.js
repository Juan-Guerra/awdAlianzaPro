app.service("localesService", [
  "$http",
  "localesCTEOptions",
  "localesCTE",
  function($http, localesCTEOptions, localesCTE) {
    this.traerOpcionesDelocalesService = function() {
      return localesCTEOptions;
    };

    this.agregarAlocalesService = function(nuevoLocal) {
      localesCTE.push(nuevoLocal);
    };

    this.damelocalesService = function() {
      return localesCTE;
    };

    this.dbGetLocales = function() {
      return $http({ method: "GET", url: "http://localhost:3000/locales" });
    };

    this.dbPostLocales = function(nuevoLocal) {
      return $http.post("http://localhost:3000/locales", nuevoLocal);
    };

    this.dbBorrarLocales = function(borrarLocal) {
      return $http.delete(
        "http://localhost:3000/locales" + editarLocales.id,
        editarLocales
      );
    };

    this.dbGetLocalesDetalle = function(localId) {
      return $http({
        method: "GET",
        url: "http://localhost:3000/locales/" + localId
      });
    };
  }
]);
