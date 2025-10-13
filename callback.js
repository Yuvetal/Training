function double(num){
    return(num*2);
}
function OddOrEve(num){
    return num%2==0;
}
//map
let arr=[2,3,4,5,6,7,8];
const doubleedArr=arr.map(double);
console.log(doubleedArr);
const oddoreve=arr.map(OddOrEve);
console.log(oddoreve);
//arrow
const tripledArr= arr.map((n)=>n*3);
console.log(tripledArr);
//filter-filters only the true values
let evenum=arr.filter(OddOrEve);
console.log(evenum);
let z=[13,15,10,35,27];
let mul5=z.filter((a)=>a%5===0);
console.log(mul5);
//reduce reduces the array into a single value(alt for loops) 1 is assigned to the product and current value is assigned by the array element.  
let sum=arr.reduce((product,current)=>{
    return product*current
},1)
console.log(sum);
let arr1=[1,2,3,4,5,6,7,8,9]
let tripledarr1=arr1.map((n)=>n*3)
let evearr=tripledarr1.filter((a)=>a%2===0)
let sumofeventriple=evearr.reduce((start,value)=>{
    return start+value
},0)
console.log(sumofeventriple)
//array destructuring
let numar=[1,2,3,4,5]
const [one,two,five,four,three]=numar;
console.log(five,three,two,one,four)
//1 assigned to one and rest is assigned to two cuz '...'
const [ichi,...ni]=numar;
console.log(ni);
let num1=[0,...numar,6,7]
console.log(num1);
const obj1={x:3,y:5}
const obj2={y:6,z:7}
const spread={...obj1,...obj2}
console.log(spread)
//promises
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve("Resolved successfully")
        }
        else{
            reject("Rejected")
        }
    },2000)
})
console.log("before promise execution");
promise.then((result)=>console.log(result))
    .catch(err=>(console.log("Promises executed")))
console.log("After promises executed");
let object3={name:"Yuvetal",age:19,country:"India"}
console.log(object3.name);
fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {return response.json()})
      .then((data)=> data.map((user=>(console.log(user.name)))))
      .catch((err)=>console.log(err))

console.log("async func")
async function fetchApi(){
    try{
        const response=await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data=await response.json();
        data.map((user)=>{
            console.log(user.name)
        })
    }catch (error){
        console.log(error);
    }
}
fetchApi();
