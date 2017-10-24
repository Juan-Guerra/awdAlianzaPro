app.controller("enrutadorController", function(
  $scope,
  $route,
  $routeParams,
  $location
) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;

  $scope.urlNav = '/estaticas/nav.html';
  $scope.urlUsuarios = '/usuarios/usuarios.html';
  $scope.urlLocales= '/locales/locales.html';
  $scope.urlFooter = '/estaticas/footer.html';
});
