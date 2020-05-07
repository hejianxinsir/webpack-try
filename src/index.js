import _ from 'lodash';
import $ from 'jquery';
import test from './foo.js';
import print from './print.js';

function component() {
	const element = $('<div></div>')

	element.html(_.join(['Hey', 'Janson'], '-//-'));

	return element.get(0);
}

document.body.appendChild(component());

console.log(print())
console.log('1010')
console.log('hello webpack')
let s = test()
console.log(s)
