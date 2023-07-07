console.log("lets play the game");
let audioturn = new Audio("ting.mp3")
let gameover = false;
let turn = "X";


// logic for change turn
// if the turn is X then return 0 if not return X;
const changeTurn = ()=>{
    return turn ==="X"?"0":"X";
}

// logic to check a win 

const checkWin = ()=>{
    let celltext = document.getElementsByClassName('celltext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((celltext[e[0]].innerText=== celltext[e[1]].innerText)&&(celltext[e[2]].innerText=== celltext[e[1]].innerText)&&(celltext[e[0]].innerText!=="")){
           document.querySelector('.msg').innerText = celltext[e[0]].innerText +" won!";
           gameover = true;
        }

    } )
}

// game logic
// array.from will return a html
// to use for each we should make that as an array
let cells = document.getElementsByClassName("cell");
Array.from(cells).forEach(element=>{
    let celltext = element.querySelector(".celltext");
    element.addEventListener('click',() =>{
        if(celltext.innerText===''){
            celltext.innerText=turn;
            turn = changeTurn(); 
            audioturn.play();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("msg")[0].innerText= " turn for " +turn; 
            }
        }
    })
})
