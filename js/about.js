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

const AboutAdopting = () => {
  return (

    <ImageBackground
      source={background}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >

    <NativeBaseProvider>
      <View style={styles.box}>
        <Text >This is the about adopting page if this box shows in main, haram branch successfully merged</Text>
      </View>
        <View style={styles.profile} > 
      
          <Button
            mt="2em"
            padding="1em 3em"
            borderRadius="30px"
            backgroundColor="#545871"
            onPress={() => navigation.navigate("")}
            title="Understanding requirements"
          >
            Understanding requirements
          </Button>

          <Button
            mt="2em"
            padding="1em 5.5em"
            borderRadius="30px"
            backgroundColor="#545871"
            onPress={() => navigation.navigate("")}
            title="What to expect"
          >
            What to expect
          </Button>

          <Button
            mt="2em"
            padding="1em 5.5em"
            borderRadius="30px"
            backgroundColor="#545871"
            onPress={() => navigation.navigate("")}
            title="Emergencies"
          >
            Emergencies
          </Button>
          <Button
            mt="2em"
            padding="1em 5.5em"
            borderRadius="30px"
            backgroundColor="#545871"
            onPress={() => navigation.navigate("")}
            title="Login In!"
            title="How to train"
          >
            How to train
          </Button>

          <Button
            mt="2em"
            padding="1em 5.5em"
            borderRadius="30px"
            backgroundColor="#545871"
            onPress={() => navigation.navigate("")}
            title="Medical help"
          >
            Medical help
          </Button>
          <Button
            mt="2em"
            padding="1em 4.5em"
            borderRadius="30px"
            backgroundColor="#545871"
            onPress={() => navigation.navigate("")}
            title="Community support"
          >
            Community support
          </Button>
        </View>


    </NativeBaseProvider>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  box: {
    paddingTop: 20,
    justifyContent: 'center',
    backgroundColor: '#bbadc6',
    width: 'auto',
    paddingBottom: 20,
  },
  container: {
    textAlign: 'center',
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


export default AboutAdopting;