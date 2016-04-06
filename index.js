var express = require('express');
var app = express();

app.get('/', function(req, res) {
    var body = '<h1>首頁</h1>' +
        '<h2>這是我的hw5</h2>' +
        '<p>阿阿阿阿阿阿阿阿阿阿</p>';
    res.set('Content-Type', 'text/html');
    res.send(body);
});

app.get('/api/query', function(req,res) {
    var json = {};
    json['x'] = req.query.x;
    json['y'] = req.query.y;
    
    res.send(json);
});

app.get('/api/user/:id', function(req,res) {
    var data = {1: {id: 1, name: 'Joe', age: 18}, 
                2: {id: 2, name: 'John', age: 22}};

    var id = req.params.id;
    res.send(data[id]);
});

app.get('*', function(req, res){
    res.sendStatus(404);
});

app.listen(8000, function() {
    console.log('The app is listening to the port 8000');
});
