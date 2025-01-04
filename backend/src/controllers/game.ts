import { Request, Response, Router } from 'express';
import { AIGameService } from '../services/ai-game.service';
import { GameContext } from '../helpers/game.strategy';
const router = Router();

router.post('/game', async (req: Request, res: Response) => {
  try {
    const gameService = new GameContext(new AIGameService(req.body.player));
    const newGame = req.body;
    const nextMove = gameService.getNextMove(newGame.board, newGame.player);
    
    res.status(201).json({
      success: true,
      data: {
        board: newGame.board,
        player: newGame.player,
        nextMove: nextMove
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create game',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
