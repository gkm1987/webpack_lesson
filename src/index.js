var str = require('./component.js'); /**commonjs */
var add = require('../es6/arrow.js');
var $ = require('jquery')
require('./less/index.less')
console.log(add(2, 4))
console.log(str);
$('#app').html(str)