// // 阻塞式代码
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束!");
// 非阻塞式代码
// var fs = require("fs");
// fs.readFile('input.txt', function(err, data) {
//   if (err) return console.error(err);
//   console.log(data.toString());
// });
// console.log("程序执行结束!");

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected(flag) {
  if (flag) {
    console.log('连接成功。');
  } else {
    console.log('连接失败。');
  }
}
// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
// 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
eventEmitter.once('connection', function () {
  console.log('我执行了一次！！！');
});
// 返回指定事件的监听器数组。
console.log(eventEmitter.listeners('connection').length);
function beRemovedFunction() {
  console.log('看看我还在不在');
}
eventEmitter.on('beRemoved', beRemovedFunction);
// 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
eventEmitter.removeListener('beRemoved', beRemovedFunction);
// 按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
eventEmitter.emit('connection', 0);
// 返回指定事件的监听器数组。
console.log(eventEmitter.listeners('beRemoved'));
// 触发 connection 事件
setTimeout(function() {
  eventEmitter.emit('connection', 0);
}, 1000);
