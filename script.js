let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let touserScore=document.querySelector("#user-score");
let tocompScore=document.querySelector("#comp-score");
let computerChoice=()=>{
    let choices=["Rock","Paper","Scissor"];
    let comIndx= Math.floor(Math.random()*3);
    return choices[comIndx];
}
let draw=()=>{
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor="rgb(50, 45, 77)";
}
let toShow=(compChoice,userChoice,userwin)=>{
    if(userwin){
        userScore++
        touserScore.innerText=userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++
        tocompScore.innerText=compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
let playGame=(userChoice)=>{
    let compChoice= computerChoice();
    console.log(compChoice);
    if(userChoice==compChoice){
        draw();
    }
    else{
        let userwin=true;
        if(userChoice==="Rock"){
            userwin= compChoice=="Paper"?false:true;
        }
        else if(userChoice==="Paper"){
            userwin= compChoice=="Scissor"?false:true;
        }
        else{
            userwin=compChoice=="Rock"?false:true;
        }
        toShow(userChoice,compChoice,userwin);
    }
    
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        let userChoice=choice.getAttribute("id");
        console.log("users",userChoice);
        playGame(userChoice);
    })
});