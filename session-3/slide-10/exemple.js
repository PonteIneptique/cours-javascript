var x = function() {
	console.log("Ecole Nationale")
};

var y = function(callback) {
	callback();
	console.log("Des Chartes");
};

y(x);
