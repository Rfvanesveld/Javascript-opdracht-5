let kleuren = ["groen", "blauw", "rood"];
console.log(kleuren.length)

let kleuren = ["groen", "blauw", "rood"];
console.log(kleuren[0]);

let kleuren = ["groen", "blauw", "rood"];
console.log(kleuren.length - 1);
console.log(kleuren[2]);


let kleuren = ["groen", "blauw", "rood"];
let totaal = kleuren.push("geel");
console.log(totaal);
console.log(kleuren);

let kleuren = ["groen", "blauw", "rood"];
let totaal = kleuren.push("geel", 5);
console.log(kleuren);

let kleuren = ["groen", "blauw", "rood", "geel", 5];
let groet = { greeting: 'Hi, ik ben een object' };
let totaal = kleuren.push(groet);
console.log(kleuren);
console.log(kleuren.length - 1)
console.log(kleuren[5])