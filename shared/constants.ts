import { WinningCombination } from './types';
  
export const WINNING_POSITIONS: WinningCombination[] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

export const CORNERS = [0, 2, 6, 8];
export const SIDES = [1, 3, 5, 7];