app.Views.Abstract = Backbone.View.extend({
	__pages: {
		_visible: true
	},
	_location: [],
	initialize: function (opts) {
		var self = this;
		this.app = opts['app'];
		this.app.e.on('newView', function (args) {
			if (args != self.cid)
				self.hide();
		});
		this.init(opts);
	},
	show: function () {
		this._show();
		if (this.__pages._visible)
			return;
		this.$el.show(0);
		this.__pages._visible = true;
		this.app.e.trigger('newView', this.cid);
	},
	hide: function () {
		this.$el.hide(0);
		this.__pages._visible = false;
	}
});