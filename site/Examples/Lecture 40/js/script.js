var message = "in global";
console.log("globa: message = " + message);

var a = function (){
	var message = "inside a";
	console.log("a: message = " + message);

	function b (){
		console.log("b: message = "+message)
	}
	b();
}

function b (){
		console.log("b: message = "+message)
	}

a();
b();