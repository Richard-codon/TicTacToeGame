//import dependencies needed for the game
import React, { useState } from 'react';
import { View, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';

//a function of the game board 
const GameBoard = () => {
  //declaring a variable for the useState hook which will be accepting inputs and would be changing overtime
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  //declaring a variable for the useState hook to hold the players(X and O setting X as default)
  const [currentPlayer, setCurrentPlayer] = useState('X');
   
  //function to handle clicks of every cell
  const handleCellClick = (cellIndex) => {
    if (boardState[cellIndex] === null) {
      const updatedBoardState = [...boardState];
      updatedBoardState[cellIndex] = currentPlayer;
      setBoardState(updatedBoardState);
      checkWinConditions(updatedBoardState);
      switchPlayerTurn();
    }
  };

  const checkWinConditions = (board) => {
    const winConditions = [
      //These are the array numbers(Starting from 0-8)
      // Horizontal win conditions
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical win conditions
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal win conditions
      [0, 4, 8],
      [2, 4, 6],
    ];
    //Iterating through each condition
    for (let condition of winConditions) {
      const [a, b, c] = condition;
      //checking if the values(X/O) in the boxes are equal and not null
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        //if so return alert as win to the player(X/O)
        Alert.alert(`${board[a]} wins!`);
        resetGame();
        return;
      }
    }
    //else, return draw alert
    if (!board.includes(null)) {
      Alert.alert("It's a draw!");
      resetGame();
    }
  };

  const switchPlayerTurn = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
  };

  //function to reset game(set all the boxes to null and hence the array)
  const resetGame = () => {
    setBoardState(Array(9).fill(null));
    setCurrentPlayer('X');
  };

  //returning values functions 
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {boardState.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cell}
            onPress={() => handleCellClick(index)}
          >
            <Text style={styles.cellText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

//styles for each component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  cell: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 2,
  },
  cellText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default GameBoard;
