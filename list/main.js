/**
  * 列表实现
  */
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
}

//向列表中添加元素
List.prototype.append = function(element) {
	this.dataStore[this.listSize++] = element;
};

//查找列表中的元素
List.prototype.find = function(element) {
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] === element) {
			return i;
		}
	}

	return -1;
};

//移除列表中的元素
List.prototype.remove = function(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}

	return false;
};

//返回列表元素个数
List.prototype.length = function() {
	return this.listSize;
};

//显示列表中的元素
List.prototype.toString = function() {
	return this.dataStore;
};

//向列表插入元素
List.prototype.insert = function(element, after) {
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos + 1, 0, element);
		++this.listSize;
		return true;
	}

	return false;
};

//清空元素
List.prototype.clear = function() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
};

//判断是否存在某个值
List.prototype.contains = function(element) {
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] === element) {
			return true;
		}
	}

	return false;
};

//迭代器
//列表头
List.prototype.front = function() {
	this.pos = 0;
};

//列表尾
List.prototype.end = function() {
	this.pos = this.listSize - 1;
};

//指针向前
List.prototype.prev = function() {
	if (this.pos > 0) {
		--this.pos;
	}
};

//指针往后移
List.prototype.next = function() {
	if (this.pos < this.listSize - 1) {
		++this.pos;  
	}
};

//当前位置
List.prototype.currPos = function() {
	return this.pos;
};

//移动指针
List.prototype.moveTo = function(position) {
	this.pos = position;
};

//获取指针指向的元素
List.prototype.getElement = function() {
	return this.dataStore[this.pos];
};