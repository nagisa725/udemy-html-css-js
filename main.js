const todos = [
    {
        id: 1,
        title: "Go to sukiya",
        conmpleted:true
    },
    {
        id: 2,
        title: "Go to susiro-",
        conmpleted:false
    },
    {
        id: 3,
        title: "Go to torikizoku",
        conmpleted:true
    },
]

for(let i = 0; i < todos.length; i++) {
    // console.log(i,todos[i]);
    let todo = todos[i]
    if(todo.conmpleted === true){
        console.log(i,todo.title);
    }
}

// for-inの場合
for(let v in todos){
    let todo = todos[v];
    // console.log(todos[v])
    if(todo.conmpleted === true){
        console.log(v,todo.title)
    }
}

// for-ofの場合
for(let todo of todos){
    // console.log(todo);
    if(todo.conmpleted===true){
        console.log(todo.title);
    }
}


// タイトルを表示させたい時はconsole.log(i,todos[i],.taitle);とドット記法を使用
// 完了しているもののみ表示させたい場合に使うのがif文


