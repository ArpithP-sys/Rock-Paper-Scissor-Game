let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score");
const compcorepara= document.querySelector("#computer-score");

const generatecompchoice = () =>//logic for compter choice
{
    const options=["rock","paper","scissor"];
    const randopt =Math.floor(Math.random() *3);
    return options[randopt];
}

const drawgame =() =>
{

    msg.innerText="Game was draw.Play again!";
    msg.style.backgroundColor="#12171b";
}
const showWinner=(userwin,userchoice,compchoice) => {
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
       
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="Green";
        const winSound = new Audio("success-1-6297.mp3");
        winSound.play();
    }
    else{
        compscore++;
        compcorepara.innerText=compscore;
        
        msg.innerText=`You Lost! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="Red";
        const winSound = new Audio("080047_lose_funny_retro_video-game-80925.mp3");
        winSound.play();
        
    }
}
const playgame = (userchoice) =>
{
    console.log("user choice=",userchoice);
    //generate computer choice
    const compchoice=generatecompchoice();
    console.log("comp choice=",compchoice);

    if(userchoice===compchoice)
    {
        //draw game
        drawgame();
    }else{
        let userwin=true;

        if(userchoice==="rock")
        {
            //scissors,paper
            userwin= compchoice==="paper"?false:true;
        } else if(userchoice==="paper")
        {
            //rock,scissor
            userwin=compchoice==="scissor"?false:true;
        }else 
        {
            //rock,paper
            userwin = compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice) =>//for each individual div 
{
   
    choice.addEventListener("click", () =>
    {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        const winSound = new Audio("mouse-click-sound-233951.mp3");
        winSound.play();

        playgame(userchoice);
    });
});