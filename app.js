let express = require('express');
let app = express();

app.get('/', function (req, res) {
   res.send('jenkins!!! yuhooooo! update! auto reload pm2!!');
})

let server = app.listen(3005, function () {
    let host = server.address().address
    let port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
