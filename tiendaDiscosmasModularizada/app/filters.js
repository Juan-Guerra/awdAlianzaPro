	app.filter('myBolder', function(){
		return function(z) {
			var a, b, text = "";
		for (a = 0; a < z.length; a++){
		b = z[a];
		if (a % 2 == 0){
			a = a.bold();
		}
		text += a;
		}
		return text;
		};
	});