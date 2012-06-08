// =============================================================================
//		Make Templates work like Mustache
// =============================================================================
_.templateSettings = {
	interpolate : /\{\{(.+?)\}\}/g
};

window.Views = {
	
	// =======================================================
	// 	Main App View
	// =======================================================
	mainApp : Parse.View.extend({
	
		initialize : function() { this.render(); },
		
		el : "body",	
		tagName : "div",
	 
	    template : _.template(TMPL.mainApp),
	 
	    render : function (eventName) {
	        $(this.el).append(this.template());
	        return this;
	    },
	    
	    events : {
	    	"click #user-login": "openLogin",
	    	"click #main-menu": "toggleMenu"
	    },
	    
	    openLogin : function() {
	    	var openLoginModal = new Views.loginModal();
	    },
	    
	    toggleMenu : function() {		
			this.$("#main-menu .dropdown").toggleClass("open")
		}
	
	}),
	
	// =======================================================
	// 	Login View
	// =======================================================
	loginModal : Parse.View.extend({
		
		el : "body",
		tagName : "div",
		className : "login-modal-tmpl",
		
		initialize: function() { this.render(); },
		
		template : _.template(TMPL.loginModal),
		
		render : function () {
			$("body").addClass("modal");
			$(this.el).append(this.template());
			$("#email").focus();
			return this;
		},
		
		events : {
			"click .icon-remove" : "closeModal",
			"click .modal-coverall" : "closeModal",
			"click #log-in" : "login",
			"click #signup" : "signUp",
			"keypress #password"  : "updateOnEnter"
		},
		
		closeModal : function() {	    	
			$("body").removeClass("modal");
			$(".login-modal-tmpl, .modal-coverall, #login").remove();
		},
		
		login : function() {    
		
			var emailField = $("#email").val()
			  , passwordField = $("#password").val()
			  , rememberMeField = $("#remember-me").val()
			  , self = this;
			
			Parse.User.logIn(emailField, passwordField, {
				success: function(user) {
					// Close the Modal
					self.closeModal();
					// Run the Successful Login method
					self.successLogin();
					
					// Add something else useful here
					
				},
				error: function(user, error) {
					console.log("An Error Occured", "User: ", user, "Error: ", error)
				}
			});
		},
		
		signUp : function() {
			var emailField = $("#email").val()
			  , passwordField = $("#password").val()
			  , rememberMeField = $("#remember-me").val()
			  , self = this;
			
			window.user = new Parse.User();
			user.set({
				"username" : emailField,
				"password" : passwordField,
				"email" : emailField
			});
			
			user.signUp(null, {
				success: function(user) {
					// Close the Modal
					self.closeModal();
					
					// Add something else useful here
					
				},
				error: function(user, error) {
					// Show the error message somewhere and let the user try again.
					alert("Error: " + error.code + " " + error.message);
				}
			});
		},
		
		updateOnEnter : function(e) {
			if ( e.keyCode == 13 ) { this.login(); }
		},
		
		successLogin : function(data, rememberMe, loginInfo, newUser) {
			
			// Here is where something useful would go
			
		}
		
	})
	
}