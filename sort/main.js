/**
  * 排序
  */
//生成数据
function CArray(numElements) {
	this.dataStore = [];
	this.numElements = numElements;
}

//生成数据
CArray.prototype.setData = function() {
	for (var i = 0; i < this.numElements; i++) {
		this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
	}
};

//清空数据
CArray.prototype.clear = function() {
	for (var i = 0, length = this.dataStore.length; i < length; i++) {
		this.dataStore[i] = '';
	}
};

//插入数据
CArray.prototype.insert = function(element) {
	this.dataStore[this.dataStore.length] = element;
};

//列出数据
CArray.prototype.toString = function() {
	return this.dataStore.join(' ') + '\n';
};

//调换数据
CArray.prototype.swap = function(index1, index2) {
	var temp = this.dataStore[index1];
	this.dataStore[index1] = this.dataStore[index2];
	this.dataStore[index2] = temp;
};

//冒泡排序
CArray.prototype.bubbleSort = function() {
	var numElements = this.dataStore.length, temp;
	for (var outer = numElements; outer >= 2; outer--) {
		for (var inner = 0; inner <= outer - 1; inner++) {
			if (this.dataStore[inner] > this.dataStore[inner + 1]) {
				this.swap(inner, inner + 1);				
			}
		}
	}
};

//选择排序
CArray.prototype.selectionSort = function() {
	var min, temp;
	for (var outer = 0; outer <= this.dataStore.length - 2; outer++) {
		min = outer;
		for (var inner = outer + 1; inner <= this.dataStore.length - 1; inner++) {
			if (this.dataStore[inner] < this.dataStore[min]) {
				min = inner;
			}
		}
		if (min !== outer) {
			this.swap(outer, min);
		}
	}
};

//插入排序
CArray.prototype.insertionSort = function() {
	var temp, inner;
	for (var outer = 1; outer <= this.dataStore.length - 1; outer++) {
		temp = this.dataStore[outer];
		inner = outer;
		while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
			this.dataStore[inner] = this.dataStore[inner - 1];
			--inner;
		}
		this.dataStore[inner] = temp;
	}
};

//希尔排序
CArray.prototype.shellSort = function() {
	var N = this.dataStore.length, h = 1;
	while (h < N / 3) { //动态计算间隔序列
		h = 3 * h + 1;
	}
	while (h >= 1) {
		for (var i = h; i < N; i++) {
			for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
				this.swap(j, j - h);
			}
		}
		h = (h - 1) / 3;
	}
};