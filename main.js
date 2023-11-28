
if(false){
    console.log("this is true");
// if文 条件に応じて制御を変えたい場合に利用できる
} else if(true){
    console.log("this is in else if block");
// else if 複数の条件に当てはまらない場合に応じた処理を指定できる
} else {
    console.log("this is false");
// else 条件に当てはまらない場合の処理
}

// if(false){
//     console.log("パンはありますか");
// } else if (false){
//     console,log("ケーキはありますか");
// } else {
//     console.log("暴れる")
// }

const num = 10 ;
const boo1 = Boolean(num);
console.log(boo1);

if(!num) {
    console.log("this is true");
} else{
    console.log("this is false");
}
