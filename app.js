    const express = require('express');
    const app = express();
        app.get('/new', (req, res) => {
          res.send('Hello, New Endpoint!');
        });        

    module.exports = app;