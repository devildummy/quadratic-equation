module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
  var a=+arr[0], b=+arr[4], c=+arr[8];
  if (arr[3]==='-'){
    b=-b;
  }
  if (arr[7]==='-'){
    c=-c;
  }
  D = (b * b) - (4 * a * c);
  var x1= Math.round( (-Math.sqrt(D) - b) / (2 * a));
  var x2= Math.round( (Math.sqrt (D) - b) / (2 * a));
  var answer=[x1,x2];
  answer.sort(compareFn)
  return answer;
}
function compareFn(a, b) {
  return a - b;
}