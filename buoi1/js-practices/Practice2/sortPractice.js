'use strict'

function sort(input) {
  for (var i = 0 ; i < input.length ; i++ ){
    for (var j = i ; j < input.length ; j++ ){
      if (input[i] > input[j]){
        var compare = input[i];
        input[i] = input[j];
        input[j] = compare;
      }
    }
  }
  return input;
}

module.exports = sort
