const urlString = location.href;

const url = new URL(urlString);
const params = new URLSearchParams(url.search);


const product = params.get('product');

console.log(product)

//
const fileContents = "products.jsonを読み込んだやつ"

// product を使って、下記を変数に格納する
/*
"chiikawa": {
    "title": "プロダクトタイトル",
    "content": "テキストテキストテキストテキストテキストテキスト",
    "image": "https://i.pinimg.com/550x/e0/2a/56/e02a56f217ecf3e00ee7f07e0268b389.jpg",
    "size": "W999×D999×H999",
    "price": "$99,999 +tax",
    "color": "red",
    "material": "マテリアル"
}
*/

// こんな感じにして
// const item = fileContents[product]
const item = {
    "title": "プロダクトタイトル",
    "content": "テキストテキストテキストテキストテキストテキスト",
    "image": "https://i.pinimg.com/550x/e0/2a/56/e02a56f217ecf3e00ee7f07e0268b389.jpg",
    "size": "W999×D999×H999",
    "price": "$99,999 +tax",
    "color": "red",
    "material": "マテリアル"
}
console.log(item)