const fs = require('fs');

const writeAndappend = function () {
    fs.writeFileSync('notepad.txt', 'I am a trainer at TWD. ');
    fs.appendFileSync('notepad.txt', 'And i live in Bhopal.');
}

module.exports = writeAndappend;