var app = app || {};

app.MemberDetailEditView = Backbone.View.extend ({
	el : '#memberDetail',
	
	memberTemplate : _.template($('#edit-member-detail-template').html()),

	events : {
		'click #editBtn' : 'edit',
		'click #deleteBtn' : 'delete',
	},
	
	model : '',
	
	initialize : function() {
		// 前に描画したメンバー詳細を削除する。
		this.$el.empty();
		
		// 画面を描画する。
		this.render();
	},
	
	render : function() {
		// パラメータで渡されたmodelで画面を描画する。
		this.$el.append(this.memberTemplate(this.model.toJSON()));
	},
	
	edit : function() {
		var name = this.$el.find('#name').val();
		var birthday = this.$el.find('#birthday').val();
		var position = this.$el.find('#position').val();
		var number = this.$el.find('#number').val();
		var hobby = this.$el.find('#hobby').val();
		var zeal = this.$el.find('#zeal').val();
	
		// 入力内容でモデルを変更する。
		this.model.set('name', name);
		this.model.set('birthday', birthday);
		this.model.set('position', position);
		this.model.set('number', number);
		this.model.set('hobby', hobby);
		this.model.set('zeal', zeal);
		
		this.model.save(null, {
			success : function(){console.log("success!!")},
		});
	},
	
	delete : function() {
		this.model.destroy();
	},
});