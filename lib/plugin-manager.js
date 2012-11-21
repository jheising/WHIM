var file = require("file");
var path = require("path");

var PLUGIN_DIR = "./../plugins";
var PLUGIN_DEF_FILENAME = "plugin.json";

exports = module.exports = pluginManager;

exports.initialize = function(WHIM)
{
	return new pluginManager(WHIM);
};

function pluginManager(WHIM)
{
	this.WHIM = WHIM;

	WHIM.everyClient.getWidgets = this.getWidgets;
};

pluginManager.prototype.start = function()
{

};

pluginManager.prototype.getWidgets = function(callback)
{
	if(callback)
	{
		callback([
			{
				group : {
					name : "Group 1",
					widgets : [
						{
							widget : {
								name : "Widget 1",
								icon : "",
								sizeX: 1,
								sizeY: 1
							}
						},
						{
							widget:{
								name :"Widget 2",
								icon :"",
								sizeX:1,
								sizeY:1
							}
						},
						{
							widget:{
								name :"Widget 2",
								icon :"",
								sizeX:1,
								sizeY:1
							}
						}
					]
				}
			},
			{
				group:{
					name   :"Group 2",
					widgets:[
						{
							widget:{
								name :"Widget 1",
								icon :"",
								sizeX:1,
								sizeY:1
							}
						},
						{
							widget:{
								name :"Widget 2",
								icon :"",
								sizeX:1,
								sizeY:1
							}
						},
						{
							widget:{
								name :"Widget 2",
								icon :"",
								sizeX:1,
								sizeY:1
							}
						}
					]
				}
			}
		]);
	}
}

/*pluginManager.prototype.loadPlugins = function(rootDirectory, filename, callback)
{
	var jsonFileData = {};

	file.walk(__dirname, function(error, dirPath, dirs, files)
	{
		for(var index = 0; index < files.length; index++)
		{
			var baseFilename = path.basename(files[index]);

			if(baseFilename == filename)
			{

			}
		}
	});
}*/