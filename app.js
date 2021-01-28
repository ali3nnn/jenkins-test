let express = require('express');
let path = require('path');
let app = express();

// app.use(express.static(path.join(__dirname,'src')));
app.use(express.static(path.join(__dirname,'public')));


app.get('/', function (req, res) {
   // console.log(path.join(__dirname + '/index.html'));
   res.sendFile(path.join(__dirname + '/index.html'));
})

let server = app.listen(9949, function () {
    let host = server.address().address
    let port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
