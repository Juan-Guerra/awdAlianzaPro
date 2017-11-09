app.directive("bootonRegreso", function() {
  return {
    template: '<div ng-click="volver()">Volver</div>',
    link: function(scope, element) {
      $(element).css({
        color: "red",
        "text-decoration": "underline",
        cursor: "pointer"
      });

      scope.back = function() {
        console.log(scope.botonRegreso);
        history.back();
      };
    }
  };
});


//