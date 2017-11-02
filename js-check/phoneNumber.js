//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"

const phoneNumber = (pNum) => {
	let pattern = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
	let number = pNum.replace(/[^\d]+/g, "");
	if(number.length > 11 || number.length < 10 ){
		return null
	}
	if(number.length === 11){
		if(number[0] != 1){
			return null
		}
		let newNumber = number.substr(1)
		return newNumber
	}
	if(pattern.test(number) == false){
		return null
	}
	return number
}

module.exports = phoneNumber
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it

