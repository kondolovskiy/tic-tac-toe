import { Board } from '@/shared/types';

const API_HOST = 'http://localhost:3001/';

export async function getNextMove(board: Board, player: 'X' | 'O'): Promise<number | null> {
    const response = await fetch(`${API_HOST}api/game`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ board, player })
    });
    const data = await response.json();
    return data.data?.nextMove;
}