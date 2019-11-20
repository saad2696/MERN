// const square = {
//     area : (a)=> (a*a),
//     perimeter : function(a){
//         return a*4;
//     }
// }
let square = require('./square.js');

const calsquare = (a) => {
    console.log(`the value of a is ${a} and the value of area is ` + square.area(a));
    console.log(`the value of a is ${a} and the value of perimeter is ` + square.perimeter(a));
}
calsquare(5);
console.log(__filename);
console.log(__dirname);