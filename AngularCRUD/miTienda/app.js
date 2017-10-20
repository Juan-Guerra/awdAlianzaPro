var app = angular.module(
  "miTienda",
  ["ngRoute"],
  ["angular-md5"],
  ["ngCookies"]
);

app.config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/index.html",
        controller: "centralController"
      })
      .when("/registro", {
        templateUrl: "/usuarios/registro/registro.html",
        controller: "/usuarios/registro/registroController"
      })
      .when("/login", {
        templateUrl: "/central/login.html",
        controller: "/usuarios/loginController"
      })
      .when("/locales", {
        templateUrl: "/locales/locales.html",
        controller: "/locales/localesController"
      })
      .when("/discos", {
        templateUrl: "/discos/discos.html",
        controller: "discosController"
      })
      .when("/discos/:id", {
        templateUrl: "/discos/discosDetalle.html",
        controller: "/discos/discosDetalleController"
      })
      .when("/usuarios", {
        templateUrl: "/usuarios/usuarios.html",
        controller: "usuariosController"
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
    $rootScope.globals = $cookies.getObject("globals") || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] =
        "Basic" + $rootScope.globals.currentuser.authdata;
    }

    $rootScope.$on("$locationChangeStart", function(event, next, current) {
      var restrictedPage =
        $.inArray($location.path(), ["/login", "/registro"]) === -1;
      var loggedIn = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
        $location.path("/login");
      }
    });
  }
]);
