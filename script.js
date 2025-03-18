// make varriables 
    let boxes           = document.querySelectorAll(".box");
    let resetButton     = document.querySelector("#resetButton");
    let turnO           = true;
    let newGameBtn      = document.querySelector("#new-btn");
    let msgContainer    = document.querySelector(".msg-container");
    let msg             = document.querySelector("#msg");
    let winPatterns     = [
            [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
            [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
        ];
    // set boxes with o and x
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (turnO) {
                box.innerText = "O";
                box.style.backgroundColor = "#84ad74";
                turnO = false;
            } else {
                box.innerText = "X";
                box.style.backgroundColor = "#acc6ad";
                turnO = true;
            }
            box.disabled = true;
            checkWin();
        });
    });
    // check winner and show the winner
    const checkWin = () => {
        for (let pattern of winPatterns) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
            if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner: ", pos1Val);
                showWinner(pos1Val);
            }
        }
    };

    // disables boxes
    const disableBoxes = () => {
        boxes.forEach((box) => {
            box.disabled = true;
        });
    };

    // enables boxes again after a winner is found or a draw occurs
    const enableBoxes = () => {
        boxes.forEach((box) => {
            box.disabled = false;
            box.style.backgroundColor = "";
            box.innerText = "";
        });
    };

    // alert show when any user win the game
    const showWinner = (winner) => {
        msg.innerText = `Congratulation: winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    };

    // game reset button
    const resetGame = () => {
        turnO = true;
        enableBoxes();
        msgContainer.classList.add("hide");
    }
    // reset buttons for new games and reset game
    newGameBtn.addEventListener("click", resetGame);
    resetButton.addEventListener("click", resetGame);