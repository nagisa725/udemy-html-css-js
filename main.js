// 基本的な関数の書き方
function hello(name){
    console.log("hello"+name)
};
hello("山田花子");
hello("山田花子 2");
// 引数に名前を渡す事もできる
function hello(name="山田太郎"){
    console.log("hallo"+name)
};
hello();
// 変数に関数を代入した場合
const hello2 =function(name="山田智子"){
    console.log("hallo"+name)
};
hello2();
// 上記を使いアロー関数の記述方法(記述の簡略化)
const hello3 =(name="山田友蔵") => console.log("hallo"+name);
// funcsion省略、二行目から{}使用
hello3();
// 引数に何も渡さない場合()も省略可能
const hello4 = name => console.log("hallo"+name);
hello4("原田泰造");
// 関数の引数が２つ以上になる場合は()が必要
const hello5 = (name,age) => console.log("hallo"+name+age);
hello5("出川哲朗",50);

// for文の際一緒に使うと実用的なのだ
const arry = [1,2,3,4,5,6];

arry.forEach (value => console.log(value));

