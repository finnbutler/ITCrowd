import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import { NativeBaseProvider, Image, } from "native-base"; 
import { useNavigation } from '@react-navigation/native';
import {  useFonts, PaytoneOne_400Regular} from '@expo-google-fonts/paytone-one'
import { Roboto_400Regular,} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

//Freepik, Cute little dog being sick, (n.d.). [Online]. Available: https://www.freepik.com/free-photo/cute-little-dog-being-sick_14724927.htm. [Accessed: 2- Oct- 2021].
import sick_dog from "../assets/sick_dog.jpg";
//Freepik, Cute dog with books in bed, (n.d.). [Online]. Available: https://www.freepik.com/free-photo/cute-dog-with-books-bed_13402708.htm. [Accessed: 2- Oct- 2021].
import study_dog from "../assets/study_dog.jpg";
//Freepik, Close up cute french bulldog lying on shoulder of her female owner, (n.d.). [Online]. Available: https://www.freepik.com/free-photo/close-up-cute-french-bulldog-lying-shoulder-her-female-owner-picture-from-back-female-veterinarian-pressing-sad-puppy-her-while-doing-tests-relation-responsibility_8687960.htm. [Accessed: 2- Oct- 2021].
import misconception from "../assets/misconception.jpg";


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
              <Text style={styles.subt}>Common Misconceptions</Text>
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
              <Text style={styles.subt} >Basic Knowledge</Text>
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
              <Text style={styles.subt}>Emergency help</Text>
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
  subt: {
    fontSize: 14,
    fontWeight: "600",
    width:290,
    
  },
  
 
 
});



export default AboutAdopting;