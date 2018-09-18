module.exports = function solveEquation(equation) {
  data = equation.split(' ');
  let a = data[0],b=data[4],c=data[8],D;

  if(data[3]=='-'){
    b=-b;
  }if(data[7]=='-'){
    c=-c;
  }
  D=Math.pow(b,2) - (4*a*c);
  let x1 = (-b - Math.sqrt(D))/(2*a);
  let x2 = (-b + Math.sqrt(D))/(2*a);
  return [Math.round(x1),Math.round(x2)].sort(function(a,b){return a-b;});
};