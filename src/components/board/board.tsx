import { View, TouchableOpacity } from 'react-native'
import React, { ReactElement } from 'react';
import Text from '../text/text';
import { BoardState, BoardResult } from '@utils';
import BoardLine from './board-line';
import styles from './board.style';
type cell = 'x' | 'o' | null;

// type BoardProps = {
//     state: BoardState;
//     size: number;
//     disabled?: boolean;
//     // onCellPressed: Function
//     onCellPressed : (index : number) => void
// }

interface BoardProps {
    state: BoardState;
    size: number;
    disabled?: boolean;
    onCellPressed: (index: number) => void,
    gameResult?: BoardResult | false,
}
// [
//     'x',null,'o',
// 'x',null,'o',
// 'x',null,'o'
// ]
const Board = ({ state, size, disabled, onCellPressed, gameResult }: BoardProps): ReactElement => {
    return (
        <View style={[ styles.board, {
            width: size,
            height: size,
            
        }]}>
            {state.map((cell, index) => {
                return (
                    <TouchableOpacity
                        disabled={cell !== null || disabled}
                        onPress={() => onCellPressed && onCellPressed(index)}
                        style={ styles.cell}
                        key={index}
                    >
                        <Text
                            style={{
                                fontSize: size / 7
                            }}>{cell}</Text>
                    </TouchableOpacity>
                )
            })}
            {gameResult && 
            <BoardLine size={size} gameResult={gameResult} />
            }
            {/* {true && 
            <BoardLine size={size} gameResult={{ winner: "o",
        column : 1, direction: "V"}} />
            } */}
            
        </View>
    )
}

export default Board