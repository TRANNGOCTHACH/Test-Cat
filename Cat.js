function Cat(name) {
	// body...
	this.gender;
	this.name = name;
	this.age = 11;
	this.stomatch =[];
}

Cat.prototype.eat = function (mouse) {
	// body...
	this.stomatch.push(mouse);
}