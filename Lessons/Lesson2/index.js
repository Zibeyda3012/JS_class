const a=[5,4,3,2,1,0];
const b=[15,4,3,2,10,0];


let arr = a;
let index = a.length
for(let i = 0; i < b.length ; i++)
{
   arr[index] = b[i];
   index++;
} 

let newArr = [];
for(let i = 0; i < arr.length; i++)
{
   for( let j = 0; j< newArr.length; j++)
      if(newArr[j]!==arr[i])
         newArr.push(arr[i]);
      
} 

console.log(newArr)