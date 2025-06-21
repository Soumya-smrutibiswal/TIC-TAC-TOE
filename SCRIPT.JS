let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusDisplay = document.getElementById("status");

function makeMove(cell, index) {
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    cell.innerText = currentPlayer;

    if (checkWinner()) {
        statusDisplay.innerText = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        statusDisplay.innerText = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "Y" : "X";
    statusDisplay.innerText = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]           // diagonals
    ];

    return winConditions.some(comb => {
        const [a, b, c] = comb;
        return board[a] && board[a] === board[b] && board[b] === board[c];
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
    statusDisplay.innerText = `Player X's Turn`;
}
