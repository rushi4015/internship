const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync("read.txt")
console.log(first.toString())

writeFileSync("write.txt","This is content write bu the write method in the second file",{flag:'a'})