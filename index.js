function fromTo(from, to) {
	let count = from;
	return function() {
		console.log(count)
		if(count < to - 1) {
			count++;
		}else {
			count = undefined;
		}
	}
}
var index = fromTo(0, 3);
index(); // 0
index(); // 1
index(); // 2
index(); // undefined
index(); // undefined
index(); // undefined