    // Get dependencies
    const express = require('express');
    const path = require('path');
    const http = require('http');
    const bodyParser = require('body-parser');
    var cool = require('cool-ascii-faces');

    //var db = require('./db/connect.js');
    // Get our API routes
    //const api = require('./server/routes/api');
    var appRoutes = require('./routes/index');
    const app = express();

    // Parsers for POST data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: false
    }));

    // Point static path to dist
    app.use(express.static(path.join(__dirname, 'client/dist/')));
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');

      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    app.use('/', appRoutes)
    // Set our api routes
    //app.use('/api', api);

    // Catch all other routes and return the index file
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/dist/index.html'));
    });
    app.get('/cool', function(request, response) {
      response.send(cool());
    });
    /**
     * Get port from environment and store in Express.
     */
    const port = process.env.PORT || '4001';
    app.set('port', port);

    /**
     * Create HTTP server.
     */
    const server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(port, () => console.log(`API running on localhost:${port}`));
