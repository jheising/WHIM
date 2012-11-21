var CLIENT_SCRIPT_URI = "/plugins/client";

exports = module.exports = clientManager;

exports.initialize = function(WHIM)
{
	return new clientManager(WHIM);
};

function clientManager(WHIM)
{
	var self = this;

	this.clientScripts = {};
	this.clientStyles = [];

	WHIM.app.use(CLIENT_SCRIPT_URI, function(req, res){
		self.handleClientScriptRequest(req, res);
	});

	//TODO: change URIs to local files

	// Add our default client scripts
	this.addClientScript("jquery", "/js/jquery-1.8.2.js");
	this.addClientScript("jquery-ui", "/js/jquery-ui-1.9.1.js");
	this.addClientScript("gridster", "/js/jquery.gridster.min.js");
	this.addClientScript("now", "/nowjs/now.js");
	this.addClientScript("angular", "/js/angular.js");
	this.addClientScript("angular-ui", "/js/angular-ui.js");
	this.addClientScript("whim", "/js/whim-ui.js");

	this.addClientCSS("/css/jquery-ui-1.9.1.css");
	this.addClientCSS("/css/angular-ui.css");
	this.addClientCSS("/css/style.css");

	this.WHIM = WHIM;
}

clientManager.prototype.start = function()
{

}

clientManager.prototype.addClientScript = function(scriptName, scriptUri)
{
	this.clientScripts[scriptName] = scriptUri;
}

clientManager.prototype.addClientCSS = function(cssUri)
{
	if(!(cssUri in this.clientStyles))
	{
		this.clientStyles.push(cssUri);
	}
}

clientManager.prototype.handleClientScriptRequest = function(req, res)
{
	res.type('application/javascript');

	var responseString = 'head.js(';

	for(var index = 0; index < this.clientStyles.length; index++)
	{
		responseString += '"' + this.clientStyles[index] + '", ';
	}

	for(var key in this.clientScripts)
	{
		responseString += '{"' + key + '":"' + this.clientScripts[key] + '"}, ';
	}

	responseString = responseString.replace(/,\s$/, "") + ', function(){whimUI.begin();});';

	res.send(responseString);
}