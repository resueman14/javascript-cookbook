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