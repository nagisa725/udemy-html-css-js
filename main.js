const arry = [1,2,3,4,5,6];
// 配列は0から始まる
arry[5] = 9;
// 配列の中の数字[5]を9に変更したい場合
console.log(arry);
// []の中に欲しい数字を記述すると抽出され表記される
// console.log(arry[4]);
// constで定義したものであるが、同じ変数内での再定義は可能
// 同じ変数名で別の配列を再定義するのは不可能

const arry2 = [1,2,3,"文字列",false];
// 数字だけではなく文字列やBooleanも可能

arry.push("new item");
// .push 配列の末尾に()内の記述が表記される
arry.shift();
// .shift 先頭の要素を削除する
// const val = arry.sift();
// console.log(val);
// ↑変数に格納すると取り出した要素を表記できる
arry.unshift();
// .unshift 配列の先頭に()内の記述が表記される
arry.pop();
// .pop　最後に格納されている配列要素を削除できる
// const val = arry.pop();
// console.log(val);
// ↑変数に格納すると取り出した要素を表記できる







