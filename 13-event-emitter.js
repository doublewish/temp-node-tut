const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', ({name, id}) => {
  console.log(`data recieved ${name} with id: ${id}`)
});

customEmitter.on('response', ({name}) => {
  console.log(`some other logic here ${name}`)
});

customEmitter.emit('response', {name: "john", id: "40"});
