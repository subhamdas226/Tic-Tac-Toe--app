export type cell = 'x' | 'o' | null;
export type BoardState = [cell, cell, cell, cell, cell, cell, cell, cell, cell];
export type Moves = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ;

export type BoardResult = {
    winner : cell;
    direction? : "V" | "H" | "D";
    column?: 1 | 2 | 3;
    row?: 1 | 2 | 3;
    diagonal? : "MAIN" | "COUNTER";
}
