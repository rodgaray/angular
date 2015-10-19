var programa = function() {

    var express = require('express');
    var app = express();

    app.use(express.static(__dirname + "/"));

    app.listen(3000);
    console.log("Levanta puerto 3000");


};
programa();
