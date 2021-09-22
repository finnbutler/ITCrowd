import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { NativeBaseProvider, Image, Button} from "native-base";
import {
  useFonts,
  PaytoneOne_400Regular
} from '@expo-google-fonts/paytone-one'
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import background from "../assets/white-dog.jpg"
import { alignItems } from 'styled-system';
//import Video from 'react-native-video';

const Train = () => {
  return (

    

    <NativeBaseProvider>

      <View style={styles.container}> 
        
        <View> 
          <Image 
            style={styles.thumbnail}
            source={require('../assets/white-dog.jpg')}
          /> 

          <View style={styles.textbox}>
            <Text style={styles.heading}>
              House Training
            </Text>
            <Text style={styles.context}>
            Housetraining is one of the first things you will teach your new puppy. This should be started as soon as you take your dog home, but it takes patience. In general, puppies are unable to control their bladders and bowels until 12 weeks of age. If your puppy is younger than that, extra patience is required.
            </Text>

            <Text style={styles.heading}>
              Great Ways to Bond With Your Dog
            </Text>
            <Text style={styles.context}>
              The bond you have with your dog begins the moment he comes into your life and never stops growing. There are ways to reinforce the bond throughout your dog's life. Participation in activities with your dog is the best way to do this. It can be as simple as a walk, a game, or a training session. Here are some ideas for bonding time:
            </Text>
            <Text style={styles.heading}>
              Spend time with your dog.
            </Text>
            <Text style={styles.heading}>
              Exercise together
            </Text>
            <Text style={styles.heading}>
             Try a dog sport or two
            </Text>
            <Text style={styles.heading}>
             Work on dog training.
            </Text>
            <Text style={styles.heading}>
              Play games 
            </Text>
            <Text style={styles.heading}>
             Be present
            </Text>

           
          </View> 
        </View> 

      </View>

     

       


    </NativeBaseProvider>
    
  )
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 500,
    height: 300,
  },
  box: {
    paddingTop: 20,
    justifyContent: 'center',
    backgroundColor: '#bbadc6',
    width: 'auto',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#DADCE8',
    //justifyContent: 'center',
    alignItems: 'center'
    //textAlign: 'center',
  },
  textbox: {
    
    fontFamily: 'Roboto_400Regular',
    width: 500,
    backgroundColor: '#f2fe32'
  },
  heading: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
  },
  context: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  info: {
    fontFamily: 'Roboto_400Regular',
    flexDirection: 'row',
    textAlign: 'left',
    padding: 30,
    width: 700,
    marginTop: 30,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#89CFF0',
  },
  profile: {
    // backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});


export default Train;