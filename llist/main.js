/**
  * 链表的实现
  */

//节点
function Node(element) {
	this.element = element;
	this.next = null;
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
	newNode.next = current.next;
	current.next = newNode;
}

//找出元素的前一个
LList.prototype.findPrevious = function(item) {
	var currNode = this.head;
	while ((currNode.next !== null) && (currNode.next.element !== item)) {
		currNode = currNode.next;
	}

	return currNode;
}

//删除某个元素
LList.prototype.remove = function(item) {
	var prevNode = this.findPrevious(item);
	if (prevNode.next !== null) {
		prevNode.next = prevNode.next.next;
	}
}

//调试用的，显示链表元素
LList.prototype.display = function() {
	var currNode = this.head;
	while (currNode.next !== null) {
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

var cities = new LList();
cities.insert('Conway', 'head');
cities.insert('Ress', 'Conway');
cities.insert('Alma', 'Ress');
cities.insert('Blma', 'Ress');

cities.display();
print('');
cities.remove('Ress');
cities.display();
