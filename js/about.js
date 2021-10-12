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
      
          <Button
            mt="2em"
            padding="1em 3em"
            borderRadius="30px"
            backgroundColor="#E19D98"
            onPress={() => navigation.navigate("Pre-adoption")}
            title="preadoption"
          >
            Pre-adoption 
          </Button>

          <Button
            mt="2em"
            padding="1em 3em"
            borderRadius="30px"
            backgroundColor="#545871"
            onPress={() => navigation.navigate("Post-adoption")}
            title="postadoption"
          >
            Post-adoption
          </Button>
          
          

          {/* <Button
            mt="2em"
            padding="1em 3em"
            borderRadius="30px"
            backgroundColor="#E19D98"
            onPress={() => navigation.navigate("Cat")}
            title="cat"
          >
            Cat
          </Button>

          <Button
            mt="2em"
            padding="1em 3em"
            borderRadius="30px"
            backgroundColor="#545871"
            onPress={() => navigation.navigate("Dog")}
            title="dog"
          >
            Dog
          </Button> */}
         
        </View>

        <View>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Post-adoption")} > 
            testing
            <Image
              source={logo}
              style={{ width: 65, height: 58 }}
              alt="logo_image"
            />
          </TouchableOpacity>
        </View>


        
    </NativeBaseProvider>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#DDDDDD",
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