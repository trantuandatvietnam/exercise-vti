class Person {
	constructor(fullname, age, weight) {
		this.fullname = fullname;
		this.age = age;
		this.weight = weight;
	}
	eating() {
		console.log("Person is eating");
	}
}

const dat = new Person("Trần Tuấn Đạt", 20, 50);

console.log(dat);