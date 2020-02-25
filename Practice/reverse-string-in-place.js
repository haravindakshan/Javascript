// reverse string in place
// © Harshan Aravindakshan

function reverseString1(string) {

	var count = string.length;
	var temp = string;
	var last_string = ''

	for (var i = 1; i <= count; ++i) {

		last_string += temp.slice(temp.length-1);
		temp = last_string + string.slice(0,string.length-i)
		// console.log(last_letter);
	}

	return temp;
}

// console.log(reverseString1('test string using for loop. O(n) where n is the number of characters in the string'));

function reverseString2(string) {

	var string_arr = string.split('');
	// console.log(string.split())
	var reversed_string_arr = string_arr.reverse();
	// console.log(string_arr);
	return reversed_string_arr.join('');

}

console.log(reverseString2("test string using built-in string functions. O(1) time complexity"));





