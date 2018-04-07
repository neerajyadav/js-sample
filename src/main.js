//@ts-check
for (let num = 0; num < 50;) {
    console.log((++num % 3 ? "" : "fuzz") + (num % 5 ? "" : "buzz") || num);
}