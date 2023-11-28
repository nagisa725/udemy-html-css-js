// for(...in)
const arry = [1,2,3,4,5,6];

for(let i in arry){
    console.log(i);
}
// forとinを使って配列をループさせた場合iには0,1,2,3,4,5と表示される
// for(let i = 0; i < arry.length; a++);　よりも記述が短く簡単なループ

const arry2 = [1,2,3,4,5,6];
for(let a in arry2){
console.log(arry[a]);
}
// arryに格納されているiを一つずつ表示させる


const myData = {
    name:"hamadanagisa",
    age:23,
    birthplace:"神奈川県"
}

for(let Data in myData){
    console.log(Data);
}


// for(~of...)
const arry3 = [1,2,3,4,5,6];

for(let v of arry){
    console.log(v);
}

const myData2 = ["hamada","nagisa",23,"神奈川県"]

for(let data2 of myData2){
    console.log(data2)
};

// for(...in)と for(~of...)の違い

// for(...in)
// 出力されるのはキーのみ、name,age,birthplaceなど
// 値である"hamadanagisa"や23は出ない
// 対してfor(~of...)は配列などの値を順に出力させる


