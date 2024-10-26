let userscore = 0;
let computerscore = 0;
const  choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userscorpara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score")
const DrawGame = () =>{
    message.innerText = "Game was draw. Play Again";
    message.style.backgroundColor = "black"
}
const showwinner= (userwin,userchoice,computerChoice) =>{
    if(userwin){
        userscore++;
        userscorpara.innerText = userscore;
        message.innerText = `you win! ${userchoice} beats ${computerChoice}`
        message.style.backgroundColor = "green"
    }else{
        computerscore++;
        compscorepara.innerText = computerscore;
        message.innerText = `you loose! ${computerChoice} beats ${userchoice}`
        message.style.backgroundColor = "green";
        message.style.backgroundColor = "red"
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        // console.log("user choice was clicked",userchoice)
        playgame(userchoice)
    })
});
const playgame =(userchoice) =>{
    console.log("user choice is = ",userchoice);
    // gnereate computer choice
    let computerChoice = gencomputerrChoice();
    console.log("Computer choice is = ",computerChoice);

    if(userchoice === computerChoice){
        // Draw condition
        DrawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            computerChoice = "paper"? false:true;

        }else if(userchoice === "paper"){
            userwin = computerChoice === "scissor" ? false : true; 
        }
        else{
            userwin = computerChoice === "rock"?false:true;
        }
        showwinner(userwin,userchoice,computerChoice);
            
        }
    }


const gencomputerrChoice = () =>{
    const options = ["rock","paper","scissors"]
    const randomIdx = Math.floor(Math.random()*3); 
    return options[randomIdx]
}