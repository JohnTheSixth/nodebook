'use strict'; // enforces strict syntax mode

const server = require('./server');
const router = require('./router');

server.start(router.route);
