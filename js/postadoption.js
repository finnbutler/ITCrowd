import React from 'react';
import { ImageBackground,Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import { NativeBaseProvider, Image, Button} from "native-base"; 

import { useNavigation } from '@react-navigation/native';

import {
  useFonts,
  PaytoneOne_400Regular
} from '@expo-google-fonts/paytone-one'
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

import background from "../assets/background.jpg";
import misconception from "../assets/misconception.jpg";
import sick_dog from "../assets/sick_dog.jpg";
import study_dog from "../assets/study_dog.jpg";
import { style } from 'styled-system';


const Postadoption = () => {

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
        
        <View>
            <Image
            source={sick_dog}
            style={{ height: 250}}
            alt="sick_dog"
            />
            <View style={{paddingLeft: 10,}}>
              {/* <Text style={{ fontSize:20, fontWeight: "bold", }}>Medical Emergency assistance
                  {"\n"} </Text> */}

              <View style={styles.paragraph}>
                <Text style={styles.subt}>
                  Common Concerns

                </Text>

                <Text style={styles.tex1}>
                    As a new pet owner, it can be difficult to determine what changes in your pet’s behaviour are normal and which are signs you should take them to a vet immediately. Dogs and cats each have their own ways of telling their human family when they are unwell, so it is important to keep an eye out for the following symptoms.
                    {"\n"}
                </Text>
                <Text style={styles.tex2}>
                    {'\u2022'} <Text style={{fontWeight:"bold", }}>Change in eating and drinking habits: </Text>
                    
                </Text>
                <Text style={styles.tex3}>
                  <Text style={{color:"#008000"}}>normal:</Text> missing 1-2 meals, particularly in warmer weather.{"\n"}
                  <Text style={{color:"#FF4500"}}>concerning:</Text> 48 hours without eating or drinking an excessive amount of water. {"\n"}
                </Text>

                <Text style={styles.tex2}>
                    {'\u2022'} <Text style={{fontWeight:"bold", }}>Change in coat: </Text>
 
                </Text>
                <Text style={styles.tex3}>
                  <Text style={{color:"#008000"}}>normal:</Text> some changes are to be expected as your pet moves through phases of life from a puppy or kitten to an adult and eventually a senior. Don’t be concerned if your aging pet has greying hairs or experiences some thinning.
{"\n"}
                  <Text style={{color:"#FF4500"}}>concerning:</Text> typically, a pet’s coat should look thick and shiny. If their coat starts to become rough or thinning, this could be a symptom of an allergy.
 {"\n"}
                </Text>

                <Text style={styles.tex2}>
                    {'\u2022'} <Text style={{fontWeight:"bold", }}>Vomiting:      </Text>              

                </Text>
                <Text style={styles.tex3}>
                  <Text style={{color:"#008000"}}>normal:</Text> it is not concerning if an animal vomits, as this could be a once-off response to drinking too much water or eating something that upset their stomach.
{"\n"}
                  <Text style={{color:"#FF4500"}}>concerning:</Text> if your pet has been vomiting frequently throughout the day, or their vomit includes blood, this could be the sign of a more serious illness.
 {"\n"}
                </Text>

                <Text style={styles.tex2}>
                    {'\u2022'} <Text style={{fontWeight:"bold", }}>Emergency symptoms:                     </Text>
                </Text>
                <Text style={styles.tex3}>
                if your pet has a serious injury (e.g. by being hit by a car), is unconscious, has had a seizure, has potentially eaten something toxic or is visibly in pain, you should take them to an emergency vet clinic immediately.
{"\n"}
                </Text>

                <Text style={styles.tex1}>
                If you have noticed any of these changes, please take your pet to the nearest vet facility to be evaluated by a professional. If you are still unsure or concerned about your pet’s symptoms, it is recommended to give the vet clinic a call to discuss the situation.
                 {"\n"}{"\n"}
                </Text>

              </View> 

              <View style={styles.paragraph}>
                <Text style={styles.subt}>
                  Nearby Emergency facilities

                </Text>

                <Text style={styles.tex1}>
                  If you need emergency assistance, please use the following map to locate your nearest emergency veterinary clinic. {"\n"}
                </Text>
                <Text style={styles.tex2}>
                    {'\u2022'} <Text style={{fontWeight:"bold", }}>include google map here </Text>
                    
                </Text>
                

              </View>
              


              <View style={styles.paragraph}>

              </View>

                

                
                    
                
                
                

                

            </View>
            

            

            
            
        </View>
      
        <View style={styles.buttonbox} > 
            
            

         
          
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
  subt: {
    fontSize: 16,
    fontFamily: "PaytoneOne_400Regular",
  },
  tex1: {
    color: "#777", 
    paddingTop: 5, 
    paddingLeft: 5,
    
  },  
  tex2: {
    color: "#777", 
    paddingTop: 5, 
    paddingLeft: 15,
    
  }, 
  tex3: {
    color: "#777",  
    paddingLeft: 15,
    
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
  container: {
    textAlign: 'center',
  },
  
  buttonbox: {
    // backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});



export default Postadoption;