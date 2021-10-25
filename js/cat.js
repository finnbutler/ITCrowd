
import React, {useState} from 'react';
import { ImageBackground,Text, StyleSheet, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { NativeBaseProvider, Image, Button} from "native-base"; 


import { useNavigation } from "@react-navigation/native";

import {
  useFonts,
  PaytoneOne_400Regular
} from '@expo-google-fonts/paytone-one'
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';
import study_dog from "../assets/study_dog.jpg";
import { bottom } from 'styled-system';




// Const for the Cat component
const Cat = () => {
  const navigation = useNavigation();

    
    const [content1, setContent1] = useState(false);
    const [content2, setContent2] = useState(true);

  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ScrollView>
      <NativeBaseProvider>

        
        <View>
            <Image
            source={study_dog}
            style={{ height: 250}}
            alt="study_dog"
            />

            <View style={{paddingLeft: 10, paddingRight: 10}}>

                                  
              <View style={styles.header}>
                <Text style={{fontSize:20, fontFamily: "PaytoneOne_400Regular", }}>Basic Knowledge
                    </Text>
              </View>

              <TouchableOpacity style={styles.card} onPress={() => setContent1(!content1)} > 
                <Text style={styles.subt}>
                      Expenses
                  </Text>
              </TouchableOpacity>
              {content1 ?
                (
                  <View style={styles.paragraph}>
                        
                    <Text style={styles.tex1}>
                      Although adopting a pet will save you money when compared to buying from a breeder, it is necessary to consider the ongoing costs of owning a pet. Financial struggles is one of the main reasons people have to put their pet up for adoption, so consider if you are prepared for the expenses that come along with being a pet owner. Some of the potential costs you may encounter include:
    
                    </Text>
                    <Text style={styles.tex2}>
                        {'\u2022'} food & toys {"\n"}
                        {'\u2022'} vaccinations and medications  {"\n"}
                        {'\u2022'} vet appointments {"\n"}
                        {'\u2022'} pet insurance (optional) {"\n"}
                        {'\u2022'} council registration {"\n"}
                        {'\u2022'} grooming & training  {"\n"}
                        {'\u2022'} health conditions related to particular breeds {"\n"}
    
                    </Text>
    
                    <Text style={styles.tex1}>
                    In the first year alone, a cat or dog will cost you between $3,000 and $6,000. After your first year together expect to pay at least $1,627 each year for a dog and $962 each year for a cat.
                    (Source: Pet Ownership in Australia report, Animal Medicines Australia) {"\n"}
    
                    For further financial advice, consult the   
                    <Text style={{color: '#6495ed',fontWeight:'500'}}
                          onPress={() => Linking.openURL('https://moneysmart.gov.au/getting-a-pet')}>
                            {' '} Australian Money Smart website {"\n"}{"\n"}
                    </Text>
                  
    
                    </Text>
    
    
                  </View>
                ) : null}

              
              

              <TouchableOpacity style={styles.card} onPress={() => setContent2(!content2)} > 
                <Text style={styles.subt}>
                     Bringing them home
                  </Text>
              </TouchableOpacity>
              {content2 ?
                (
                  <View style={styles.paragraph}>
                        
                        <Text style={styles.tex1}>
                  During the first few days can be a stressful time for both you and your new pet as you learn more about each other and start establishing routines. Here are some videos to get you started on preparing for your new family member:
                </Text>

                <Text style={styles.tex2}>
                  <Text style={{color: '#6495ed',fontWeight:'500'}}
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-_5xd0pSy28')}>
                          {'\u2022'} https://www.youtube.com/watch?v=-_5xd0pSy28 {"\n"}
                  </Text>
                  <Text style={{color: '#6495ed',fontWeight:'500'}}
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-H0zq475mGA')}>
                          {'\u2022'} https://www.youtube.com/watch?v=-H0zq475mGA {"\n"}
                  </Text>
                  <Text style={{color: '#6495ed',fontWeight:'500'}}
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=rMUPeTda69s')}>
                          {'\u2022'} https://www.youtube.com/watch?v=rMUPeTda69s {"\n"}
                  </Text>
                  <Text style={{color: '#6495ed',fontWeight:'500'}}
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jPhGpktH56Q')}>
                          {'\u2022'} https://www.youtube.com/watch?v=jPhGpktH56Q {"\n"}
                  </Text>

                                       

                </Text>
    
                  </View>
                ) : null}


              

              <View style={styles.paragraph}>

              </View>

                

            </View>
            

            
            
        </View>
      
        <View style={styles.buttonbox} > 
            
            


        </View>
      </NativeBaseProvider>
    </ScrollView>



  );
};

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
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: "#545871",
  },
  header: {
    textAlign: "center",
    padding: 10,
    
  },  
  subt: {
    fontSize: 14,
    fontWeight: "bold",
    
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
  box: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    backgroundColor: "#bbadc6",
    width: "auto",
  },
  card: {
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#DDDDDD",
    
  },
  prebox: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,

    
    backgroundColor: '#FBDADB',

    // backgroundColor: '#FBE2E1',
    width: "auto",
  },
  postbox: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    //backgroundColor: '#535971',
    backgroundColor: "#bbadc6",
    width: "auto",
  },
  preadoption: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    backgroundColor: "#E19D98",
    width: "auto",
  },
  postadoption: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    backgroundColor: "#535971",
    width: "auto",
  },
  container: {
    textAlign: "center",
  },

  buttonbox: {
    // backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Cat;
