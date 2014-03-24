SDK.Api = function () {
	this._baseUrl = "http://localhost";
};

SDK.Api.prototype.setUrl = function (url) {
	this._baseUrl = url;
};

SDK.Api.prototype._request = function (userOpts, callback) {
	var opts = {
		'url': this._baseUrl+userOpts['url'],
		'type': userOpts['type'] || 'GET',
		'data': userOpts['data'] || {},
		'dataType': 'application/json'
	};
	$.ajax(opts)
	.done(function (res) {
		callback(null, res);
	})
	.fail(callback);
};

SDK.Api.prototype.get = function (opts, callback) {
	this._request(opts, callback);
};

SDK.Api.prototype.post = function (opts, callback) {
	opts['type'] = "POST";
	this._request(opts, callback);
};

SDK.Api.prototype.put = function (opts, callback) {
	opts['type'] = "PUT";
	this._request(opts, callback);
};

SDK.Api.prototype.delete = function (opts, callback) {
	opts['type'] = "DELETE";
	this._request(opts, callback);
};

SDK.Api = new SDK.Api();