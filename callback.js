function double(num){
    return(num*2);
}
let arr=[2,4,6,8];
const doubleedArr=arr.map(double);
console.log(doubleedArr);
const tripledArr= arr.map((n)=>n*3);
console.log(tripledArr);