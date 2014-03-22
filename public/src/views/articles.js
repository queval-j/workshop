app.Views.Articles = app.Views.Abstract.extend({
	init: function (opts) {
		this._alreadyLoaded = false;
	},
	loadTemplate: function (callback) {
		SDK.Template.get('/templates/home.html', function (err, res) {
			if (err) return alert('Une erreur s\'est produite');
			callback(res);
		});
	},
	render: function (callback) {
		var self = this;
		callback = callback || $.noop;
		if (this._alreadyLoaded) {
			this.show();
			return callback();
		}
		this.loadTemplate(function (html) {
			self.app.$content.html(html);
			self._alreadyLoaded = true;
			callback();
		});
	}
});