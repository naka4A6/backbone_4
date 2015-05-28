var app = app || {};

app.MemberDetailView = Backbone.View.extend ({
	el : '#memberDetail',
	
	memberTemplate : _.template($('#member-detail-template').html()),
	
	model : '',
	
	initialize : function() {
		// 前に描画したメンバー紹介を削除する。
		this.$el.empty();
		
		// 画面を描画する。
		this.render();
	},
	
	render : function() {
		// パラメータで渡されたmodelで画面を描画する。
		this.$el.append(this.memberTemplate(this.model.toJSON()));
	},
});