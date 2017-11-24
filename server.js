const express = require('express');
const http = require('http');
const os = require('os');

const port = 7474;
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  const hostname = os.hostname();
  const arch = os.arch();
  const freemem = os.freemem() / 1024 / 1024;
  const platform = os.platform();
  const release = os.release();
  const uptime = os.uptime();
  const cpuCores = os.cpus();

  res.render('index', {
    hostname,
    arch,
    freemem,
    platform,
    release,
    uptime,
    cpuCores
  });
});

const server = http.createServer(app);
server.listen(port, console.log(`Server is listening on localhost:${port}`));
