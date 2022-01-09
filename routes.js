const fs = require('fs');

const requestHandler = (req, res)=>{

const method = req.method;

if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    req.write('<body><form action="/message" method="POST"><input type"text" name="message"><button type="submit"></button></form></body>');
    res.write('</html>');
    return res.end();
}

if(url ==='/message' && method === 'POST'){
    const body = [];
    req.on('data', (chuck)=>{
        console.log(chuck);
        body.push(chuck);
    });
    return req.on('end', ()=>{
        const parseBody = Buffer.contcat(body).toString();
        const message = parseBody.split ('=')[1];

        fs.writeFileSynsc('message.txt', message, (err)=>{
            res.statusCode = 302;
            res.setHeader('Location', '/');
        });
    });
    
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
}
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page</title><head>');
res.write('<body><h1>Hello from my Node.js Server!<h1></body>');
res.write('</html>');
res.end(); 

};

module.exports.handler = requestHandler;
module.exports.someText = 'some hard coded text';