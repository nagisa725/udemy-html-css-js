
// let name1 = "hamaie ryuuiti";
// console.log("hello" + name1 );
// let name2 = "hamaie ryuuiti2";
// console.log("hello" + name2)
// 上記の記述は記述量やバグなどが起こりやすいためあまり良くない

// その為関数を使う
function hello(name) {
    console.log("hello"+name);
}
// ()内の引数は複数入れるの可能、(name,age) ets...
hello("hamaie ryuuiti3");
hello("hamaie ryuuiti4");

function hello(name,age) {
    console.log("hello"+name+age);
    return name + age ;
    // 戻り値
}
hello("code mafia", 20);
const returnval = hello("code mafia",30)
console.log(returnval);



function characters(name,age) {
    console.log("kawaii"+name+age);
    return name+age;
}
characters("ちいかわ",1);
characters("おぱんちゅうさぎ")

const returnval2 = characters("ちいかわ",1);
console.log(returnval2);

// 同様な意味を持った関数の定義の仕方
const hello2 = function(name,age){
    console.log("hello"+name+age);
    return name+age;
}
hello("code mafia",20);
// 変数に関数を代入している

const character = function(name,age){
    console.log("omosiroi"+name+age);
    return name+age;
}
character("ちいかわ",2);

// 無名関数　アノニマスファンクション
function(name,age){
    console.log("hello"+name+age);
    return name+age;
}
hello("code mafia",20);
