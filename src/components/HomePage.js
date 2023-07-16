//import dependencies 
import React from 'react';
import {View, Button, StyleSheet, ImageBackground} from 'react-native';
// function to contain the Home page
const HomePage = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
    
    return(
        <ImageBackground
        source={require('../../assets/Tic.jpg')}
        style={styles.background}
        >
        
        <View style = {styles.container}>
            <Button 
            title = "Start Game"
            onPress = {() => navigation.navigate('GameBoard')}
            color="black"
            titleStyle={styles.buttonTitle}
            />
        </View>
        </ImageBackground>
    );
};
//styling
const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
  });
  
 
  
  export default HomePage;