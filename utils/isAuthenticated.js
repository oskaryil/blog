const isAdmin = (req, res, next) => {
	console.log('hello');
	if(req.user) {
		const user = req.user;
		console.log('user logged in');
		if(user.admin) {
			console.log('user is admin');
			return next();
		}	else { 
			return next(new Error("User not an admin"));
		}
	} else {
		return next(new Error("No user logged in"));
	}
};

module.exports = {
	isAdmin
};
