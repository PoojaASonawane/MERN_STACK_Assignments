// 6. Type conversions
// a. "" + 1 + 0
// b. "" - 1 + 0
// c. true + false
// d. 6 / "3"
// e. "2" * "3"
// f. 4 + 5 + "px"
// g. "$" + 4 + 5
// h. "4" - 2
// i. "4px" - 2
// j. " -9 " + 5
// k. " -9 " - 5
// l. null + 1
// m. undefined + 1
// n. " \t \n" – 2
console.log("" + 1 + 0) //10
let n=("" + 1 + 0)
console.log(typeof(n)) //string

console.log("" - 1 + 0) //-1
let n1=("" - 1 + 0)
console.log(typeof(n1)) //number

console.log(true + false)//1

console.log(6 / "3")//2
let n2=(6/"3")
console.log(typeof(n2))//number
console.log("2" * "3")//6
console.log(4 + 5 + "px")//9px
console.log("$" + 4 + 5)//$45
console.log("4" - 2)//2
console.log("4px" - 2)//NaN
let n3=("4px" - 2)
console.log(typeof(n3))//number
console.log(" -9 " + 5)//-9 5
console.log(typeof(" -9 " + 5))//string
console.log(" -9 " - 5)//-14
console.log(null + 1)//1
console.log(undefined + 1)//NaN
console.log(typeof(undefined + 1))//number
console.log(" \t \n" - 2) //-2

