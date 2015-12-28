var server = require('./server');
var router = require('./router');
var requesthandlers = require('./requesthandlers');

var handle = {}
handle["/"] = requesthandlers.start();
handle["/start"] = requesthandlers.start;
handle["/upload"] = requesthandlers.upload;

server.start(router.route, handle);
