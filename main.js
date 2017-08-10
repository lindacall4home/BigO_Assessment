function bigO_1(startNum){
  for (let i = startNum; i < startNum + 10; i++){
    console.log(i);
  }
}

function bigO_n(array){
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

function bigO_n2(array){
  var done = false;
   while (!done) {
       done = true;
       for (var i = 1; i < arr.length; i++) {
           if (aray[i-1] > array[i]) {
               done = false;
               [array[i-1], array[i]] = [array[i], array[i-1]]
           }
       }
   }
   return array;
}
