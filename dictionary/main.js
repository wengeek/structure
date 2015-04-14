/**
  *	字典
  * 一种以键-值对形式存储数据的数据结构
  */
function Dictionary() {
	this.dataStore = [];
}

//添加元素
Dictionary.prototype.add = function(key, value) {
	this.dataStore[key] = value;
};

//查找元素
Dictionary.prototype.find = function(key) {
	return this.dataStore[key];
};

//删除元素
Dictionary.prototype.remove = function(key) {
	delete this.dataStore[key];
};

//显示所有元素
Dictionary.prototype.showAll = function() {
	for (var key in this.dataStore) {
		print(key + " -> " + this.dataStore[key]);
	}
};

//元素个数
Dictionary.prototype.count = function() {
	var n = 0;
	for (var key in this.dataStore) {
		n++;
	}
	return n;
}

//清空数据
Dictionary.prototype.clear = function() {
	var keys = Object.keys(this.dataStore),
		length = keys.length;
	for (var i = 0; i < length; i++) {
		delete this.dataStore[keys[i]];
	}
}