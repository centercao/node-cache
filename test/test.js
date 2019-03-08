var Cache = require("node-cache");
var cache = Cache.createCache("LRU", 100 * 100 * 10);
cache.set('use', {
	name:"老A",
	_id:"1234",
	right:[1.2],
	shop:[{_id:"234",name:"shop1"},{_id:"345",name:"shop2"}]
},200);
console.log(cache.get('use'));
// 重置过期时间
cache.set('use',null, 400); // Time in ms
setTimeout(function() {
    console.log(cache.get('use'));
}, 300);
setTimeout(function() {
    console.log(cache.get('use'));
}, 500);