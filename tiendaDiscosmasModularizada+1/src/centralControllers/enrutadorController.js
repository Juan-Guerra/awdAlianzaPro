app.controller("enrutadorController", function(
  $scope,
  $route,
  $routeParams,
  $location
) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;

  $scope.urlNav = '/views/base/nav.html';
  $scope.urlUsuarios = 'src/usuarios/usuarios.html';
  $scope.urlLocales= 'src/locales/locales.html';
  $scope.urlFooter = 'src/views/base/footer.html';
  $scope.urlTodo = 'src/views/base/todo.html'
});
