function onsubmit() {
    Data.forEach((item, index) => { })

}
function objfun(){
    console.log("hello")
}

let myobj = { name: "rushi patel", phone: "9737731356",
// myobj.phone = "1111111111"
nestedobj:{
    key1 : "value1",
    array : [ 1 , 2 , 3 , 4 , 5 ] 
},fun:objfun

}
// let myobj2=myobj   //by reference
let myobj2={...myobj}//by value
myobj2.name = "ansh patel"
myobj2.nestedobj=[]
console.log(myobj2,myobj)
console.log(myobj.fun())
console.log(">>>>>>",Object.values(myobj),Object.keys(myobj),Object.length(myobj))
// console.log(">>>>>>>", myobj.nestedobj.array[3], myobj.nestedobj.key1)
// console.log(">>>>>>>", myobj.name, myobj["phone"],)