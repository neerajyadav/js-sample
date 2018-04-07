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