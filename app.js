
const EventEmitter = require('events');
//var events = new EventEmitter

//const myEmitter = new MyEmitter();

console.log("Hello worl!");

var data = 2

var name = "this is nurul"

console.log("value  "+name);

var func = function(num){
    console.log("value %d ",num);
    return num+4
}

func(5);
console.log("value  %d ",func(3));

/*
function logEvery2Seconds(i) {
    setTimeout(() => {
        console.log('Infinite Loop Test n:', i);
        logEvery2Seconds(++i);
    }, 2000)
}

logEvery2Seconds(0);

let i = 0;
setInterval(() => {
    console.log('Infinite Loop Test interval n:', i++);
}, 2000)

var num = 0;
setInterval(function(){
    console.log("value %d ",num++);
},5000)


var num = 0;

setInterval(function(){
    func(num++);
    },5000);
*/
setTimeout(function () {
    console.log("Run after 2 sec");
},200)

var eventEmitter = new EventEmitter();

//eventEmitter.addListener('connection');

eventEmitter.on('connection',func/*function(val) {
    console.log("REvent Data Received: %d",val);
}*/);

var num = 0;
setInterval(function(){
    eventEmitter.emit('connection',num++)
    //console.log("value %d ",num++);
},1000)





