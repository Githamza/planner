        var express    = require("express");
        var mysql      = require("mysql");
        var connection = mysql.createConnection({
          host     : '127.0.0.1',
          user     : 'root',
          password : 'root',
          database : 'plannerdb',

        });
        var app = express();

        connection.connect(function(err){
        if(!err) {
            console.log("Database is connected ... nn");
        } else {
            console.log("Errpr",err);
        }
        });

        
