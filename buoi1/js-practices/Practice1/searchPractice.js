
function search(input, target) {
  var index = -1;
  for (var i = 0 ; i < input.length ; i++ ){
    if (input[i] == target){
      index = i;
    }
  }
  return index;
}


module.exports = search;
