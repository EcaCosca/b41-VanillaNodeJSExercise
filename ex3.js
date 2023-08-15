// https://www.w3schools.com/nodejs/nodejs_filesystem.asp

const fs = require('fs');

fs.readFile('./test.html', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('testStephan.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080, ()=>{console.log("serevrrunning on port 8080");});