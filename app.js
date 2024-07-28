let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let newgame = document.querySelector('#newgame');
let msg = document.querySelector(".msg");
let winner = document.querySelector("#Winner");

let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    enableboxes();
    turnO = true;
    msg.classList.add("hide");
    winner.innerText = "";
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        }
    });
});

const disableboxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (win) => {
    winner.innerText = `Congratulations, Winner is ${win}`;
    msg.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return;
            }
        }
    }
    if ([...boxes].every(box => box.innerText !== "")) {
        winner.innerText = "It's a draw!";
        msg.classList.remove("hide");
    }
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
