window.app = {
	'url': 'http://localhost:8080',
	Views: {},
	views: {},
	Models: {},
	Collections: {},
	Router: null,
	$content: $('#content'),
	$menus: $('ul.nav.masthead-nav li'),
	getMenu: function () {
		return (this.$menus);
	},
	start: function () {
		this.e = _.extend({}, Backbone.Events);
		SDK.Api.setUrl(this.url);
		this.router = new app.Router({
			"app": this
		});
		Backbone.history.start({
			"pushState": false
		});
	}
};