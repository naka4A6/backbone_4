var app = app || {};

app.TeamAboutView = Backbone.View.extend ({
	el : '#about',
	
	aboutTemplate : _.template($('#about-template').html()),
	
	collection : '',
	
	events : {
		'click .detail' : 'dispDetail',
		'click .edit' : 'editDetail',
	},
	
	initialize : function() {
		this.collection = new app.TeamCollection();
		
		// データを取得する。
		this.collection.fetch({reset: true});
		
		// データ取得後に、画面を描画する。
		this.listenTo(this.collection, 'reset' , this.render);
	},
	
	render : function() {
		var that = this;
		
		var i = 0;
		
		// コレクションに入っているデータ件数分、メンバーを表示する。
		this.collection.each(function(model){
			model.set('index', i);
			that.$el.append(that.aboutTemplate(model.toJSON()));
			
			i++;
		});
	},
	
	dispDetail : function (event) {
		// indexを取得する。
		var index = $(event.target).attr('id');
	
		// modelを取得する。
		var memberModel = this.collection.models[index];
		
		// メンバー詳細を表示する。
		var options = {
			model : memberModel
		};
		new app.MemberDetailView(options);
	},
	
	editDetail : function (event) {
		// indexを取得する。
		var index = $(event.target).attr('id');
	
		// modelを取得する。
		var memberModel = this.collection.models[index];
		
		// メンバー詳細(編集)を表示する。
		var options = {
			model : memberModel
		};
		new app.MemberDetailEditView(options);
	},
});