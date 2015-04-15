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
		if (current.right && visited[stack.length()] === 0) {
			visited[stack.length()] = 1;
			current = current.right;
			while (current) {
				stack.push(current);
				visited[stack.length()] = 0;
				current = current.left;
			}
		}

		current = stack.pop();
		putstr(current.show() + ' ');
	}
};

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
print('In: ');
nums.inOrder();
print('\npre: ');
nums.preOrder();
print('\npost: ');
nums.postOrder();