/**
  *	二叉查找树(BST)的实现
  */
//栈，用于遍历二叉树
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

//节点
function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
}

//返回节点值
Node.prototype.show = function() {
	return this.data;
};

//二叉查找树
function BST() {
	this.root = null;
}

//插入节点
BST.prototype.insert = function(data) {
	var n = new Node(data, null, null);
	if (this.root === null) {
		this.root = n;
	} else {
		var current = this.root,
			parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current === null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current === null) {
					parent.right = n;
					break;
				}
			}
		}
	}
};

//非递归实现中序遍历
BST.prototype.inOrder = function() {
	var stack = new Stack(),
		current = this.root;

	if (current === null) {
		print('empty tree');
		return false;
	}

	while (current || stack.length()) {
		while (current) {
			stack.push(current);
			current = current.left;
		}

		current = stack.pop();
		putstr(current.show() + ' ');
		current = current.right;
	}
};

//非递归实现先序遍历
BST.prototype.preOrder = function() {
	var stack = new Stack(),
		current = this.root;

	if (current === null) {
		print('empty tree');
		return false;
	}

	while (current || stack.length()) {
		while (current) {
			stack.push(current);
			putstr(current.show() + ' ');
			current = current.left;
		}

		current = stack.pop();
		current = current.right;
	}
};

//非递归实现后序遍历
BST.prototype.postOrder = function() {
	var visited = [],
		stack = new Stack(),
		current = this.root;

	if (current === null) {
		print('empty tree');
		return false;
	}

	while (current) {
		stack.push(current);
		visited[stack.length()] = 0;
		current = current.left;
	}

	while (stack.length()) {
		current = stack.peek();
		while (current.right && visited[stack.length()] === 0) {
			visited[stack.length()] = 1;
			current = current.right;
			while (current) {
				stack.push(current);
				visited[stack.length()] = 0;
				current = current.left;
			}

			current = stack.peek();
		}

		putstr(current.show() + ' ');
		stack.pop();
	}
};

//查找最小值
BST.prototype.getMin = function() {
	var current = this.root;
	while (current.left !== null) {
		current = current.left;
	}

	return current.data;
};

//查找最大值
BST.prototype.getMax = function() {
	var current = this.root;
	while (current.right !== null) {
		current = current.right;
	}

	return current.data;
};

//查找给定值
BST.prototype.find = function(data) {
	var current = this.root;
	while (current !== null) {
		if (current.data === data) {
			return current;
		} else if (data < current.data) {
			current = current.left;
		} else {
			current = current.right;
		}
	}

	return null;
};

//移除节点
BST.prototype.remove = function(data) {
	this.root = removeNode(this.root, data);
};

//删除节点
//1.待删除节点是叶子节点，只需将其父节点指向它的链接指向null;
//2.待删除节点只包含一个子节点，使原本指向它的节点指向它的子节点;
//3.待删除节点包含两个子节点，查找其右子树上的最小值。
function removeNode(node, data) {
	if (node === null) {
		return null;
	}

	if (data === node.data) {
		if (node.left === null && node.right === null) {
			return null;
		}

		if (node.left === null) {
			return node.right;
		}

		if (node.right === null) {
			return node.left;
		}

		var tempNode = node.right;
		while (tempNode.left !== null) {
			tempNode = tempNode.left;
		}

		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	} else if (data < node.data) {
		node.left = removeNode(node.left, data);
		return node;
	} else {
		node.right = removeNode(node.right, data);
		return node;
	}
}