window.SDK = function () {
	this.__app = null;
	this.__appCall = null;
	this.__SDKfiles = [
		'/src/SDK/sdk.template.js',
		'/src/SDK/sdk.overlay.js',
		'/src/SDK/sdk.api.js'
	];
};

SDK.prototype.attachApp = function (app, appCallback) {
	this.__app = _.extend({}, app);
	this.__appCall = appCallback;
	return (this);
};

SDK.prototype.start = function () {
	var i = -1,
		self = this,
	loadFunc = function () {
		++i;
		if (i < self.__SDKfiles.length) {
			$.getScript(self.__SDKfiles[i], loadFunc);
		} else {
			self.__app[self.__appCall]();
		}
	};
	loadFunc();
	return (this);
};

window.SDK = new SDK();