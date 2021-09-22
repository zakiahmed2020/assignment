
//Question 1

// console.log("hello world!");

 /* 
 multiple line comment
 console.log("hello world!");
  */

 // Question 2
 const num=123;
 var num2=123;
 let num3=123;
// console.log(typeof num3); 

 // Question 3
 function fucn(x,y){
     try{
        if(typeof x=="number" && typeof y=="number"){
            let result =x+y;
            return result;
        }
     }
     catch(error){
         console.log("error");  
     }
 }
//  let result =fucn(10,true);
//  console.log(result);


// Question 4
let today = new Date().getDay();
// way one using if else
/*
if(today==0){
    console.log("today is Sundey");
}else if(today==1){
    console.log("today is Monday");
}else if(today==2){
    console.log("today is Tuesday");
}else if(today==3){
    console.log("today is Wendesday");
}else if(today==4){
    console.log("today is Thusrday");
}else if(today==5){
    console.log("today is Friday");
}else if(today==6){
    console.log("today is Saturday");
}
*/

// way two using switch
/* 
switch(today){
    case 0:
        console.log("today is Sundey");
        break;
    case 1:
        console.log("today is Monday");
        break;
    case 2:
        console.log("today is Tuesday");
        break;
    case 3:
        console.log("today is Wednesday");
        break;	
    case 4:
        console.log("today is Thursday");
        break;	
    case 5:
        console.log("today is Friday");
        break;	
        case 6:
            console.log("today is Saturday");
            break;	
}
*/
// Question 5
// for loop
// for(let i = 1; i <=10;i++){
//     console.log("number "+i);
// }

// while loop
/*
let numbers=1;
while(numbers<=10){
    console.log("numbers "+numbers);
    numbers++;
}
*/

// do while loop
/*
let numbers=1;
do{
    console.log("Numbers " +numbers);
    numbers++;


}while(numbers<=10);
*/
// Question 6
/*
const ArrayNames=["zakarie","mohamed","jaamac","geedi"];
for(let x of ArrayNames) {
    console.log(x);
}
*/

// Question 7

const personalInfo={
    
    name:"zakarie ahmed",
    phone:"0618555157",
    age:21,
    gender:"male",
    EmailAddress:"zakiahmed2021@gmail.com"
    
}
// console.log(Object.values(personalInfo));

// for (let info in personalInfo){
//     console.log( info+" "+personalInfo[info]);
// }

//Question 8
const arr=["Mohamed","Abdullahi","Hassan","Raage","muumin"];
// console.log(arr.length);
// console.log(arr.toString());
// arr.pop();
// console.log(arr);
// arr.shift(); 
// arr.unshift("ali");
// arr.push("kamaal"); 
// arr.reverse();
// console.log(arr);

// Question 9
const car={
    drive:function(){
        console.log("drive");
    },
    stop:function(){
        console.log("stop");
    }
}
// car.drive();
// car.stop();

// Question 10
function throwError(){
    try{
         throw Error('Kaboom');
    }catch(error){
        console.log(error);
    }
   
    }
    // throwError();
    
