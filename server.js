var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

    res.json({
        'ipaddress': ip,
        'language': req.headers['accept-language'].split(',')[0],
        'software': req.headers['user-agent'].split(' (')[1].split(') ')[0]
    });
});

app.listen(port);