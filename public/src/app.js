window.app = {
	'url': 'http://localhost:8080',
	Views: {},
	views: {},
	Models: {},
	Collections: {},
	Router: null,
	$content: $('#content'),
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