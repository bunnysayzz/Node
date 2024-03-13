const os=require("os");
console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.hostname());
console.log(os.tmpdir());
console.log(os.type());
console.log(os.version());
console.log(os.endianness(), os.hostname());
const path=require('path');
console.log(path.dirname('/home/lucifer/Desktop/Node/basics.js'));
console.log(path.extname('/home/lucifer/Desktop/Node/basics.js'));
console.log(path.parse('/home/lucifer/Desktop/Node/basics.js'.charAt()));


const joinedPath = path.join('a', 'abc', 'basics.js');

console.log(joinedPath);


const events = require('events');
const action = new events.EventEmitter();

action.on('Start', () => {
    console.log('The Start event was emitted');
});

action.emit('Start');

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Register an event lisener for the 'start' event
eventEmitter.on('start', () => {
    console.log('The start event occurred');
});

eventEmitter.emit('start');


