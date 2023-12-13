const child = document.querySelector('.child');
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('inview');
        }
    });
    // alert('intersecting');
}
const options = {
    root: null,
    /*root ある要素が他の要素またはビューポートと交差したときtrueと判定するか決められる機能 
        ただ親要素,先祖要素のみの指定に限られるためそれ以外はnullが良い*/
    rootMargin: "-300px 0px",
    /*rootMargin  root要素に対して作用させるオプションcssのmaginと同様、交差の有効範囲を変化させられる*/ 
    threshold: [0, 0.5, 1]
    /*threshold 上記に比べtarget側('.child')に指定するプロパティ,target領域の何％以上が重なったら交差している。とみなすかを指定する
    境界,しきい値という意味　値表記は0〜1の範囲。1が100%、0が0%を意味する*/ 
};
const io = new IntersectionObserver(cb, options);
    /*IntersectionObserver(交差オブサーバー) 指定した範囲(root)に、
    監視している対象(observe())の要素が入ってきたら(交差したら)その要素に対して処理を実行できる*/ 
io.observe(child);
//observeにオブジェクトを渡すことでオブジェクトを監視し、変更があった際コールバックしio(cb, options) 変更内容を渡し実行してくれる
