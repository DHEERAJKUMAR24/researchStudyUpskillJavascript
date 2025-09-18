let obj ={};

let value = "construtor"

if(value in obj){
    console.log("yes")
}else{
    console.log("no")
}

var a = 10;

(function test (){
    var a = 20;
    //try the below and figure out why the response is different
    // a=20;
    console.log(a); // 20
})();

console.log(a); // 10