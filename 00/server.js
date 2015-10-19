var program = function() { // la variable program es la única variable de entorno en este momento
    var express = require('express');
    var app = express();


    app.use(express.static(__dirname + "/"));



    app.listen(3000);
    console.log("Ejecutando en puerto 3000");



    // myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http){
    // 	console.log("Acá defini forzadamente un controller");
    // }]);

    // Diferencia entre dos definiciones, una en JS puro y la Otra en Angular:
    // JS Puro:
    /*var worker = createWorker();

    worker.job1();
    worker.job2();*/


    // Esto mismo en Angular se vería así:
    /*var createWorker = function(){
    	return {

    	};
    };*/

    var createWorker = function() {
        // todo esto es un modulo porque encabsulamos código en una funcion 
        var workCount = 0;
        var task1 = function() {
            console.log("task1 " + workCount);
            workCount += 1;
        };

        var task2 = function() {
            workCount += 1;
            console.log("task2 " + workCount);
        };


        return {
            job1: task1,
            job2: task2
        };
    };

    var worker = createWorker();

    worker.job1();
    worker.job2();
    worker.job2();
    worker.job2();
    worker.job2();

}

program();
