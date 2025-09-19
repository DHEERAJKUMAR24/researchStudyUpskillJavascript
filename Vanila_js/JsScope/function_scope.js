// var a =1;
function demoVar() {
  var a = 5; // function scoped
  if (true) {
    var a = 10; // same variable (ignores block)
    console.log("Inside if:", a); // 10
  }
  console.log("Outside if:", a); // 10 (same!)
}
demoVar();
// console.log("Global scope a:", a); // ReferenceError: a is not defined