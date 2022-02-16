const validator = require('validator');
const yargs = require('yargs');
var colors = require('colors');
 const notes = require('./notes.js');
const { argv } = require('yargs');

// add
yargs.command({
    command:'add',
    description:'add a new note',
    builder:{
        title:{
            description: 'adding title',
            demandOption:true,
            type:'string'
        },
        body:{
            description: 'adding body',
            demandOption:true,
            type:'string'
        }
    },
    handler(){ 
       notes.add(argv.title,argv.body)
    }
})
// remove
yargs.command({
    command:'remove',
    description:'remove a note',
    builder:{
        title:{
            description:'title note',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        notes.remove(argv.title)
    }
})
// list
yargs.command({
    command:'list',
    description:'list a new note',
    handler(argv){ 
        notes.list()
    }
})

yargs.command({
    command:'read',
    description:'read a note',
    builder:{
        title:{
            description: 'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.read(argv.title)
    }
})
yargs.parse()