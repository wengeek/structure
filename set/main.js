/**
  *	集合的实现
  */
function Set() {
	this.dataStore = [];
}

//添加数据
Set.prototype.add = function(data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
		return true;
	}

	return false;
};

//移除数据
Set.prototype.remove = function(data) {
	var pos = this.dataStore.indexOf(data);
	if (pos > -1) {
		this.dataStore.splice(pos, 1);
		return true;
	}

	return false;
};

//集合大小
Set.prototype.size = function() {
	return this.dataStore.length;
};

//输出全部数据
Set.prototype.show = function() {
	return this.dataStore;
};

//检查某元素是否属于该集合
Set.prototype.contains = function(data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true;
	}

	return false;
}

//并集
Set.prototype.union = function(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; i++) {
		tempSet.add(this.dataStore[i]);
	}

	for (var i = 0; i < set.dataStore.length; i++) {
		tempSet.add(set.dataStore[i]);
	}

	return tempSet;
};

//交集
Set.prototype.intersect = function(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; i++) {
		if (set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
};

//子集
Set.prototype.subset = function(set) {
	if (this.size() > set.size()) {
		return false;
	}

	for (var member in this.dataStore) {
		if (!set.contains(member)) {
			return false;
		}
	}
	return true;
};

//差集
Set.prototype.difference = function(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; i++) {
		if (!set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}

	return tempSet;
};