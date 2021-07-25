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