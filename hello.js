// num=prompt("Enter Number to check multiple of 5")
// if (num%5==0){
    
//     console.log(num+" is a Multiple of 5");
// }
// else{
//     console.log(num+" is not a Multiple of 5");
// }25

// let  n = prompt('Please enter a Marks:');
// if (n<=100 && n>=80){
//     console.log("Grade A")
// } else if(n<=79 && n>=70){
//     console.log("Grade B")
// } else if(n<=69 && n>=60){
//     console.log("Grade C")
// }else{
//     console.log("Nahi Pata Muje")
// }

// const student={
//      surname: "Patel",
//     Id:"300249466",
//     Laptop:"Asus",
//     Interest:"Coding"
// };
// console.log(student)
// for (let i=0;i<=1000;i=i+2){
//     console.log(i);
// }

// let rand=Math.random(1,10);
// let x=prompt("Enter a Random Number");
// console.log(`Random number is ${rand}`);

// while(x!==rand){
//     alert("Wrong Number Try Again");    
//     x=prompt("Enter a Random Number");
// }
// alert("Correct Number You Win!");

// let fullName=prompt("Enter a FullName");
// console.log("@"+fullName+fullName.length);
// let set=(1,2,3);
// console.log(typeOf(set));

// const myfun=(a,b)=>{
//     return a*b;
// }
// console.log(myfun(5,10));

// function vovels(str){
//     let count=0;
//     for(i of str){
//         if( i=="a" || i=="e" || i=="i" ||i=="o" || i=="u" ) {
//             count+=1;
//         }
//     }
//     return count;
// }
// console.log("sdf")
// console.log(vovels("Hello World"));

// let arr=[1,2,3,4,5]
// arr.forEach((val)=>{console.log(val*val)});

// let text=document.querySelector("h2");
// input=prompt("Enter somethigs")
// text.innerText=text.innerText + " "  + input; 

// let button=document.createElement("button");
// button.innerText="Click me";
// button.style.backgroundColor="#ff69b4";
// button.style.color="Red";
// document.querySelector("body").prepend(button);


let mybtn= document.querySelector("#mode");
console.log(mybtn)
let mode="black";
mybtn.addEventListener("click",()=>{
    console.log("Button clicked")
    if (mode === "black"){
        mode="white";
        document.querySelector("body").style.backgroundColor="white";}
        
    else{
        mode= "black";
       document.querySelector("body").style.backgroundColor="black" ;}
    console.log("Job done") 
    })

    


