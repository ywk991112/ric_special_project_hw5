var express = require('express');
var app = express();

app.get('/', function(req, res) {
    var body = '<h1>首頁</h1>' +
        '<h2>這是我的hw5</h2>' +
        '<p>阿阿阿阿阿阿阿阿阿阿</p>';
    res.set('Content-Type', 'text/html');
    res.send(body);
});

app.listen(8000, function() {
    console.log('The app is listening to the port 8000');
});
