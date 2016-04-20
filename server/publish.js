Meteor.publish('allUsers', function() {
	//somente adm
  if (Roles.userIsInRole(this.userId, 'admin')) {
  	//lista todos os usuarios
    return Meteor.users.find({});
  }
});
