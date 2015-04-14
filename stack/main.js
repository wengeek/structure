/**
  * 栈的实现，后入先出LIFO
  */
function Stack() {
	this.dataStore = [];
	this.top = 0;
}

//入栈
Stack.prototype.push = function(element) {
	this.dataStore[this.top++] = element;
};

//出栈
Stack.prototype.pop = function() {
	return this.dataStore[--this.top];
};

//栈顶
Stack.prototype.peek = function() {
	return this.dataStore[this.top - 1];
};

//清空栈
Stack.prototype.clear = function() {
	delete this.dataStore;
	this.dataStore = [];
	this.top = 0;
};

//栈中元素个数
Stack.prototype.length = function() {
	return this.top;
};