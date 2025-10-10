const http = require("http");

function createServer() {
    return http.createServer((req, res) => {
        if (req.url === "/login" && req.method === "GET") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Welcome to the Login Page!");
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Page Not Found");
        }
    });
}

module.exports = createServer;
