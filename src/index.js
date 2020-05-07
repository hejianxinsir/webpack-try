import _ from 'lodash';
import $ from 'jquery';
import test from './foo.js';

function component() {
	const element = $('<div></div>')

	element.html(_.join(['Hey', 'Janson'], '-//-'));

	return element.get(0);
}

document.body.appendChild(component());

console.log(1)
let s = test()
console.log(s)
