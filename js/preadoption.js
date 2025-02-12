import React, {useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import { NativeBaseProvider, Image, Button} from "native-base"; 
import { useNavigation } from '@react-navigation/native';
import { useFonts, PaytoneOne_400Regular} from '@expo-google-fonts/paytone-one'
import { Roboto_400Regular,} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

//Freepik, Close up cute french bulldog lying on shoulder of her female owner, (n.d.). [Online]. Available: https://www.freepik.com/free-photo/close-up-cute-french-bulldog-lying-shoulder-her-female-owner-picture-from-back-female-veterinarian-pressing-sad-puppy-her-while-doing-tests-relation-responsibility_8687960.htm. [Accessed: 2- Oct- 2021].
import misconception from "../assets/misconception.jpg";


const Preadoption = () => {

    const navigation = useNavigation();

    // contents boolean variable with useState function to be triggered by button click 
    //  "Example to Hide Show View  Component in React Native on button Click", Expo, 2021. [Online]. Available: https://snack.expo.dev/@kkevranian/example-to-hide-show-view-component-in-react-native-on-button-click. [Accessed: 21- Oct- 2021].
    const [content1, setContent1] = useState(false);
    const [content2, setContent2] = useState(false);
    const [content3, setContent3] = useState(false);
    const [content4, setContent4] = useState(false);

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
            {/* Top image for the Common Misconception page  */}
            <Image
            source={misconception}
            style={{ height: 250}}
            alt="misconception"
            />
            
            {/* container for main contents */}
            <View style={styles.cardbox}>
              <View style={styles.header}>
                <Text style={{ fontSize:20, fontFamily: "PaytoneOne_400Regular",}}>Common Misconceptions 
                    </Text>
              </View>
              
              {/* drop-down button to make the corresponding contents visible */}
              <TouchableOpacity style={styles.card} onPress={() => setContent1(!content1)} > 
                <Text style={styles.subt}>
                    General
                  </Text>
              </TouchableOpacity>
              {content1 ?
                (
                  <View style={styles.paragraph}>
                        
                    <Text style={styles.tex1}>
                        {'\u2022 '}There are hypoallergenic breeds: since people are triggered by different allergens, there is no guarantee that a particular breed of pet will prevent allergic reactions. For instance, allergies to dogs often come from a reaction to the dog’s saliva rather than from their fur. If you are concerned about pet allergies, please consult with the adoption agency directly to receive personalised recommendations for your condition.

                    </Text>
                    <Text style={styles.tex1}>
                        {'\u2022 '}Cats and dogs are enemies: although commonly portrayed this way in movies, cats and dogs can be great company for each other; particularly if they are raised together. It is important to set appropriate boundaries for the pets and consult a behaviourist expert if you need assistance.
                        {"\n"}{"\n"}

                  </Text>
    
    
                  </View>
                ) : null}

              {/* drop-down button to make the corresponding contents visible */}
              <TouchableOpacity style={styles.card} onPress={() => setContent2(!content2)} > 
                <Text style={styles.subt}>
                    Cats
                  </Text>
              </TouchableOpacity>
              {content2 ?
                (
                  <View style={styles.paragraph}>
                        
                      <Text style={styles.tex1}>
                          {'\u2022 '}Milk is good for cats: most cats are actually lactose-intolerant, which causes them to experience cramps, diarrhea and other stomach issues if they drink cows milk. The only beverage your cat needs access to is plenty of fresh water to ensure they stay hydrated.

                      </Text>
                      <Text style={styles.tex1}>
                          {'\u2022 '}Cats can’t get heartworms: even if cats don’t go outside, they can still be at risk of contracting heartworms. Signs to look out for are slight lethargy or a cough, but it is almost always fatal. It is best to prevent the risk of heartworms by keeping your cat up to date with its medications.

                      </Text>
                      <Text style={styles.tex1}>
                          {'\u2022 '}Indoor cats don’t need vaccines: although keeping a cat indoors will reduce its exposure to certain illnesses, there are some vaccines that are necessary for every cat (e.g. prevention of feline rhinotracheitis virus). Even though your cat isn’t leaving the house, you may be bringing viruses into the home via your shoes or clothing. Vaccines have also been proven to aid with many other health and behavioural issues.
                      </Text>
                      <Text style={styles.tex1}>
                          {'\u2022 '}Cats can’t be trained: with a lot of positive reinforcement and patience, cats can be trained similar to dogs. Cats are particularly good at recognising key words and their implications.
                          {"\n"}{"\n"}
                      </Text>
    
    
                  </View>
                ) : null}

              {/* drop-down button to make the corresponding contents visible */}
              <TouchableOpacity style={styles.card} onPress={() => setContent3(!content3)} > 
                <Text style={styles.subt}>
                    Dogs
                  </Text>
              </TouchableOpacity>
              {content3 ?
                (
                  <View style={styles.paragraph}>
                        
                    <Text style={styles.tex1}>
                        {'\u2022 '}Certain breeds are naturally aggressive: regardless of their breed, any dog has the capacity to become aggressive if they feel stressed, startled or threatened. The reality is that big dogs have the potential to be more dangerous if they become aggressive. This is something that can occur at any stage of the dogs life, so it is worthwhile spending time creating a bond and training with your dog to be able to recognise and prevent potential triggers.
                    </Text>
                    <Text style={styles.tex1}>
                        {'\u2022 '}A wagging tail and “smile” means a dog is happy: the particular way that a dog wags its tail can give clues about its emotional state, which may indicate it is happy, scared or nervous. It is important to be able to recognise how your individual pet responds to various experiences to ensure you can accurately interpret their signals. This is particularly important if your pet is around children, for safety reasons.

                    </Text>
                    <Text style={styles.tex1}>
                        {'\u2022 '}Old dogs can’t learn new tricks: don’t be scared to adopt an older dog out of fear you won’t be able to teach it new habits. Older dogs can actually be easier to train than younger dogs since they are not as easily overwhelmed; however, it is important to give them as much patience as you would to a puppy.


                    </Text>
                    <Text style={styles.tex1}>
                        {'\u2022 '}A little bit of human food is okay: it can be tempting to want to share your favourite snacks with your beloved pet, but this is often harmful and potentially deadly for your dog. Some foods can cause severe intestinal damage (e.g. grapes, avocado, onion, garlic), while others will often lead to excessive weight gain. Make sure you are prepared to provide quality dog-friendly meals to your pet and stick to regular feeding times and quantities.
                        {"\n"}{"\n"}

                    </Text>
    
                  </View>
                ) : null}

              {/* drop-down button to make the corresponding contents visible */}
              <TouchableOpacity style={styles.card} onPress={() => setContent4(!content4)} > 
                <Text style={styles.subt}>
                    Rescue pets
                  </Text>
              </TouchableOpacity>
              {content4 ?
                (
                  <View style={styles.paragraph}>
                      <Text style={styles.tex1}>
                          {'\u2022 '}There must be something wrong with them: most often it is a change within the owners life that has led to them being unable to care for their pet any longer (e.g. moving houses, financial struggles, illness), and therefore required them to put it up for adoption. It is important to carefully consider what changes you are expecting to encounter in the next 10+ years to ensure you are in a position to bring a new pet into your life.

                      </Text>
                      <Text style={styles.tex1}>
                          {'\u2022 '}They must have been abused if they are timid: many pets can behave in a timid manner when interacting with new people or while being introduced to a new environment. You should be prepared to understand and adapt to any fears and phobias your pet may have, but also demonstrate general patience with your pet.

                      </Text>
                      <Text style={styles.tex1}>
                          {'\u2022 '}They have health issues which will require expensive treatment: most are perfectly healthy and checked by a veterinarian before being put up for adoption. Many adoption agencies will have completed vaccinations and taken care of pre-existing health concerns, and this is reflected in the adoption fee.
                          {"\n"}{"\n"}
                      </Text>
                  
                  </View>
                ) : null}


            </View>
            
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
    paddingLeft: 10,
    paddingRight: 10
    
  },
  paragraph: {
    textAlign: "left",
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: "#545871",
    width: 300,
  },
  header: {
    textAlign: "center",
    padding: 10,
    
  },  
  subt: {
    fontSize: 14,
    fontWeight: "bold",
    width:290,
    
  },
  tex1: {
    color: "#777", 
    paddingTop: 5, 
    paddingLeft: 5,
    
  },
  
  card: {
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#DDDDDD",
    
  },
  buttonbox: {
    // backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});



export default Preadoption;