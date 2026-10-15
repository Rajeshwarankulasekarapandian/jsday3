
//TAsk1
const name = "Rajesh";
let age = 32
var city = "madurai" ;
console.log('name');
console.log('age');
console.log('city');

//TAsk2
console.log( typeof name);
console.log( typeof age);
console.log(age == 32);

//Task 3
let fruits = ["apple","orange","mango","grapes","papaya"]
console.log(fruits);
console.log(fruits[2]);

//task4
let profile = {
   name : ["Rajesh"],
   age : [30],
   cgpa : [7.5]

}
console.log(profile);
console.log(profile.name,profile.age,profile.cgpa);

// //Task 5
 let a = prompt("Enter your name");
 alert("Welcome "+a + "  !!");
 let b = prompt("enter your age");
 alert(" your age is "+b+ " Mr / Mrs "+ a);


//task6
let c = 5;
let d=3;
console.log(c+d);
console.log(c-d);
console.log(c*d);
console.log(c/d);
console.log(c%d);
console.log(c**d);

//Task7
 let e = 5;
 console.log("5",e++);
 console.log("5",e);
 console.log("7",++e);

// Task 8. Predict the output:
 let f = 10;
 let g = f--;
 let h = --f;
 console.log("8",f);
 console.log("10",g);
 console.log("8",h);


 //Task 9
 let i =8;
 let j =5;
 console.log(i+=j);
 console.log(i-=j);
 console.log(i*=j);
 console.log(i/=j);
 console.log(i%=j);

 
//task 10 Predict the results of these comparisons:
 console.log("true",5 == "5");
 console.log("false",5 === "5");
 console.log("false",10 != "10");
 console.log("true",10 !== "10");

 //task 11 Use &&, ||, and ! to check different combinations of conditions.

 let k=5;
 let l=4;
 console.log(k==l && k>=l);
 console.log(k==l || k>=l);

// Task 12
let ag1 =prompt("Eneter your age")
alert(ag1 >=18? "you are major":"you are minor");



// Task 13 3: Type Casting 
 console.log(typeof ("hello" + 10),"sting");
 console.log(typeof (10 + true),"number");
 console.log(typeof (10 + null),"number");
 console.log(typeof ("hello" + undefined),"string");

// //task14
 let num= prompt("Enter a number")
 let m =(Number(num)+ 10) ;
 console.log(m);

//task15
console.log(Boolean(""),"false");
console.log(Boolean("hi"),"true");
console.log(Boolean("0"),"true");
console.log(Boolean("true"),"true");

// //task 16
 let o = prompt("enter a number") ;
 if(o>=0){ alert("Positive");
 } else {alert("Negative")}


//task 17
let time = prompt(" task17.\n What is the time now (24 hr format )");
if( time>= 01 || time<=5.59)

{    console.log("Good early morning");   } 
else if( time>= 6 || time<=11.59)
{    console.log("Good morning");   } 
else if(time >= 12.00 || time <= 16.00) 
{    console.log("Good Afternoon");}
else if(time >= 16.01 || time <= 19)
{   console.log("Good Evevning"); }
else if(time >= 19.01 || time <= 24)
{   console.log("Good Night"); }

//Task 18

 let ag2=prompt("Task 18.\nEnetre your age");
 let height=prompt("Enetre your height in cms");
 let weight=prompt("Enetre your weight");

 if (ag2>=18){
 if(height >= 160){
 if(weight>=70 && weight<= 100){
     alert("You are selected")
 } else{alert("you dont have the correct weight")}
 }else{alert("you dont have the correct height")}
 }else{alert("you are uder age")}

//Task19
let light = "red"
switch (light) {
    case "red": console.log("Stop the vehicle"); break;
    case "Yellow": console.log("Start the vehicle"); break;
    case "green": console.log("move the vehicle"); break;
    default:console.log("No proper signal");break;
}

//Task20

for (let n = 0; n<=20; n++) {
    const element = [n];
    console.log(n);  
}

//Task21
for (let p = 2; p<=20 ; p+=2) {
    const element = [p];
    console.log(p);  
}

//Task22

let q=8;
while (q>=1 ) {
 console.log(q);
 q= --q;
}

//Task23

let r = 1;
do {
    console.log(r);
    r++;
} while (r <= 10);


//task 24
let jav= "Javascript"
for (let s of jav ){
    console.log(s)}


//task25
let student = ["Ramesh","vignesh","yogesh","Rajesh"]
for (let t of student ){
console.log(t);
    
}

//Task26
let student1 = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};
for( let u in student1){
    console.log(u + " - " +student1[u]);
}


//TAsk27
let v = prompt("Enter the first no :");
let w = prompt("enter the second no");
aa=Number(v)+Number(w)
ab=Number(v)-Number(w)
ac=Number(v)*Number(w)
ad=Number(v)%Number(w)
alert("the addition of two numers is : " + aa +
    ".\n the difference of two numers is : " + ab +
    ".\n the product of two numers is : " + ac +
    ".\n the reminder of two numers is : " + ad
);

//Task 28

let numb = [4, 12, 8, 25, 15];
console.log("Numbers greater than 10:");
for (let nu of numb) {
    if (nu > 10) {
        console.log(nu);
    }
}

//Task29
let age2= prompt("enter your age")
if (age2 >= 18)
    {    alert("you are major")}
else { alert("you are minor")};


//Task30

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operation = prompt("Choose an operation: addition, subtraction, multiplication, division");

let result;


switch (operation.toLowerCase().trim()) {
    case "addition":
        result = num1 + num2;
        alert("The result of addition is: " + result);
        break;
        
    case "subtraction":
        result = num1 - num2;
        alert("The result of subtraction is: " + result);
        break;
        
    case "multiplication":
        result = num1 * num2;
        alert("The result of multiplication is: " + result);
        break;
        
    case "division":
        // Handle division by zero edge-case
        if (num2 !== 0) {
            result = num1 / num2;
            alert("The result of division is: " + result);
        } else {
            alert("Error: Division by zero is not allowed.");
        }
        break;
        
    default:
        alert("Invalid operation selected! Please choose addition, subtraction, multiplication, or division.");
}
