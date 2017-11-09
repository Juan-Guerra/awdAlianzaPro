app.directive("cargandoBar", [function () {
    return {
        restrict: 'E',
        template: '<div class="progreso()">Progressing</div>',
        link: function (scope, elm, attrs) {
            scope.dataLoading = function () {
                return $http.pendingRequests.length > 0;
            };
            scope.$watch(scope.dataLoading, function (z){
                if (z) {
                    elm.show();
                } else {
                    elm.hide();
                }
            });
        }
    }
}
]);
