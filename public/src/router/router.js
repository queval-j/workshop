app.Router = Backbone.Router.extend({
	initialize: function (opts) {
		this.app = opts['app'];
	},
	routes: {
		'': 'home',
		'articles': 'articles'
	},
	home: function () {
		if (!this.app.views.Home) {
			SDK.Overlay.show();
			this.app.views.Home = new this.app.Views.Home({
				'app': this.app
			}).render(function () {
				SDK.Overlay.hide();
			});
			return;
		}
		this.app.views.Home.show();
	},
	articles: function () {
		if (!this.app.views.Home) {
			SDK.Overlay.show();
			this.app.views.Articles = new this.app.Views.Articles({
				'app': this.app
			}).render(function () {
				console.log('Article loaded');
				SDK.Overlay.hide();
			});
			return;
		}
		this.app.views.Articles.show();
	}
});