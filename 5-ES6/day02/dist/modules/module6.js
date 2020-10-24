'use strict';

var _require = require('./module5'),
    firstname = _require.firstname,
    lastname = _require.lastname;

console.log(firstname, lastname);
setTimeout(function () {
    console.log(firstname, lastname);
}, 4000);