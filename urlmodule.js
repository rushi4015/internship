const url=require('url')
const myurl=new URL('https://hpparamsolution.org:0369');
myurl.pathname='/folder/subfolder';
myurl.search='?name=rushi';
myurl.hash='#secretFile.ppt';
// console.log(myurl);
console.log(myurl.host);
console.log(myurl.hostname);
console.log(myurl.href);
