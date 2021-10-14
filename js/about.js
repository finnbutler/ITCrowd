import React from 'react';
import { ImageBackground,Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import { NativeBaseProvider, Image, Button} from "native-base"; 

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
  useFonts,
  PaytoneOne_400Regular
} from '@expo-google-fonts/paytone-one'
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

import logo from "../assets/Logo.jpg";
import background from "../assets/background.jpg";
import sick_dog from "../assets/sick_dog.jpg";
import study_dog from "../assets/study_dog.jpg";
import misconception from "../assets/misconception.jpg";



import { borderLeft } from 'styled-system';


const AboutAdopting = () => {

  const navigation = useNavigation();

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
      
          
         
        </View>

        <View style={styles.cardbox}>
          <View style={{paddingLeft: 10,}}>
            <Text style={{ fontSize:20, fontFamily: "PaytoneOne_400Regular",}}>Pre-adoption</Text>
          </View>
          
          
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Common Misconception")} > 
            
            <Image
              source={misconception}
              style={{ height: 150, borderRadius:10, }}
              alt="misconception"
            />
            <View style={styles.text_in_card}>
              <Text >Common Misconceptions</Text>
              <Text style={{ color: "#777", paddingTop: 5 }}>
                Misconceptions you should know before adopting...
              </Text>
            </View>
            

          </TouchableOpacity>
          
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Pre-adoption")} > 
            
            <Image
              source={study_dog}
              style={{ height: 150, borderRadius:10, }}
              alt="study_dog"
            />
            <View style={styles.text_in_card}>
              <Text >Basic Knowledge</Text>
              <Text style={{ color: "#777", paddingTop: 5, fontFamily: 'Roboto_400Regular', }}>
                Knowledge you should know before adopting...
              </Text>
            </View>
          </TouchableOpacity>

          
          <View style={{paddingLeft: 10,}}>
            <Text style={{ fontSize:20,  fontFamily: "PaytoneOne_400Regular",}}>Post-adoption</Text>
          </View>
          
          
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Post-adoption")} > 
            
            <Image
              source={sick_dog}
              style={{ height: 150, borderRadius:10, }}
              alt="sick_dog"
            />
            <View style={styles.text_in_card}>
              <Text>Emergency help</Text>
              <Text style={{ color: "#777", paddingTop: 5 }}>
                Urgent contacts and how to cope with situation ...
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Post-adoption")} > 
            
            <Image
              source={background}
              style={{ height: 150, borderRadius:10, }}
              alt="background"
            />
            <View style={styles.text_in_card}>
              <Text>How to train</Text>
              <Text style={{ color: "#777", paddingTop: 5 }}>
                Learn tips of training your pet...
              </Text>
            </View>
          </TouchableOpacity>

          


        </View>


        
    </NativeBaseProvider>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  cardbox: {
    
  },
  card: {
    margin: 10,
    //padding: 10,
    borderRadius: 15,
    backgroundColor: "#DDDDDD",
  },
  text_in_card: {
    padding:5,
  },
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
  prebox: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: '#FBDADB',
    // backgroundColor: '#FBE2E1',
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
  
  buttonbox: {
    // backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});



export default AboutAdopting;