let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const genChoice = () =>{
    const options=["rock","paper","scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

const playGame = (userChoice) => {
    console.log("User choice", userChoice);
    //Computer's choice
    const computerChoice =genChoice();  
    console.log("computer choice",computerChoice);

    let userWin=true;
    if (userChoice===computerChoice){
        document.getElementById("msg").innerHTML="It's Tie Match!";
        console.log( "It is a tie!");
    } 
    else{
    userWin=((userChoice==="rock" && computerChoice==="scissors") ||  
             (userChoice==="scissors" && computerChoice==="paper")||
             (userChoice==="paper" && computerChoice==="rock")); 
    
    console.log(userWin?"You win!":"You lose!");
    if (userWin) {
        userScore++;
        document.getElementById("msg").innerHTML="You Win!";
        document.getElementById("user-score").innerHTML=userScore;

         
    }else{
        compScore++;
        document.getElementById("msg").innerHTML="You Lose!";
        document.getElementById("comp-score").innerHTML=compScore;
}
};
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        

    });
})