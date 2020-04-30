App.CredentialsVM = function(name, password) {
	var self = {};

	self.name = name;
	self.password = password;

	self.hasRights = function() {
		console.log('has rights');
	}

	return self;
}
