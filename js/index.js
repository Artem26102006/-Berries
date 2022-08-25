let list = [1, 2, 3, 4, 5];

let newList = list.reduce(function(arr, elem) {
  return arr + elem
});

console.log(newList);
