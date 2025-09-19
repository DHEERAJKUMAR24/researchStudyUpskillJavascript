function outer() {
  let secret = "I’m hidden!";
  
  function inner() {
    console.log(secret); // ✅ can access outer variable
  }
  
  return inner;
}


const fn = outer();
fn(); // "I’m hidden!"

