
const arry = [1,2,3,4,5];

function forEach(ary){
    for(let i = 0; i < ary.length; i++){
        console.log(ary[i]);
    }
}

forEach(arry);






const a = 100

const func_a = (okaikei) => {
    return okaikei * 1.1
}

const result = func_a(10000)
// result = 11000
console.log(result)


const goukei = func_a
console.log(goukei)

const goukei2 = func_a(a)

const test = goukei(300)
console.log(test)





const func_b  = (okaikei2) => {
    return okaikei2 * 2
}


const resultC = func_b(func_a(100))
console.log(resultC)



const func_xxx = (callback, okaikei) => {
    return callback(okaikei) - 10
}

// const resultXxx = func_xxx(func_b, 150)
// console.log(resultXxx)

const sample = (num) => {
    return num - 50
}

const resultZzz = func_xxx(sample, 250)
console.log(resultZzz)

const hello = (time) => {
    if(time === "morning"){
        return "good morning"
    }
    if(time === "afternoon"){
        return "good afternoon"
    }
}

const greet = (callback, time,name) => {
    const greeting = callback(time)
    return greeting + name
}

console.log(greet(hello, "afternoon","モップ頭"))
// 

console.log()





const timeSale = function(origin, saleValue) {
                /*        1000     300   */
    return origin - saleValue
}

const thirtySale = function(callback, b, c) {
    /*                      timeSale.1000,200*/ 
    const d = 300
    /*   700　*/ 
    const e = callback(b, d)
    /*        timeSale(1000,300)      */ 
    return e - c
}

const fiftySale = function(callback, b, c) {
    const d = 500
    const e = callback(b, d)
    return e - c
}

const aho = function(callback, b, c) {
    const d = 500
    const e = callback(b, d)
    return e - c
}

const payment = fiftySaleAndTwoHandred(aho, 1000, 200)
                           






const j = function(num){
    return num * 100
}

func_xxx(j, 200)


const k = function(num){
    return num + 150 + 200 
}

func_xxx(k, 200)
func_xxx(function(num){
   return num + 150 + 200 
}, 200)
/*

function(200){
   return num + 150 + 200 
}

*/



func


/*

j(okaikei)
j(200)

j(200) 

func_xxx(j, 200)
func_xxx = (callback, okaikei) {
    return callback(okaikei) - 10
    callback って何?
    callback(okaikei) の正体は、この場合では、j(200)
}




*/

