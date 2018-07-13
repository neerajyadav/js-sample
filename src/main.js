//@ts-check
for (let num = 0; num < 50;) {
    console.log((++num % 3 ? "" : "fuzz") + (num % 5 ? "" : "buzz") || num);
}

//Chess-board-problem
const size = 8;
let str = "";
for (let len = 0; len < size; len++) {
    for (let wid = 0; wid < size; wid++) {
        str += (len + wid) % 2 ? " " : "#";
    }
    str += "\n";
}
console.log(str);

function range(start, end, step = 1) {
    let arr = [];
    if (start <= end) {
        for (let i = start; i <= end; i = i + step) {
            arr.push(i);
        }
    }
    else {
        step = step === 1 ? -1 : step;
        for (let i = start; i >= end; i = i + step) {
            arr.push(i);
        }
    }
    return arr;
}

function reverseArray(arr){
    let newArr = []
    for(let a of arr){
        newArr.unshift(a);
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    for(let a of arr){
        arr.push(a);
        arr.shift();
    }
}



function deepEqual(obj1, obj2){
    if(obj1 != undefined && typeof obj1 == "object" && obj2 != undefined && typeof obj2 == "object"){
        let keys1 = Object.keys(obj1);
        for(let prop of keys1){
            if(obj2[prop]!= undefined && obj2[prop] == obj1[prop]){
                continue;
            }
            else{
                return false;
            }
        }
        return true;    
    }
    else{
        return obj1 == obj2;
    }
}

