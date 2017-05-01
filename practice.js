var five = 5;
console.log(five);

var arr = ["Five", 5, true];
console.log(arr[1]);

arr.push("4");
console.log(arr);

var dict = {key1: "test", key2: "retest"};
console.log(dict.key2);

var description = "";
var person = {first: "Richard", last: "Dang", age: 19};
for (var x in person){
  description += person[x] + " ";
}

console.log(description);


function testFunction(word){
    console.log(word.toLowerCase());
}


setInterval(function(){
  testFunction("hello");
}, 1000);
