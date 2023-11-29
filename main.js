// 関数を定義している
function hello(name){
  console.log("hello"+name);
}

const hello =  (name) => {
  console.log("hello" + name);
}

// 関数を呼び出している
hello("かむかむレモン");

// コールバック関数
function hello2 (name){
    console.log(name)
    console.log("hello" + name());
}

function getName(){
    return "かむかむぶどう";
}

hello2(getName);

const string = 'kakakka'
string()

const name = function getName(){
    return "かむかむぶどう";
}

function declaration(box){
    console.log("こんにちは"+box());
}
function greet(){
    return "Hello";
}

declaration(greet);