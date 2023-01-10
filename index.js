function sumArray(mang) {
  let sum = 0;
  for (let i = 0; i < mang.length; i++) {
    sum += mang[i];
  }

  return sum;
}
let mang = [1, 5, 9, 10];
console.log(sumArray(mang)
);


function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }
  var a = 1;
  var splitStr = num.toString().split("");
  for (var i = 0; i < splitStr.length; i++) {
    a *= parseFloat(splitStr[i])
  }
  return 1 + persistence(parseFloat(a));
}
console.log(persistence(38769));
console.log(persistence(39));
console.log(persistence(777));
console.log(persistence(6))



