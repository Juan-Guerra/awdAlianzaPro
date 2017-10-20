app.service("autenticacionServicio",["$http","$cookies","$rootScope","usuariosServicio", function ($http,$cookies,$rootScope,usuariosServicio){
    this.login =  function(username,password, callback){
        usuariosServicio.dbGetUsuariosPorNombre(username)
        .then(function(user){
            if (user !== null && user.length > 0 && user[0].password){
                response = { success: true, userRole: user[0].role};
            }else{
                response = {success: false, message: 'Nombre de usuario o Password Incorrecto'};
        }
        callback(response);
    }, function errorCallback(responseServer){
        response = {success: false, message: 'Error en el Servidor, por favor contacte al servicio de soporte:'+responseServer.status};
    },
    callback(response)
        );

    };



this.SetCredentials = function(username,password,userRole){
    var authdata = Base64.encode(username + ':' + password);

$rootScope.globals = {
    currentUser: {
        username: username,
        authdata: authdata,
        userRole: userRole
    }
    };

    $http.defaults.headers.common['Authorization'] =  'Basic' + authdata;


    var cookieExp = new Date();
    cookieExp.setDate(cookieExp.getDate() + 7);
    $cookies.putObject('globals',$rootScope.globals, {expires: cookieExp});

    this.ClearCredentials = function(){
        $rootScope.globals = false;
        $cookies.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic';
    };


 var Base64 = {
        
                   keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
           
                   encode: function (input) {
                       
                       var output = "";
                       var chr1, chr2, chr3 = "";
                       var enc1, enc2, enc3, enc4 = "";
                       var i = 0;
           
                       do {
                           chr1 = input.charCodeAt(i++);
                           chr2 = input.charCodeAt(i++);
                           chr3 = input.charCodeAt(i++);
           
                           enc1 = chr1 >> 2;
                           enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                           enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                           enc4 = chr3 & 63;
           
                           if (isNaN(chr2)) {
                               enc3 = enc4 = 64;
                           } else if (isNaN(chr3)) {
                               enc4 = 64;
                           }
           
                           output = output +
                               this.keyStr.charAt(enc1) +
                               this.keyStr.charAt(enc2) +
                               this.keyStr.charAt(enc3) +
                               this.keyStr.charAt(enc4);
                           chr1 = chr2 = chr3 = "";
                           enc1 = enc2 = enc3 = enc4 = "";
                       } while (i < input.length);
           
                       return output;
                   },
        
                   decode: function (input) {
                       var output = "";
                       var chr1, chr2, chr3 = "";
                       var enc1, enc2, enc3, enc4 = "";
                       var i = 0;
           
                     
                       var base64test = /[^A-Za-z0-9\+\/\=]/g;
                       if (base64test.exec(input)) {
                           window.alert("Hubieron caracteres inválidos al formato Base64.\n" +
                               "Los caracteres válidos son: A-Z, a-z, 0-9, '+', '/', y '='\n" +
                               "En espera de errores a decodificar.");
                       }
                       input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
           
                       do {
                           enc1 = this.keyStr.indexOf(input.charAt(i++));
                           enc2 = this.keyStr.indexOf(input.charAt(i++));
                           enc3 = this.keyStr.indexOf(input.charAt(i++));
                           enc4 = this.keyStr.indexOf(input.charAt(i++));
           
                           chr1 = (enc1 << 2) | (enc2 >> 4);
                           chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                           chr3 = ((enc3 & 3) << 6) | enc4;
           
                           output = output + String.fromCharCode(chr1);
           
                           if (enc3 != 64) {
                               output = output + String.fromCharCode(chr2);
                           }
                           if (enc4 != 64) {
                               output = output + String.fromCharCode(chr3);
                           }
           
                           chr1 = chr2 = chr3 = "";
                           enc1 = enc2 = enc3 = enc4 = "";
           
                       } while (i < input.length);
           
                       return output;
                    }
                };
            
       
           