var express = require('express');
var router = express.Router();
var express = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: 'mysql://b77162eee91cc0:e7b12f49@us-cdbr-iron-east-05.cleardb.net/heroku_9dc6f9b455b241c?reconnect=true',
  user: 'root',
  password: 'root',
  database: 'plannerdb',

});
var app = express();

connection.connect(function(err) {
  if (!err) {
    console.log("Database is connected ... nn");
  } else {
    console.log("Errpr", err);
  }
});
router.post("/", function(req, res) {
  connection.query('SELECT * FROM taches where user = ?   ', [req.body.username], function(err, rows, fields) {

    if (!err) {
      console.log('The solution is: ', rows);
      res.status(200).json({
        taches: rows
      });
    } else
      console.log('Error while performing Query.' + err);
  });
});

router.post("/insert", function(req, res) {


  connection.query('INSERT INTO taches (name, stat, user) VALUES ("' + req.body.name + '", "' + req.body.stat + '", "' + req.body.username + '")', function(err, rows, fields) {
    if (!err) {


      res.status(200).json({
        id: rows.insertId,
        name: req.body.name,
        stat: req.body.stat
      });
    } else {
      console.log('Error while performing Query.' + err);
    }

  });
});
router.put("/:id", function(req, res) {
  connection.query('UPDATE taches SET name = ? ,  stat =  ?  WHERE id =?', [req.body.name, req.body.stat, req.params.id], function(err, rows, fields) {
    //console.log(req.body);
    if (!err) {
      console.log('MAJ: ', rows);
      res.status(200).json({
        taches: rows
      });
    }
  });
});

router.delete("/:id", function(req, res) {
  console.log(req.params.id);
  connection.query('DELETE  FROM taches WHERE id = ? ', [req.params.id], function(err, rows, fields) {
    //console.log(req.body);
    if (!err) {
      console.log('Suppression ', rows);
      res.status(200).json({
        taches: rows
      });

    } else {
      console.log(err);
    }
  });
});
router.post("/register", function(req, res) {
  connection.query('INSERT INTO users  (username,password) VALUES (?,?)', [req.body.newusername, req.body.newpassword], function(err, rows, fields) {



    if (!err) {
      if (rows == "") {
        res.status(200).json({
          added: 0
        });
      } else {
        res.status(200).json({
          added: 1
        });
      }
    } else {
      console.log(err);
    }
  });
});
router.post("/login", function(req, res) {
  console.log(req.body.username);
  connection.query('SELECT *  FROM users WHERE username = ? AND password = ? ', [req.body.username, req.body.password], function(err, rows, fields) {
    //console.log(req.body);
    if (!err) {
      if (rows == "") {
        res.status(200).json({
          login: 0
        });
      } else {
        res.status(200).json({
          login: 1
        });
      }


    } else {
      console.log(err);
    }
  });
});

module.exports = router;
