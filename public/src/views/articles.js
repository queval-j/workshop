app.Views.Articles = app.Views.Abstract.extend({
	init: function (opts) {
		this._alreadyLoaded = false;
		this.listingTmpl = null;
		this.contentTmpl = null;
	},
	_dataId: "page-articles",
	loadTemplate: function (callback) {
		SDK.Template.get('/templates/article.html', function (err, res) {
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
			self.$el.html(html);
			self.listingTmpl = self.$('#articleListing').html();
			self.contentTmpl = self.$('#articleContent').html();
			self.app.$content.append(self.$el);
			self._alreadyLoaded = true;
			callback.apply(self, []);
		});
		return (this);
	}
});