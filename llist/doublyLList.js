/**
  * 双向链表的实现
  */

//节点
function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

//链表
function LList() {
	this.head = new Node('head');
}

//查找
LList.prototype.find = function(item) {
	var currNode = this.head;
	while (currNode.element !== item) {
		currNode = currNode.next;
	}

	return currNode;
}

//插入
LList.prototype.insert = function(newElement, item) {
	var newNode = new Node(newElement),
		current = this.find(item);
	if (current.next !== null) { //
		current.next.previous = newNode;
	}
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
}

//找出最后节点
LList.prototype.findLast = function() {
	var currNode = this.head;
	while (currNode.next !== null) {
		currNode = currNode.next;
	}

	return currNode;
}

//删除某个元素
LList.prototype.remove = function(item) {
	var currNode = this.find(item);
	if (currNode.next !== null) {
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

//调试用
//显示链表元素
LList.prototype.display = function() {
	var currNode = this.head;
	while (currNode.next !== null) {
		print(currNode.next.element);
		currNode = currNode.next;
	}
};

//反序输出链表
LList.prototype.dispReverse = function() {
	var currNode = this.findLast();
	while (currNode.previous !== null) {
		print(currNode.element);
		currNode = currNode.previous;
	}
};