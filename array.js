let myobj = { name: "rushi patel", phone: "9737731356",
    // myobj.phone = "1111111111"
    nestedobj:{
        key1 : "value1",
        array : [ 1 , 2 , 3 , 4 , 5 ] 
    }}
    let arr=["dev patel",1,2,"BVM",myobj]
    
    // let arr2=arr;
// console.log("array",arr)a
// console.log("array",arr)
// console.log("array",arr2)

let arr2={...arr}
arr[2]=3   
let arr4=[1,2,3,4,5,6,7,8,9,10]
let arr3=[...arr,1,2,3]  //for concatination
let founditem=arr.findIndex((item)=>item=="dev patel")
let some=arr4.some((item)=>item%2!=0)
let filter=arr4.filter((item)=>item%2!=0)  //it will give all values of array that are valid for the given condition
// console.log("array",arr)
// console.log("array",arr2)
console.log("array",arr3,founditem,some,filter)


let arrayobj = [
    {name: "Nit patel", age: 18},
    {name: "Rushi patel", age: 19},
    {name: "Dev patel", age: 20}
    ]
    
let arrayobj2 = [
    {name: "rushi patel", age: 18},
    {name: "Rushi patel", age: 19},
    {name: "Dev patel", age: 20}
    ]
    
let arrayobj3 = [
    {name: "dev patel", age: 18},
    {name: "Rushi patel", age: 19},
    {name: "Dev patel", age: 20}
    ]
    
    let arr5=[arrayobj,arrayobj2,arrayobj3]
    // console.log(arr5)

    let arrayofobj2=arrayobj.filter((item,index)=>index>0)
    console.log("arrayofobject",arrayobj,arrayofobj2)



    