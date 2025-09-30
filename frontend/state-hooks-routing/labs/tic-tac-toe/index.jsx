const { useState } = React;

const boardSkeleton = [];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    boardSkeleton.push({ i: i, j: j, value: "" });
  }
}

export function Board() {
  const [buttons, setButtons] = useState(boardSkeleton);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [currentRound, setCurrentRound] = useState(1);
  const [winner, setWinner] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);

  function handleClick(i, j) {
    const newButtonState = { ...buttons[i * 3 + j], value: currentPlayer };
    const newButtons = buttons.map((button) =>
      button.i === i && button.j === j ? newButtonState : button
    );
    setButtons(newButtons);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setCurrentRound(currentRound + 1);
    const winningPlayer = checkWinner(newButtons);
    setWinner(checkWinner(newButtons));
    if (winningPlayer) {
      setGameEnded(true);
    } else if (currentRound > 9) {
      setGameEnded(true);
    }
  }

  function checkWinner(buttons) {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
      if (
        buttons[i * 3 + 0].value &&
        buttons[i * 3 + 0].value === buttons[i * 3 + 1].value &&
        buttons[i * 3 + 1].value === buttons[i * 3 + 2].value
      ) {
        return buttons[i * 3 + 0].value;
      }
      if (
        buttons[0 * 3 + i].value &&
        buttons[0 * 3 + i].value === buttons[1 * 3 + i].value &&
        buttons[1 * 3 + i].value === buttons[2 * 3 + i].value
      ) {
        return buttons[0 * 3 + i].value;
      }
    }
    // Check diagonals
    if (
      buttons[0 * 3 + 0].value &&
      buttons[0 * 3 + 0].value === buttons[1 * 3 + 1].value &&
      buttons[1 * 3 + 1].value === buttons[2 * 3 + 2].value
    ) {
      return buttons[0 * 3 + 0].value;
    }
    if (
      buttons[0 * 3 + 2].value &&
      buttons[0 * 3 + 2].value === buttons[1 * 3 + 1].value &&
      buttons[1 * 3 + 1].value === buttons[2 * 3 + 0].value
    ) {
      return buttons[0 * 3 + 2].value;
    }
    return null;
  }

  function resetGame() {
    setButtons(boardSkeleton);
    setCurrentPlayer("X");
    setCurrentRound(1);
    setWinner(null);
    setGameEnded(false);
  }

  return (
    <div className="container">
      <h1>Tic-Tac-Toe Game</h1>
      <h2>{winner ? `Winner: ${winner}`: currentRound <= 9 ? `Next Player: ${currentPlayer}` : "Draw!"}</h2>
      <div className="board">
        {buttons.map((button) => (
          <button
            key={`${button.i}-${button.j}`}
            className="square"
            onClick={() => handleClick(button.i, button.j)}
            disabled={button.value !== "" || gameEnded}
          >
            {button.value}
          </button>
        ))}
      </div>
      <button className="reset-button" id="reset" onClick={resetGame}>Reset Game</button>
    </div>
  );
}
