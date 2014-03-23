app.Views.Error = app.Views.Abstract.extend({
	init: function (opts) {
		this._alreadyLoaded = false;
		this._code = 404;
	},
	_dataId: "page-error",
	loadTemplate: function (callback) {
		SDK.Template.get('/templates/home.html', function (err, res) {
			if (err) return alert('Une erreur s\'est produite');
			callback(res);
		});
	},
	setCode: function (code) {
		this._code = code;
		return (this);
	},
	render: function (callback) {
		var self = this;
		callback = callback || $.noop;
		if (this._alreadyLoaded) {
			this.show();
			return callback();
		}
		this.loadTemplate(function (html) {
			self.$el.html(html);
			self.app.$content.append(self.$el);
			self._alreadyLoaded = true;
			callback.apply(self, []);
		});
	}
});