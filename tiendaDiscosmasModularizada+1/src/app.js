var app = angular.module("miTienda", ["ngRoute", "angular-md5", "ngCookies"]);

app.config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "./home/home.html",
        controller: "homeController"
      })
      .when("/usuarios", {
        templateUrl: "./usuarios/usuarios.html",
        controller: "usuariosController"
      })
      .when("/discos", {
        templateUrl: "./discos/discos.html",
        controller: "discosController"
      })
      .when("/locales", {
        templateUrl: "./locales/locales.html",
        controller: "localesController"
      })
      .when("/registro", {
        templateUrl: "./registro/registro.html",
        controller: "registroController"
      })
      .when("/home", {
        templateUrl: "./home/login.html",
        controller: "accesoController"
      })
      .when("/usuarios", {
        templateUrl: "./usuarios/usuarios.html",
        controller: "usuariosController"
      })
      .when("/discos/:id", {
        templateUrl: "./discos/discosDetalle.html",
        controller: "discosDetalleController"
      })
      .otherwise({ redirectTo: "/" });
  }
]);

app.run([
  "$rootScope",
  "$location",
  "$cookies",
  "$http",
  function($rootScope, $location, $cookies, $http) {
    // mantenerse logueado luego de resfrescar la pagina
    $rootScope.globals = $cookies.getObject("globals") || false; //Obtengo los valore de las cookies si hay
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common["Authorization"] =
        "Basic " + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on("$locationChangeStart", function(event, next, current) {
      // redirect a la pagina de login sino no hay usuario logueado
      /* if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
          $location.path('/login');
      }
      */
      // redirect a la pagina de login sino no hay usuario logueado y no tiene acceso a determinadas paginas
      var restrictedPage =
        $.inArray($location.path(), ["/login", "/registro"]) === -1;
      var loggedIn = $rootScope.globals ? $rootScope.globals.currentUser : null;
      var userRole = $rootScope.globals
        ? $rootScope.globals.currentUser.userRole
        : null;
      if (restrictedPage && !loggedIn) {
        $location.path("/login");
      }
      if (userRole == "admin" && loggedIn) {
        $location.path("/usuarios");
      }
      //solo podra acceder al resto de las vistas si hay usuario logueado sino solo vera registro y login.
    });
  }
]);
