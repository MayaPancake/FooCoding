//1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString); //hello,this,is,a,difficult,to,read,sentence
console.log(myString.length); //42 

let myString = "hello,this,is,a,difficult,to,read,sentence";
let regex = /[,\s]/g;
let result = myString.replace(regex, " ");
console.log(result); //hello this is a difficult to read sentence 

//2
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals); //Array(4) ["blowfish", "capricorn", "giraffe", "turtle"]

favoriteAnimals.splice(1, 0, "meerkat");
console.log("The new value of of the array will be: ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'] ");
console.log(favoriteAnimals); //Array(5) ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]
console.log("The array has a length of: "+ favoriteAnimals.length); //The array has a length of: 5 

let favoriteAnimals = ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"];
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals); //Array(4) ["blowfish", "meerkat", "capricorn", "turtle"]

let whereIs = favoriteAnimals.indexOf("meerkat");
console.log('The item you are looking for is at index: ' + whereIs); //The item you are looking for is at index: 1 

//More Javascript:1
function add() {
    let sum = Array.from(arguments).reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
}
add(5, 3, 8); //16 

//2
function colorCar() {
    console.log("a red car");
}
colorCar(); //a red car
//4
let myObj = { foo: 'bar', 
              baz: 42 };
    console.log(Object.values(myObj)); //Array(2) ["bar", 42]
    console.log(Object.getOwnPropertyNames(myObj));//Array(2) ["foo", "baz"] 
//5
function vehicleType(color, code){
    if(code == 1){
        console.log("A"+ " "+color+ " "+ "car");
    }
    else{
        console.log("A"+ " "+ color + " "+ "motorbike");
    }
}
vehicleType("blue", 2); //A blue motorbike
//6
console.log(3 === 3? "yes" : "no"); 
//7
function vehicle(color, code, age) {
    if(code == 1) {
        console.log("a"+ " "+color+ " "+ "used" + " "+ "car");
    }
    else{
        console.log("a"+ " "+ color + " "+ "motorbike");
    }
}
vehicle("blue", 1, 5); 
//8
let vehicle = ["motorbike", "caravan", "bike"];
//9
console.log(vehicle[2]);
//10
function vehicle(color, code, age) {
    if(code == 1 && age <= 1) {
        console.log("a"+ " "+color+ " "+ "used"+ " "+ "motorbike");
    }
    else if(code ==1 && age<= 1){
        console.log("a"+ " "+ color + " "+ "caravan");
    } else {
        console.log("a"+ " "+ color+ " "+ "new"+ " "+ "bike");
    }
}
vehicle("green", 3, 1); //a green new bike  
//10
let str = "Amazing Joe's Garage, we service car, motorbikes, caravans and bikes.";
for (let i = 0; i < str.length; i++) {
    console.log(str);
  } 
  
  let vehicle = ["car","motorbike", "caravan", "bike"];
  for (let i = 0; i < str.length; i++) { 
//11


//12
let emptyObj = {};  
//13 //14
let teachers = {
    fahdi: { module: "Javascript"},
    tommy: { module: "html"},
    bara: {module: "css"}
}
console.log(teachers.tommy.module);

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y || z == y); //true

console.log(x == y); //false
console.log(x === y); //false
console.log(z == y); //true
console.log(z == x); //false 
// 16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
//17
let bar = 42;
typeof typeof bar; //undefined
// if console.log(typeof bar); the return will be 'number
//typeof is not an object