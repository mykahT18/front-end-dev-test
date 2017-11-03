//
// Make Unique
// Finish the rest of 'unique()' function to remove all
// duplicate entries from a given array and satisfy the test
//
// To pass the test, unique should accept an array and
// handle strings:
// ['hello', 'hello', 'world'] -> ['hello', 'world']
// handle numbers:
// [1,1,2,2,2,3,4,4,5] => [1,2,3,4,5]
// handle nested arrays:
// [[1], [1], [2]] => [[1], [2]]
// handle nested objects:
// [{foo: 'bar'}, {foo: 'bar'}] => [{foo: 'bar'}]

const unique = (arr) => {
	
	// let result = compare(arr)
	// console.log('😡',result)
	// return result
}

module.exports = unique
// Note: It's not neccessary to have all code into the 'unique'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave unique as an exported
// method as you found it

// const stringArray = (a) => {
// 	let unique = [...new Set(a)];
//   return unique
// }
// const numArray = (n) => {
// 	let num = [...new Set(n)];
//   return num
// }

// const compare = (el) => {
// 	el.reduce((prev, next) => {
// 		console.log('prev:',prev)
// 		console.log('next:',next)
// 		if (prev === next)
// 			return next
// 	})
// }