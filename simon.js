let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["green","red","purple","green"];
let h2=document.querySelector("h2");

let highestlevel=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userflash(btn){
    btn.classList.add("userflash");
    
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}


function levelup(){
    userseq=[ ];
    level++;
    h2.innerText=`Level${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);

}
function checkans(idx){
 
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,500);
        }
    }

    else{
        if(level>=highestlevel){
            highestlevel=level;
            h2.innerText=`game over highest score is ${highestlevel} this is the highest score`;
          
        }else{
            h2.innerHTML=`your score is ${level} but highest score is <b> ${highestlevel}</b> `

        };
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white"
        },500);
      
        reset();
        
    }
}
function btnpress(){
    let btn=this;
    // console.log(this);
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
 started=false;
 gameseq=[];
 userseq=[];

 level=0;
}