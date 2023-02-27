function Queue () {
	// 属性
	this.items = [];
	// 方法
	// 01.向队列尾部添加一个(或多个)新的项。
	Queue.prototype.enqueue = function ( element ) {
		this.items.push( element );
	};
	// 02.移除队列的第一(即排在队列最前面的)项，并返回被移除的元素。
	Queue.prototype.dequeue = function () {
		return this.items.shift();
	};
	// 03.返回·队列的第一个元素————最先被添加，也将是最先被移除的元素。队列不做任何变动(不移除元素，只返回元素的信息————与Start类的peek方法类似)。
	Queue.prototype.front = function () {
		return this.items[0];
	};
	// 04.如果队列中不包含任何元素，返回true，否则返回false。
	Queue.prototype.isEmpty = function () {
		return this.items.length == 0;
	};
	// 05.返回队列包含的元素个数，与数组的length属性类似
	Queue.prototype.size = function () {
		return this.items.length;
	};
	// 06.将队列中的内容，转成字符串的形式。
	Queue.prototype.toString = function () {
		let resultString = '';
		for ( let i = 0; i < this.items.length; i++ ) {
			resultString += this.items[i] + ' ';
		}
		return resultString;
	};
}