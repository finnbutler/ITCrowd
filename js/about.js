import React from 'react';
import { ImageBackground,Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import { NativeBaseProvider, Image, Button, Center} from "native-base"; 

import { useNavigation } from '@react-navigation/native';

import {
  useFonts,
  PaytoneOne_400Regular
} from '@expo-google-fonts/paytone-one'
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

import sick_dog from "../assets/sick_dog.jpg";
import study_dog from "../assets/study_dog.jpg";
import misconception from "../assets/misconception.jpg";



import { borderLeft, marginRight } from 'styled-system';

// About page that lists useful information before and after adoption
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
                Misconceptions you should know before ...
              </Text>
            </View>
            

          </TouchableOpacity>
          
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Basic Knowledge")} > 
            
            <Image
              source={study_dog}
              style={{ height: 150, borderRadius:10, }}
              alt="study_dog"
            />
            <View style={styles.text_in_card}>
              <Text >Basic Knowledge</Text>
              <Text style={{ color: "#777", paddingTop: 5, fontFamily: 'Roboto_400Regular', }}>
                Knowledge you should know before ...
              </Text>
            </View>
          </TouchableOpacity>

          
          <View style={{paddingLeft: 10,}}>
            <Text style={{ fontSize:20,  fontFamily: "PaytoneOne_400Regular",}}>Post-adoption</Text>
          </View>
          
          
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Emergency Help")} > 
            
            <Image
              source={sick_dog}
              style={{ height: 150, borderRadius:10, }}
              alt="sick_dog"
            />
            <View style={styles.text_in_card}>
              <Text>Emergency help</Text>
              <Text style={{ color: "#777", paddingTop: 5 }}>
                Urgent contacts and how to cope with ...
              </Text>
            </View>
          </TouchableOpacity>

        </View>

        
    </NativeBaseProvider>
    </ScrollView>
  );
}

//style sheet for View, texts, touchoubleobject, etc..
const styles = StyleSheet.create({
  cardbox: {

    alignItems: 'center',
    justifyContent: 'flex-start', 
    
  },
  card: {
    margin: 10,
    //padding: 10,
    borderRadius: 15,
    backgroundColor: "#DDDDDD",
    width: 290,
    // flexDirection: "row",
    // justifyContent: Center,   
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
  
 
 
});



export default AboutAdopting;