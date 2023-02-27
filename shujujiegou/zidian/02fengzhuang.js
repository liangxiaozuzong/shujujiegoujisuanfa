function Dictionay () {
	// 属性
	this.items = {};
	// 方法
	// 1.在字典中添加键值对
	Dictionay.prototype.set = function ( key, value ) {
		this.items[key] = value;
	};
	// 2.判断字典中是否有某个key
	Dictionay.prototype.has = function ( key ) {
		return this.items.hasOwnProperty( key );
	};
	// 3.从字典中移除元素
	Dictionay.prototype.remove = function ( key ) {
		// 1判断字典是否有这个key
		if ( !this.has( key ) ) return false;
		// 2从字典中删除key
		delete this.items[key];
		return true;
	};
	// 4.根据key去获取value
	Dictionay.prototype.get = function ( key ) {
		return this.has( key ) ? this.items[key] : undefined;
	};
	// 5.获取所有的keys
	Dictionay.prototype.keys = function () {
		return Object.keys( this.items );
	};
	// size方法
	Dictionay.prototype.size = function () {
		return this.keys().length;
	};
	// clear方法
	Dictionay.prototype.clear = function () {
		this.items = {};
	};
}