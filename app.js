let choiceSelected = document.querySelectorAll(".choice");
let userChoice;
let compChoice;
let userWin =true;
let resultMsg = document.querySelector("#msg");
let userWinCount=0;
let compWinCount=0;
let drawWinCount=0;
let userWins =document.querySelector("#user");
let compWins =document.querySelector("#comp");
let drawWins =document.querySelector("#draw");
let resetBtn =document.querySelector("#resetBtn");
//adding event listener to all the rock paper scissor buttons
choiceSelected.forEach((choice) =>choice.addEventListener("click", ()=>{
    // console.log("choice has been clicked");
    userChoice=choice.getAttribute("id");
    playGame(userChoice);
}));

//generating computer choice randomly 
generateCompChoice=()=>{
    let choiceArr =["rock","paper","scissors"];
    randomIndex = Math.floor(Math.random()*3);
    compChoice = choiceArr[randomIndex];
    return compChoice;
};

//main game logic
playGame=(userChoice)=>{
    console.log(userChoice);
    let ComChoice = generateCompChoice();
    console.log(`${ComChoice}`);

    //checking for draw
    if(userChoice === compChoice){
        drawWinCount++;
        console.log("Game is a draw");
        drawWins.innerText=`${drawWinCount}`;
        resultMsg.innerText=("This game was a draw");
    }
    //checking win=lose scenarios
    else if(userChoice==="rock"){
        userWin = ComChoice==="paper" ? userLosesGame(userChoice,ComChoice) : userWinsGame(userChoice,ComChoice);
    }else if(userChoice === "paper"){
        userWin = ComChoice==="rock" ? userWinsGame(userChoice,ComChoice) : userLosesGame(userChoice,ComChoice);
    } else if(userChoice === "scissors"){
        userWin = ComChoice === "rock" ? userLosesGame(userChoice,ComChoice) : userWinsGame(userChoice,ComChoice);
    }
};

//user win function and dynamic changes to screen elements 
userWinsGame = (userChoice,compChoice) => {
    userWinCount++;
    userWins.innerText=`${userWinCount}`;
    resultMsg.innerText=(`User Wins !! ${userChoice} beats ${compChoice}`);
    resultMsg.style.backgroundColor = "green";
    console.log(`User Wins !! ${userChoice} beats ${compChoice}`);
};

//computer win function and dynamic changes to screen elements 
userLosesGame = (userChoice,compChoice) => {
    compWinCount++;
    compWins.innerText=`${compWinCount}`;
    resultMsg.innerText=(`User Lost !! ${compChoice} beats ${userChoice}`);
    resultMsg.style.backgroundColor = "red";
    console.log(`User Lost !! ${compChoice} beats ${userChoice}`);
};

resetBtn.addEventListener("click",() =>{
    userWinCount=0;
    compWinCount=0;
    drawWinCount=0;
    userWins.innerText=`${userWinCount}`;
    compWins.innerText=`${compWinCount}`;
    drawWins.innerText=`${drawWinCount}`;
    resultMsg.innerText=(`Play your move`);
    resultMsg.style.backgroundColor = "#84A59D";
});