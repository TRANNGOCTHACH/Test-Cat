function Cat(name) {
	// body...
	this.name = name;
	this.stomatch =[]
}

Cat.prototype.eat = function (mouse) {
	// body...
	this.stomatch.push(mouse);
}