
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


const Preadoption = () => {

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
            source={misconception}
            style={{ height: 250}}
            alt="misconception"
            />
            <View style={{paddingLeft: 10, paddingRight: 10}}>
              {/* <Text style={{ fontSize:20, fontWeight: "bold", }}>Common Misconceptions 
                  {"\n"} </Text> */}

              <View style={styles.paragraph}>
                <Text style={styles.subt}>
                    General
                </Text>

                <Text style={styles.tex1}>
                    {'\u2022'}There are hypoallergenic breeds: since people are triggered by different allergens, there is no guarantee that a particular breed of pet will prevent allergic reactions. For instance, allergies to dogs often come from a reaction to the dog’s saliva rather than from their fur. If you are concerned about pet allergies, please consult with the adoption agency directly to receive personalised recommendations for your condition.

                </Text>
                <Text style={styles.tex1}>
                    {'\u2022'}Cats and dogs are enemies: although commonly portrayed this way in movies, cats and dogs can be great company for each other; particularly if they are raised together. It is important to set appropriate boundaries for the pets and consult a behaviourist expert if you need assistance.
                    {"\n"}{"\n"}

                </Text>
              </View>

              <View style={styles.paragraph}>
                <Text  style={styles.subt}>
                    Cats 
                </Text>

                <Text style={styles.tex1}>
                    {'\u2022'}Milk is good for cats: most cats are actually lactose-intolerant, which causes them to experience cramps, diarrhea and other stomach issues if they drink cows milk. The only beverage your cat needs access to is plenty of fresh water to ensure they stay hydrated.

                </Text>
                <Text style={styles.tex1}>
                    {'\u2022'}Cats can’t get heartworms: even if cats don’t go outside, they can still be at risk of contracting heartworms. Signs to look out for are slight lethargy or a cough, but it is almost always fatal. It is best to prevent the risk of heartworms by keeping your cat up to date with its medications.

                </Text>
                <Text style={styles.tex1}>
                    {'\u2022'}Indoor cats don’t need vaccines: although keeping a cat indoors will reduce its exposure to certain illnesses, there are some vaccines that are necessary for every cat (e.g. prevention of feline rhinotracheitis virus). Even though your cat isn’t leaving the house, you may be bringing viruses into the home via your shoes or clothing. Vaccines have also been proven to aid with many other health and behavioural issues.
                </Text>
                <Text style={styles.tex1}>
                    {'\u2022'}Cats can’t be trained: with a lot of positive reinforcement and patience, cats can be trained similar to dogs. Cats are particularly good at recognising key words and their implications.
                    {"\n"}{"\n"}
                </Text>
              </View>

              <View style={styles.paragraph}>
                <Text  style={styles.subt}>
                    Dogs
                </Text>

                <Text style={styles.tex1}>
                    {'\u2022'}Certain breeds are naturally aggressive: regardless of their breed, any dog has the capacity to become aggressive if they feel stressed, startled or threatened. The reality is that big dogs have the potential to be more dangerous if they become aggressive. This is something that can occur at any stage of the dogs life, so it is worthwhile spending time creating a bond and training with your dog to be able to recognise and prevent potential triggers.
                </Text>
                <Text style={styles.tex1}>
                    {'\u2022'}A wagging tail and “smile” means a dog is happy: the particular way that a dog wags its tail can give clues about its emotional state, which may indicate it is happy, scared or nervous. It is important to be able to recognise how your individual pet responds to various experiences to ensure you can accurately interpret their signals. This is particularly important if your pet is around children, for safety reasons.

                </Text>
                <Text style={styles.tex1}>
                    {'\u2022'}Old dogs can’t learn new tricks: don’t be scared to adopt an older dog out of fear you won’t be able to teach it new habits. Older dogs can actually be easier to train than younger dogs since they are not as easily overwhelmed; however, it is important to give them as much patience as you would to a puppy.


                </Text>
                <Text style={styles.tex1}>
                    {'\u2022'}A little bit of human food is okay: it can be tempting to want to share your favourite snacks with your beloved pet, but this is often harmful and potentially deadly for your dog. Some foods can cause severe intestinal damage (e.g. grapes, avocado, onion, garlic), while others will often lead to excessive weight gain. Make sure you are prepared to provide quality dog-friendly meals to your pet and stick to regular feeding times and quantities.
                    {"\n"}{"\n"}

                </Text>
              </View>

              <View style={styles.paragraph}>
                <Text  style={styles.subt}>
                    Rescue pets
                </Text>

                <Text style={styles.tex1}>
                    {'\u2022'}There must be something wrong with them: most often it is a change within the owners life that has led to them being unable to care for their pet any longer (e.g. moving houses, financial struggles, illness), and therefore required them to put it up for adoption. It is important to carefully consider what changes you are expecting to encounter in the next 10+ years to ensure you are in a position to bring a new pet into your life.

                </Text>
                <Text style={styles.tex1}>
                    {'\u2022'}They must have been abused if they are timid: many pets can behave in a timid manner when interacting with new people or while being introduced to a new environment. You should be prepared to understand and adapt to any fears and phobias your pet may have, but also demonstrate general patience with your pet.

                </Text>
                <Text style={styles.tex1}>
                    {'\u2022'}They have health issues which will require expensive treatment: most are perfectly healthy and checked by a veterinarian before being put up for adoption. Many adoption agencies will have completed vaccinations and taken care of pre-existing health concerns, and this is reflected in the adoption fee.
                    {"\n"}{"\n"}
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



export default Preadoption;