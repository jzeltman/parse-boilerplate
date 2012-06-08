window.TMPL = {
	
	
	
	
	// =======================================================
	// 	Main App
	// =======================================================
	mainApp : (
		'<div id="menu">' +
			'<h1 id="logo">Project Name</h1>' +
			'<div id="app-menu">' +
				'<ul>' +
					'<li id="main-menu">' +
						'<i class="icon-th-list"></i>' +
						'<ul class="dropdown">' +
							'<li>Item #1</li>' +
							'<li>Item #2</li>' +
							'<li>Item #3</li>' +
						'</ul>' +
					'</li>' +
					'<li id="user-login"><i class="icon-user"></i></li>' +
				'</ul>' +
			'</div>' +
		'</div>'
	),
	
	
	
	// =======================================================
	// 	Login 
	// =======================================================
	loginModal : (
		'<div class="modal-coverall"></div>' +
		'<div id="login" class="modal-container">' +
			'<h3>Login or Signup</h3>' +
			'<i class="icon-remove"></i>' +
			'<!-- <input type="text" id="username" placeholder="username" /> -->' +
			'<div class="f_left clearfix">' +
				'<span class="input-box">' +
					'<i class="icon-envelope"></i>' +
					'<input type="email" id="email" placeholder="email" />' +
				'</span>' +
				'<span class="input-box">' +
					'<i class="icon-key"></i>' +
					'<input type="password" id="password" placeholder="password" />' +
				'</span>' +
			'</div>' +
			'<div class="f_right clearfix">' +
				'<input type="submit" value="Sign Up" id="signup" />' +
				'<input type="submit" value="Log In" id="log-in" />' +
			'</div>' +
		'</div>'
	),
	
}