const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',()=>{
    console.log('data sent');
})
customEmitter.on('response',(name,age)=>{
    console.log(`data received with name ${name} and age ${age}`);
})


customEmitter.emit('response','john',34)