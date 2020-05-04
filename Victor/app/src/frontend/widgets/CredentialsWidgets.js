$('.submit button').click(function() {
	var username = $($('input[name="username"]')[0]).val(),
			password = $($('input[name="password"]')[0]).val();
	
	var user = App.CredentialsVM(username, password);
	App.CredentialsService.login(user);
});
