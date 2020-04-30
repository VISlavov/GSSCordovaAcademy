App.CredentialsService = (function() {
	var self = {};
	self.login = function(userVM) {
		console.log('call to backend with', 'name', userVM.name, 'password', userVM.password);
	}
	return self;
})();
