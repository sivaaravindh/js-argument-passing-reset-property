//1.
Arry1=(...x)=>console.log(x);
Arry1("siva","red","blue");

//2.
let arry=[1,2,3,4];
myArray=(...y)=>{
    let arr=[...arry,...y];
    console.log(arr)
}
myArray(5,6,7,8)


//3
function restfunc(...x){
    console.log(x);
}
restfunc(1,2,3,4,5,6);


//4
let arry2=[16,17,18,19];
myArray2=(...y)=>{
    let arr=[...arry2,20,...y];
    console.log(arr)
}
myArray2(5,6,7,8)

//5
let arry3=[16,17,18,19];
myArray3=(...y)=>{
    let arr=[...arry3,{name:"siva",age:19},...y];
    console.log(arr)
}
myArray3(5,6,7,8)

//6

myArray4=(...y)=>{
    let arr=[...arry,...y];
    console.log(arr)
}
myArray4("hi","hello");

//7
let obj=["hello","siva"];
myArray5=(...y)=>{
    let arr=[...obj,...y];
    console.log(arr)
}
myArray5("hi",'good',50)

//8
myArray6=(...y)=>{
    let arr=[...obj,...y];
    console.log(arr)
}
myArray6({name:"kill",age:20})

//9.
myArray7=(...y)=>{
    let arr=[...obj,...y];
    console.log(arr)
}

myArray7(1,2,3,4)

//10.
Arry2=(...x)=>console.log(x);
Arry2(1,2,3,4,5);