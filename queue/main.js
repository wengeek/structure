/**
  * 队列实现，先进先出FIFO
  */
function Queue() {
	this.dataStore = [];
}

//入队
Queue.prototype.enqueue = function(element) {
	this.dataStore.push(element);
};

//出队
Queue.prototype.dequeue = function() {
	return this.dataStore.shift();
};

//队首
Queue.prototype.front = function() {
	return this.dataStore[0];
};

//队尾
Queue.prototype.back = function() {
	return this.dataStore[this.dataStore.length - 1];
};

//显示队列内所有元素
Queue.prototype.toString = function() {
	var retStr = '';
	for (var i = 0; i < this.dataStore.length; i++) {
		retStr += this.dataStore[i] + '\n';
	}

	return retStr;
};

//判断队列是否为空
Queue.prototype.empty = function() {
	if (this.dataStore.length === 0) {
		return true;
	}

	return false;
}