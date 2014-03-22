SDK.Template = function () {
	this.__templates = {};
	Object.defineProperty(this, '__templates', {
		"enumerable": false
	});
};

SDK.Template.prototype.get = function (url, callback) {
	if (this.__templates[url]) return callback(null, this.__templates['url']);
	var self = this;
	$.ajax({
		"url": url,
		'type': "GET"
	})
	.done(function (html) {
		self.__templates[url] = html;
		callback(null, html);
	})
	.fail(callback);
};

SDK.Template = new SDK.Template();