let gameseq=[];
let userseq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
   console.log("game started");
   started="true";
  
   levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
  }
  
  function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
  }

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    
    let randIdx= Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    // console.log(userseq);
    gameflash(randbtn);
}
function checkAns(idx){

if(userseq[idx] === gameseq[idx]){
   if(userseq.length == gameseq.length){
    setTimeout(levelUp,800);
   
   }
}
else{
    h2.innerHTML = `Game Over! your score was <b>${level}</b> <br>Press any key to start`;
    let body = document.querySelector("body");
    body.style.backgroundColor="red";
    setTimeout(function(){
        body.style.backgroundColor="white";
    },150);
    reset();
}
}

function btnpress(){
let btn = this;
userflash(this);


userColor = btn.getAttribute("id");
userseq.push(userColor);

checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq = [];
    userseq = [];
    level = 0;
}

