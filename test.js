let d1 = new Date();

str = "";
for(let i = 0; i < 100000; i++) {
  str += "123";
}

let d2 = new Date();
console.log(d2 - d1);