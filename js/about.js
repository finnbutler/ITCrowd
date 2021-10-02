import React from 'react';
import { ImageBackground,Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import { NativeBaseProvider, Image, Button} from "native-base";
import {
  useFonts,
  PaytoneOne_400Regular
} from '@expo-google-fonts/paytone-one'
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';
import profile from "../assets/pic.jpg";
import email from "../assets/email (1).png";
import phone from "../assets/phone-call.png";
import date from "../assets/date-of-birth.png";
import location from "../assets/pin.png";
import logo from "../assets/Logo.jpg";

const AboutAdopting = () => {
  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ScrollView>
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
    </ScrollView>
  );
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

// const styles = StyleSheet.create({
//   logo: {
//     justifyContent: 'center',
//     backgroundColor: '#ffffff',
//     width: 'auto',
    
//   },
//   heading: {
//     textAlign: 'center',
//     fontFamily: 'PaytoneOne_400Regular',
//     color: 'white',
//     paddingTop: 15,
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   paragraph: {
//     textAlign: 'left',
//     fontSize: 14,
//     color: '#545871',
//   },
//   profile: {
//     backgroundColor: '#e8e9ed',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   info: {
//     justifyContent: 'flex-start',
//     fontFamily: 'Roboto_400Regular',
//     flexDirection: 'row',
//     padding: 30,
//     width: 290,
//     borderBottomWidth: 2,
//     borderBottomColor: '#e8e9ed',
//     backgroundColor: '#ffffff',
//   },
//   });

export default AboutAdopting;