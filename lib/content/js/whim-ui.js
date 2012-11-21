// Our angular server communication service module
app = angular.module('whimUIModule', ['ui']);
app.factory('whimServer', function($rootScope)
{
	var whimServer = {};

	function applyFunctionFromServer(functionName)
	{
		whimServer[functionName] = function(callback)
		{
			now[functionName] = function()
			{
				var args = arguments;
				$rootScope.$apply(function()
				{
					callback.apply(args);
				});
			};
		};
	}

	function applyFunctionToServer(functionName)
	{
		whimServer[functionName] = function(callback)
		{
			var args = arguments;
			now[functionName].apply({now:now}, args);
		}
	}

	// Functions we can call on our server
	applyFunctionToServer("getWidgets");

	return whimServer;
});

function WHIMUICtrl($scope, whimServer)
{
	$scope.widgets = {};

	/*whimServer.getWidgets = function(widgets)
	{
		$scope.$apply(function()
		{
			$scope.widgets = widgets;
		});
	};*/

	$scope.setDesignMode = function(designMode)
	{
		$scope.designMode = designMode;
		$scope.designModeText = ($scope.designMode) ? "Designing" : "Running";
	};

	$scope.toggleDesignMode = function()
	{
		$scope.setDesignMode(!$scope.designMode);
	};

	$scope.setDesignMode(false);
}

var whimUI = new function()
{
	/*var inDesignMode = false;
	var DESIGN_BUTTON = "#btnDesignMode";
	var WIDGET_TOOLBOX = "#widgetToolbox";
	var gridster;
	var self = this;*/

	this.begin = function()
	{
		now.ready(function()
		{
			// Tell angular that we're ready
			/*angular.bootstrap(document, ['whimUIModule']);

			// Fade in our UI
			$("body").show("fade");*/
		});

		$(function()
		{
			angular.bootstrap(document, ['whimUIModule']);
			$("body").show("fade");

			// Setup our main UI elements
			/*$(DESIGN_BUTTON).button().click(function(event)
			{
				self.setDesignMode(!inDesignMode, true);
			});

			$(WIDGET_TOOLBOX).accordion({
				collapsible:true,
				heightStyle:"fill",
				header     :"div > h3"
			});*/

			/*gridster = $(".layout-grid ul").gridster({
				widget_margins        :[10, 10],
				widget_base_dimensions:[140, 140]
			}).data('gridster');*/

			// Set our defaults
			//self.setDesignMode(false, false);


		});
	};

	/*this.setDesignMode = function(designMode, animate)
	{
		inDesignMode = designMode;

		if(inDesignMode)
		{
			gridster.enable();
			$(DESIGN_BUTTON).button("option", "label", "Designing");
			(animate) ? $(WIDGET_TOOLBOX).show("slide") : $(WIDGET_TOOLBOX).show();

			$(".widgetTool").draggable(
				{
					revert: true,
					helper: "clone"
				}
			);
		}
		else
		{
			gridster.disable();
			$(DESIGN_BUTTON).button("option", "label", "Running");
			(animate) ? $(WIDGET_TOOLBOX).hide("slide") : $(WIDGET_TOOLBOX).hide();
		}
	};*/
};