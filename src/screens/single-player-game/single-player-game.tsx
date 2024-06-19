import { View, SafeAreaView, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import styles from './single-player-game.styles';
import { GradientBackground, Text, Board, Button } from '@components';
import { BoardState, isEmpty, getAvailableMoves, Moves, cell, isFull, printFormattedBoard, isTerminal, getBestMove, useSound } from '@utils';
import { useSettings, difficulties } from '@contexts/settings-context';


const SCREEN_WIDTH = Dimensions.get("screen").width;

const SinglePlayerGame = () => {
    const { settings, saveSetting } = useSettings();
    const [state, setState ] = useState<BoardState>([
        null, null, null,
        null, null, null,
        null, null, null
    ])
    // type Cell = 'x' | 'o' | null;
    // const b: BoardState = [
    //     'x', 'o', 'x',
    //      'x', 'x', 'x',
    //       'o', 'o', null
    //     ];

    // printFormattedBoard(b);
    // console.log(isTerminal(b));

    const [turn,  setTurn] = useState<"HUMAN" | "BOT">(
        Math.random() < 0.5 ? "HUMAN" : "BOT");

    const [isHumanMaximizing, setIsHumanMaximizing] =
    useState<boolean>(true);

    const [gamesCount, setGamesCount] = useState({
        wins: 0,
        losses: 0,
        draws: 0
    });

    const playSound = useSound();
    
    const gameResult = isTerminal(state);

    useEffect(()=>{
        if(gameResult){
            //handle game finished
            const winner = getWinner(gameResult.winner);
            if(winner === "HUMAN"){
                playSound("win")
                setGamesCount({
                    ...gamesCount,
                    wins : gamesCount.wins + 1
                });
                // alert("You Win!")  
            }
            if(winner === "BOT"){

                playSound("loss")
                setGamesCount({
                    ...gamesCount,
                    losses : gamesCount.losses + 1
                })
                // alert("You Lost!")
            }
            if(winner === "DRAW"){
                
                playSound("draw")
                setGamesCount({
                    ...gamesCount,
                    draws : gamesCount.draws + 1
                })
                // alert("Draw")
            }
            
        }
        else{
            if(turn === "BOT" ){
                if(isEmpty(state) ){
                    const centerAndCorners = [0,3,6,7,4];
                    const firstMove = centerAndCorners[Math.
                    floor( Math.random() * centerAndCorners.length )]
                    insertCell(firstMove, "x");
                    setIsHumanMaximizing(false);
                    setTurn("HUMAN");
                }
                else{
                    // replace -1 to 1 change difficulty
                    const best = getBestMove( state, !isHumanMaximizing, 0,
                        parseInt(settings ? settings?.difficulty : "-1"));
                    insertCell( best, isHumanMaximizing ? "o" : "x");
                    setTurn("HUMAN");
                }
            }
        }
    }, [state, turn])

    

    const getWinner = (winnerSymbol : cell ) : "HUMAN" | "BOT" | "DRAW" =>{
        if(winnerSymbol === "x"){
            return isHumanMaximizing ? "HUMAN" : "BOT";
        }
        if(winnerSymbol === "o"){
            return isHumanMaximizing ? "BOT" : "HUMAN";
        }
        return "DRAW";
    }

    const insertCell = ( cell : number, symbol : "x" | "o"): void =>{
        const stateCopy : BoardState = [...state];
        if(stateCopy[cell] || isTerminal(stateCopy))  return;

        stateCopy[cell] = symbol;
        setState(stateCopy);
        try{
           symbol == "x" ?  playSound("pop1")
           : playSound("pop2");
    
        }
        catch(error){
            console.log(error);
            
        }
        
    }
    
    function handleOnCellPressed(cell: number) : void {
        if(turn !== "HUMAN") return;
        insertCell(cell, isHumanMaximizing ? "x" : "o" );
        setTurn("BOT");        
    }

    const newGame = ()=>{
        setState([null,null,null,null,null,null,null,null,null]);
        setTurn(Math.random() < 0.5 ? "HUMAN" : "BOT");
    }

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.difficulty}>Difficulty : 
                    {settings ? difficulties[settings.difficulty] : "Impossible" }
                    </Text>
                    <View style={styles.results}> 
                        <View style={styles.resultBox}>
                            <Text style={styles.resultTitle}>
                                Wins
                            </Text>

                            <Text style={styles.resultCount}>
                                {gamesCount.wins}
                            </Text>
                        </View>

                        <View style={styles.resultBox}>
                            <Text style={styles.resultTitle}>
                                Draws
                            </Text>

                            <Text style={styles.resultCount}>
                                {gamesCount.draws}
                            </Text>
                        </View>

                        <View style={styles.resultBox}>
                            <Text style={styles.resultTitle}>
                                Losses
                            </Text>

                            <Text style={styles.resultCount}>
                                {gamesCount.losses}
                            </Text>
                        </View>
                    </View>
                </View>
                {/* <Text style={{color  :'#fff'}}>SingleplayerGame</Text> */}
                <Board
                    disabled={Boolean(isTerminal(state)) || 
                     turn !== "HUMAN" }
                    onCellPressed={(cell: number) => {
                        handleOnCellPressed(cell)
                    }}
                    state={state} 
                    size={SCREEN_WIDTH - 60} 
                    gameResult = {gameResult} 
                />
                { gameResult && 
                <View style = {styles.modal}>
                    <Text style = {styles.modalText}>
                        {getWinner(gameResult.winner) ===
                        "HUMAN" && "You Won"}
                        {getWinner(gameResult.winner) ===
                        "BOT" && "You Lost"}
                        {getWinner(gameResult.winner) ===
                        "DRAW" && "It's a Draw"}
                    </Text>
                    <Button onPress={newGame} title={'Play Again'} />
                </View>
                }
            </SafeAreaView>
        </GradientBackground>

    )
}

export default SinglePlayerGame;