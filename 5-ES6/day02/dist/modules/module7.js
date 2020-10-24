'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var firstname = 'ren';
var lastname = 'terry';
setTimeout(function () {
    exports.firstname = firstname = 'zhao';
}, 2000);
exports.firstname = firstname;
exports.lastname = lastname;