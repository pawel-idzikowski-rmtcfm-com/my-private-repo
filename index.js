// @NOTE invalid
const something = require('src/test/something');
const IndexController = require('src/controllers/employees/Index');
const something2 = require('src/test/something2');

// @NOTE valid
const something = require('src/test/something');
const something2 = require('src/test/something2');
const IndexController = require('src/controllers/employees/Index');

/*
* comment without prefix
*/

/* @TODO
* comment with prefix
*/

// @NOTE implicit index import
const test1 = require('src/controllers/index');

// @NOTE import with extension
const test2 = require('src/helpers/doSomething.js');

// @NOTE importing whole lodash lib
const _ = require('lodash');

module.exports = (value) => {
  if (value > 5) console.log('not enough!');
  
  something(value).then((result) => {
    console.log(result);
  });
  
  
  
  console.log('a');
  return 1;
}
