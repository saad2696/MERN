/* Functions 
const square = {
    area : (a)=> (a*a),
    perimeter : function(a){
        return a*4;
    }
}
const calsquare = (a) => {
    console.log(`the value of a is ${a} and the value of area is ` + square.area(a));
    console.log(`the value of a is ${a} and the value of perimeter is ` + square.perimeter(a));

}

calsquare(5);
*/


//strings 

let x  = 'Saad has a cold day';
let slicing = x.slice(0,4);
let indexing1 = x.indexOf('cold');
let indexingl = x.lastIndexOf('day');
let replacing  =  x.replace('Saad','Ali');
let upperCase = x.toUpperCase(); 
let lowerCase = x.toLocaleLowerCase();
let charPos = x.charAt(18);
let x1 = 'a,b,c,d,e';
let x1toArray = x1.split(',');
let toNumber = Number('10.3333');
toNumber = toNumber+10;
let wholeNumber = parseInt('10.2347');
//console.log(wholeNumber);

//arrays 

var myArray = new Array('Corolla','Honda','Suzuki');
var myA = ['Corolla','Honda','Suzuki'];
//console.log(myArray.length);
//console.log(myA[1]);

let idlSuzuki = myArray[2];

idlSuzuki = myArray.pop();  //shift pops first element of array
//console.log(myArray);
myArray.push('Jaguar');
myArray.unshift('Ferrari');
delete myArray[1];
myArray.splice(0,1); //delete from middle 
//myArray.splice(2,0,'Ford','Fiat');
myCars = myA.concat(myArray);
myCars = myCars.sort();

//console.log(myCars);

//  Normal  function

 function Friend(name){
    return 'Hello My Friend '+name+' !';
}
//console.log(Friend('Saad'));

//Arrow Functions

const friend = (name) => `Hello my friend ${name}`;
//console.log(Friend('Saad'));

var ToDos = [
    { 
    Task: 'Prepare Web',
    Status: true

},
{
    Task: 'Prepare Assemblly',
    Status: false
}
];
 
const thingsNotDone = ToDos.filter((ToDos)=>ToDos.Status == false);
const thingsDone = ToDos.find(e => e.Status == true);
//console.log(thingsNotDone);
//console.log(thingsDone);






