const fs = require('fs');
// fs.writeFileSync('./text.txt', 'Hey there!');
// fs.writeFile('./text.txt', 'Hey there! Async', (err) => {});
// const result = fs.readFileSync('./text.txt', 'utf8');
// console.log(result);

// fs.readFile('./text.txt', 'utf8', (err, result) => {
//     if(err) {
//         console.log("Error: ", err);
//     }
//     else {
//         console.log("Result: ", result);
//     }
// });
// fs.appendFileSync('./text.txt', '\nHey there! sync');
console.log(fs.statSync('./text.txt').isFile());
console.log(fs.statSync('./text.txt'));