//import dependencies 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/components/HomePage';
import GameBoard from './src/components/GameBoard';

//stack navigator method to allow naavigation between screens
const Stack = createStackNavigator();

//a function to contain the navigation and the components(home page and game board)
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage}/>
            <Stack.Screen name="GameBoard" component={GameBoard}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
