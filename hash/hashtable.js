/**
  * HashTable(线性探测法)
  */

function HashTable() {
	this.table = new Array(137);
	this.values = [];
}

//散列函数
HashTable.prototype.simpleHash = function(data) {
	var total = 0;
	for (var i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}

	return total % this.table.length;
};

HashTable.prototype.betterHash = function(string) {
	var H = 37,
		total = 0;
	for (var i = 0; i < string.length; i++) {
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if (total < 0) {
		total += this.table.length - 1;
	}
	return parseInt(total);
};

//添加数据
HashTable.prototype.put = function(key, data) {
	var pos = this.betterHash(key);
	if (this.table[pos] === undefined) {
		this.table[pos] = key;
		this.values[pos] = data;
	} else {
		while (this.table[pos] !== undefined) {
			pos++;
		}
		this.table[pos] = key;
		this.values[pos] = data;
	}
};

//获取值
HashTable.prototype.get = function(key) {
	var pos = this.betterHash(key);
	for (var i = pos; this.table[i] !== undefined; i++) {
		if (this.table[i] === key) {
			return this.values[i];
		}
	}

	return undefined;
};

//打印数据
HashTable.prototype.showDistro = function() {
	var n = 0;
	for (var i = 0; i < this.table.length; i++) {
		if (this.table[i] !== undefined) {
			print(i + ': ' + this.values[i]);
		}
	}
};

var hTable = new HashTable();
hTable.put('a', 'David');
hTable.put('b', 'Jack');
hTable.put('c', 'Mike');
hTable.showDistro();