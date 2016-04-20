Template.Users.onCreated(function(){
	this.autorun(() => {
		this.subscribe('allUsers');
	})
});

Template.Users.helpers({
	users: function(){
		return Meteor.users.find();
	},
	userEmail: function(){
		return this.emails[0].address;
	},
	isAdmin: function(){
		//userId = usuario logado
		return Roles.userIsInRole(this._id, 'admin') ? 'admin' : '';
	}
})

Template.Users.events({
	'click .user_id': function() {
		Session.set('currentUser', this);
	},
	'click .toggle-admin': function() {
		// if(Roles.userIsInRole(this._id, 'admin')) {
		// 	Roles.removeUsersFromRoles(this._id, 'admin');
		// } else {
		// 	Roles.addUsersToRoles(this._id, 'admin');
		// }
		Meteor.call('toggleAdmin', this._id);
	}
});