document.addEventListener("DOMContentLoaded", () => {
const grid=document.querySelector(".tic-grid")
const choice=document.querySelectorAll(".choice")
const start=document.querySelector("#start")
const info=document.querySelector("#info")
const width=3
const squares=[]
let currentplayer="user"
const x=document.querySelector(".x")
const o=document.querySelector(".o")
let gameover=false

function board(grid,squares,width) {
    for (i=0; i< width*width; i++) {
        const square=document.createElement("div")
       square.dataset.id=i 
       grid.appendChild(square)
       squares.push(square)
    }
}
board(grid,squares,width)





function playgame() {
    if (gameover) return
    
    if (currentplayer==="user") {
        info.innerHTML="your go"
        
        squares.forEach(square => square.addEventListener("click", function(e) {
            playergo(square)
            square.classList.add("taken")
        }))
    }
    if (currentplayer==="computer") {
  info.innerHTML="computers go"
  setTimeout(computergo, 1000)
    }
}


start.addEventListener("click", playgame)


let playercount=0
function playergo(square) {
    if (!square.classList.contains("taken")) {
        square.classList.add("x")
        wins(square)
        currentplayer="computer"
      playgame()
    }
      
}
let compcount=0
    
function computergo() {  
    let random=Math.floor(Math.random() * squares.length)

 if (!squares[random].classList.contains("taken")) {
    console.log(random)
squares[random].classList.add("o") 
squares[random].classList.add("taken")
currentplayer="user"
compcount++
wins()
playgame() 
 } else {
     computergo()
 }

}


function wins() {
    console.log("thewin")
   if(squares[0].classList.contains("o") && squares[1].classList.contains("o") && squares[2].classList.contains("o")) {
       console.log("win")
       info.innerHTML="you lose"
       gameover=true
   }
   if(squares[3].classList.contains("o") && squares[4].classList.contains("o") && squares[5].classList.contains("o")) {
    console.log("win")
    info.innerHTML="you lose"
    gameover=true
}
if(squares[6].classList.contains("o") && squares[7].classList.contains("o") && squares[8].classList.contains("o")) {
    console.log("win")
    info.innerHTML="you lose"
    gameover=true
}
if(squares[0].classList.contains("o") && squares[4].classList.contains("o") && squares[8].classList.contains("o")) {
    console.log("win")
    info.innerHTML="you lose"
    gameover=true
}
if(squares[2].classList.contains("o") && squares[4].classList.contains("o") && squares[6].classList.contains("o")) {
    console.log("win")
    info.innerHTML="you lose"
    gameover=true
}
if(squares[0].classList.contains("o") && squares[3].classList.contains("o") && squares[6].classList.contains("o")) {
    console.log("win")
    info.innerHTML="you lose"
    gameover=true
}
if(squares[1].classList.contains("o") && squares[4].classList.contains("o") && squares[7].classList.contains("o")) {
    console.log("win")
    info.innerHTML="you lose"
    gameover=true
}
if(squares[2].classList.contains("o") && squares[5].classList.contains("o") && squares[8].classList.contains("o")) {
    console.log("win")
    info.innerHTML="you lose"
    gameover=true
}

if(playercount + compcount==9) {
    info.innerHTML="tie"
    gameover=true
}


if(squares[0].classList.contains("x") && squares[1].classList.contains("x") && squares[2].classList.contains("x")) {
    console.log("win")
    info.innerHTML="you win"
    gameover=true
}
if(squares[3].classList.contains("x") && squares[4].classList.contains("x") && squares[5].classList.contains("x")) {
 console.log("win")
 info.innerHTML="you win"
 gameover=true
}
if(squares[6].classList.contains("x") && squares[7].classList.contains("x") && squares[8].classList.contains("x")) {
 console.log("win")
 info.innerHTML="you win"
 gameover=true
}
if(squares[0].classList.contains("x") && squares[4].classList.contains("x") && squares[8].classList.contains("x")) {
 console.log("win")
 info.innerHTML="you win"
 gameover=true
}
if(squares[2].classList.contains("x") && squares[4].classList.contains("x") && squares[6].classList.contains("x")) {
 console.log("win")
 info.innerHTML="you win"
 gameover=true
}
if(squares[0].classList.contains("x") && squares[3].classList.contains("x") && squares[6].classList.contains("x")) {
 console.log("win")
 info.innerHTML="you win"
 gameover=true
}
if(squares[1].classList.contains("x") && squares[4].classList.contains("x") && squares[7].classList.contains("x")) {
 console.log("win")
 info.innerHTML="you win"
 gameover=true
}
if(squares[2].classList.contains("x") && squares[5].classList.contains("x") && squares[8].classList.contains("x")) {
 console.log("win")
 info.innerHTML="you win"
 gameover=true
}
   playgame()
}




})