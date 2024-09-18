const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Recorded!\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/': res.end('Welcome to our home page'); break;
            case '/about': res.end('Here is our short history'); break;
            default: res.end(`
                <h1>Oops!</h1>
                <p>We can't seem to find the page you are looking for</p>
                <a href="/">Back Home</a>
            `);
        }
    })
});
server.listen(5000, () => console.log("Server running on port 5000"));