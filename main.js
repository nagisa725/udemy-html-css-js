const person ={
    name:"hamaie ryuuiti"
};
// {}(オブジェクトリテラル)で初期化→定義が一般的なオブジェクトの使い方

const person2 = {
    name: ["hamaie","ryuuiti"],
    // 配列
    age:  40,
    gender: "mele",
    interests:{
        sports:"baseball",
        music:"piano"
    }
};
console.log(person2);

console.log(person2.name);
// person2.name,gender...などドット記法でログ取得も可能
// console.log(person2.name[1]);で"hamaie"だけ配列取得も可能
// また変数の中での定義変更は可能なので、person2.age = 41; と記述すれば上書き出来る





