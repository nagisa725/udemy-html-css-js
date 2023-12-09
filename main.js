//無名関数
// document.querySelector('#btn');
// btn.addEventListener('click',function(){
//     alert('hello');
// });

//一般的
const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function changeBgColor(){
    h1.style.backgroundColor ='green';
    // alert('hello');
};
function changeColor(){
    h1.style.color ='red';
};

btn.addEventListener('click',changeBgColor);
btn.addEventListener('click',changeColor);

//btn.removeEventListener('click',hello);