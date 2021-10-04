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

     
        <View style={styles.buttonbox} > 

          <View style={styles.preadoption}>
            <Text>Information about pre-adoption</Text>
          </View>
      
          <Button
            mt="2em"
            padding="1em 3em"
            borderRadius="30px"
            backgroundColor="#E19D98"
            onPress={() => navigation.navigate("")}
            title="Understanding requirements"
          >
            Understanding requirements
          </Button>

          <Button
            mt="2em"
            padding="1em 5.5em"
            borderRadius="30px"
            backgroundColor="#E19D98"
            onPress={() => navigation.navigate("")}
            title="What to expect"
          >
            What to expect
          </Button>

          <Button
            mt="2em"
            padding="1em 5.5em"
            borderRadius="30px"
            backgroundColor="#E19D98"
            onPress={() => navigation.navigate("")}
            title=""
          >
            Quiz
          </Button>


          <View style={styles.postbox}>
            <Text>Information about post-adoption</Text>
          </View>
          <Button
            mt="2em"
            padding="1em 5.5em"
            borderRadius="30px"
            backgroundColor="#545871"
            onPress={() => navigation.navigate("")}
            title="Emergencies"
          >
            Emergency help
          </Button>

          <View style={styles.postbox}>
            <Text style={styles.heading}>
              When to seek emergency help {'\n'}
            </Text>

            <Text style={styles.paragraph}> 
              If you have any emergencies or major concerns with your new pet, you should consider taking it to an emergency pet centre. It is important to distinguish between the need for an emergency appointment and a regular vet booking to avoid overcrowding the emergency centres. If your pet is displaying any of the following symptoms, please phone your nearest emergency centre:
              {'\n'}
              {'\n'}
              {'\u2B24'} Significant injury - hit by a car, falling from a considerable height, etc.
              {'\n'}
              {'\u2B24'} Vomiting, coughing, diarrhea


            </Text>

            <Text style={styles.heading}>
              Nearby facilities
            </Text>
            <Text style={styles.paragraph}> 
              If you need emergency assistance, please use the following numbers to call for help or drive to your nearest animal hospital:
              {'\n'}
              {'\u2B24'}3379 6408, Sherwood veterinary Practice 
              {'\n'}
              {'\u2B24'}(07) 3062 7686, Animal Emergency Service
              {'\n'}
              
            </Text>


          </View>
            


          <Button
            mt="2em"
            padding="1em 5.5em"
            borderRadius="30px"
            backgroundColor="#545871"
            onPress={() => navigation.navigate("")}
            title="How to train"
          >
            How to train
          </Button>

          <View style={styles.postbox}>
            <Text style={styles.heading}>
              How to bond {'\n'}
            </Text>

            <Text style={styles.paragraph}> 
              text for bonding 
              {'\n'}
              {'\n'}
              {'\u2B24'} Significant injury - hit by a car, falling from a considerable height, etc.
              {'\n'}
              {'\u2B24'} Vomiting, coughing, diarrhea


            </Text>

            <Text style={styles.heading}>
              Advanced training 
            </Text>
            <Text style={styles.paragraph}> 
              If you need advanced training assistance, please use the following numbers to call for help or drive to your nearest training centre:
              {'\n'}
              {'\u2B24'}  +61 738 991 899, DOGUE Bulimba
              {'\n'}
              {'\u2B24'} +61 434 067 536, Bonnies Dog Obedience & Puppy School
              {'\n'}
              
            </Text>


          </View>



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
  heading: {
    textAlign: "center",
    fontFamily: "PaytoneOne_400Regular",
    color: "white",
    paddingTop: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  paragraph: {
    textAlign: "left",
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: "#545871",
  },
  box: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: '#bbadc6',
    width: 'auto',
    
  },
  postbox: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    //backgroundColor: '#535971',
    backgroundColor: '#bbadc6',
    width: 'auto',
    
  },
  preadoption: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: '#E19D98',
    width: 'auto',
    
  },
  postadoption: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: '#535971',
    width: 'auto',
    
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
  buttonbox: {
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