"use strict"

let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false