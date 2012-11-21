var util = require('util');
var socket = require('socket.io');

exports = module.exports = deviceDriver;

function deviceDriver()
{
	console.log(__dirname);
}

deviceDriver.prototype.handleConsoleCommand = function(consoleCommand)
{

}
