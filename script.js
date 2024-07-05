let container = document.querySelector("#container");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");


let player1 = true;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    player1 = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

// new game and reset button functionality

newgame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(player1) {
            box.innerText = "X";
            player1 = false;
        } else {
            box.innerText = "O";
            player1 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})



const checkWinner = () => {
    for(let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != "") {
            if(val1 == val2 && val2 == val3) {
                showWinner(val1);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, player ${winner} won`;
    msgContainer.classList.remove("hide");
    disableboxes();
}


const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
