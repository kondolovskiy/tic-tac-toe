import { AIGameService } from './ai-game.service';
import { Board } from '../shared/types';

describe('AIGameService', () => {
    let aiService: AIGameService;

    beforeEach(() => {
        aiService = new AIGameService('X');
    });

    describe('getNextMove', () => {
        it('should return null when it is not AI player turn', () => {
            const board: Board = Array(9).fill(null);
            expect(aiService.getNextMove(board, 'O')).toBeNull();
        });

        it('should take winning move when available', () => {
            const board: Board = [
                'X', 'X', null,
                'O', 'O', null,
                null, null, null
            ];
            expect(aiService.getNextMove(board, 'X')).toBe(2); // Complete row for win
        });

        it('should block opponent winning move', () => {
            const board: Board = [
                'O', 'O', null,
                'X', null, null,
                null, null, null
            ];
            expect(aiService.getNextMove(board, 'X')).toBe(2); // Block O's winning move
        });

        it('should take center if available', () => {
            const board: Board = [
                null, null, null,
                null, null, null,
                null, null, null
            ];
            expect(aiService.getNextMove(board, 'X')).toBe(4); // Center position
        });

        it('should take a corner if center is taken', () => {
            const board: Board = [
                null, null, null,
                null, 'O', null,
                null, null, null
            ];
            const move = aiService.getNextMove(board, 'X');
            expect([0, 2, 6, 8]).toContain(move); // Should be one of the corners
        });

        it('should take a side if no corners are available', () => {
            const board: Board = [
                'O', null, 'X',
                null, 'X', null,
                'O', null, 'X'
            ];
            const move = aiService.getNextMove(board, 'X');
            expect([1, 3, 5, 7]).toContain(move); // Should be one of the sides
        });

        it('should handle a nearly full board', () => {
            const board: Board = [
                'X', 'O', 'X',
                'O', 'X', 'O',
                'O', 'X', null
            ];
            expect(aiService.getNextMove(board, 'X')).toBe(8); // Only remaining move
        });

        it('should return null for a full board', () => {
            const board: Board = [
                'X', 'O', 'X',
                'O', 'X', 'O',
                'O', 'X', 'O'
            ];
            expect(aiService.getNextMove(board, 'X')).toBeNull();
        });
    });
});