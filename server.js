var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var api = require('./server/routes/api');
var config = require('./config/config');
var mongoose = require('mongoose');

var app = express();
require('./server/database')(mongoose);

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/api', api);
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'web/dist/index.html'));
});

app.listen(config.server.server_port, (err) => {
    console.log('listening on port ' + config.server.server_port);
});