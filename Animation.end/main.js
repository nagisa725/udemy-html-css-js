document.addEventListener('DOMContentLoaded',() => {
    const el = document.querySelector('.animate-title');
    const str = el.innerHTML.trim();
//    console.log(el.innerHTML.trim());

    let concatStr ='';

    for(let c of str) {
        concatStr += `<span class="char">${c}</span>`;
        // console.log`<span class="char">${c}</span>`;
        // console.log('<span class="char">'+c+'</span>');
    }
    el.innerHTML = concatStr;
    
    console.log(concatStr);
});