import { useGame } from './useGame';
import './TicTacToe.scss';
import { Square as TSquare } from '@/shared/types';
import { Square } from '@/components/Square';
import { Button } from '@/components/Button';

const TicTacToe = () => {
  const { board, gameOver, handlePlayerMove, resetGame, calculateWinner } = useGame();

  const winner = calculateWinner(board);
  const status = winner 
    ? winner === 'Draw' ? "It's a draw!" : `Winner: ${winner}` 
    : `Your turn (X)`;

  return (
    <div className="tic-tac-toe">
      <div className="tic-tac-toe__title">Tic Tac Toe</div>
      <div className="tic-tac-toe__status">{status}</div>
      <div className="tic-tac-toe__board">
        {board.map((square: TSquare, i: number) => (
          <Square
            key={i}
            onClick={() => handlePlayerMove(i)}
            disabled={square !== null || gameOver}
          >
            {square}
          </Square>
        ))}
      </div>
      <Button onClick={resetGame}>
        Reset Game
      </Button>
    </div>
  );
};

export default TicTacToe;