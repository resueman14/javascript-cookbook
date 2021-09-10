//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  return s
          .split('')
          .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
          .join('-')
}


//squareDigits(123) -> 149 // '1**2'+'2**2'+'3**2'

function squareDigits(num){
	return Number(num.toString().split('').map(val => {return val**2}).join(''))
}

//reduce
let arr = [10,15,30]
let initialValue = 10
arr.reduce((total, e)=>{return total+e},10) // 65


//random stuff

let six = 6
let res = '#'
while(six -- > 0){
	res += '1234567890abcdef'.charAt(Math.floor((Math.random() * (16-0)+0)))
}
return res

//count elements in array
let count = [...arrayOfElems].filter(x=> x== 25).length 

//sort by parameter
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}


//filter elements from b array in a array 
function arrayDiff(a, b) {
  let c = a.filter((e)=>{if(!b.includes(e)) return e})
  return c
}

//upsideDown number
const upsideDownNumbers = {
  "0": 0,
  "1": 1,
  "8": 8,
  "6": 9,
  "9": 6
};

function isUpsideDown(number) {
  const result = +number.toString().split("").reverse().map(item => upsideDownNumbers[item]).join("");
  
  return result === number;
}

//sort numbers in array
numArray.sort((a, b) => a - b); // For ascending sort
numArray.sort((a, b) => b - a); // For descending sort


//for in
let arr = [1,2,3,4,5,6,7,8]
for(let i in arr){
  console.log(arr[i])
}

//curring
function huyaks(a){
 return (b)=>{
    return a+b
  }
}

const huy = huyaks('huy')

huy('pidor')  //'huypidor'



//Set size
function validateWord(s, c = s.toLowerCase())
{
  return c.length % new Set(c).size == 0
  //                       up here
}

//out of bound -1 index
const arr = [0,1,2,3,4,5,6,7]
let sum = 0
for (let i=0; i<arr.length; i++){
  sum += (arr[i-1]||0)+arr[i]  //DAMN DUDE
}
console.log(sum)


//DUPLICATES EVERYWARE
const removeDuplicateIds = (obj) => {
  let revKeys = Object.keys(obj).sort((a,b)=>b-a)
  let seen = new Set()
  let res = {}

  revKeys.forEach(e=>{
    res[e]=[]
    obj[e].forEach(v=>{
      if(!seen.has(v)){
        res[e].push(v)
        seen.add(v)
      }
    })
  })
  return res
};


console.log(removeDuplicateIds({
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}))