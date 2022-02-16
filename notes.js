const fs = require('fs')
var colors = require('colors');

getNotes = () => 'your notes ...'

const add = (title, body) => {
    const notes = loadNotes()
    const duplicateTitle = notes.find((note) => title === note.title)
    if (!duplicateTitle) {
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log('note added'.bgGreen)
    } else {
        console.log('title taken!'.bgRed)
    }

}
const list = ()=>{
    const notes = loadNotes()
    console.log('Your Notes'.yellow.bold)
    notes.forEach(note => {
        console.log(note.title)
    });
}

const remove = (title) => {
    const notes = loadNotes();
    const notMatch = notes.filter((note) => title !== note.title)
    if (notMatch.length < notes.length) {
        saveNote(notMatch)
        console.log('the note was remove!'.bgGreen)
    } else if (notMatch.length == notes.length) {
        console.log('there is no note with that title!'.bgRed)
    }
}
const read = (title)=>{
    const notes = loadNotes()
    const match = notes.find((note)=>note.title === title)
    if(match){
        console.log(match.title.yellow.bold);
        console.log(match.body);
    }else{
        console.log('no note found'.red.bold)
    }
}

const loadNotes = () => {
    try {
        const bufferData = fs.readFileSync('notes.json')
        const jsonData = bufferData.toString()
        return JSON.parse(jsonData)
    } catch (e) {
        return []
    }
}

const saveNote = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}
module.exports = {
    getNotes: getNotes,
    add: add,
    remove: remove,
    list:list,
    read:read
};