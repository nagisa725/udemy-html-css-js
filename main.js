const arry = [1,2,3,4,5];

/* 前のループの戻り値が次のループのaccumulatorに渡ってくるのがreduceというメソッド*/ 
// 配列の中身を一つずつ足していって合計を求める事ができる
arry.reduce(function(accu,curr){
    console.log(accu,curr);
    return accu + curr ;
})

/*currentValue：現在処理されている要素 に*/ 
/*1ループ目はaccuで配列[1,]から取って持ってきているが、
それをcurrに全て戻すためにはreduceの第二引数に初期値を設定する*/ 

arry.reduce(
    function(accu,curr){
    console.log(accu,curr);
    // return accu + curr ;
},10);

/*文字列を分割して配列化する*/ 

const str = 'opantyuusagi';
const strArry = str.split('');

console.log(strArry);

/*文字列を< >で囲い分割で配列化したいとき*/

const result = strArry.reduce((accu,curr) => {
    return accu + "<" + curr + ">";
 },"")/*第二引数に空文字列*/ 

 console.log(result);



/* より簡略的な記述　テンプレートリテラル*/
/*直感的に文字列の中に変数を入れることができ、わかりやすい
改行を含むことができるので見通しの良い記述にすることができる*/ 

const result2 = strArry.reduce((accu,curr) => {

    return `${accu}<${curr}>`;
 },"")/*第二引数に空文字列*/ 

 console.log(result2);
