
/*forEach 配列データの値1つずつに対してコールバック関数に記述した処理を実行
配列やオブジェクトの要素に対して順番に処理を行いたい場合に非常に便利
forEachメソッドの中でコールバック関数が行われている、引数(変数名val)であるに配列一つずつが渡っている状態
第一引数に配列が渡っている、第二、第三引数も定義できる*/ 
/* i ...配列の添字(index)*/ 

const arry =[1,2,3,4,5];

arry.forEach(function(val,i,ary){
    console.log(val,i,ary)
})
/*値、添字、配列の順で5回ループする*/ 

// アロー関数
arry.forEach((val,i,ary) => {
    console.log(val,i,ary)
})
// 記述が一つの場合より短略化できバグが生まれにくい
arry.forEach (v => console.log(v));

for(let i = 0; i < arry.length; i++){
    const v = arry[i];
    console.log(v);
}
// for文とforEach
// forEach 記述が少ない