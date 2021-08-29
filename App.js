import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState("column");

  return (
    <PreviewLayout
      label="Purrrfect Pets"
      values={["The Adventure Quiz", "Your Pets", "Dashboard", "Settings"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
    >
      <View
        style={[styles.header, { backgroundColor: "powderblue" }]} 
        
      >
           <Text style={[{fontWeight: 500},{fontFamily:"Roboto"}, {textAlign:"center"}, {fontSize: 30} ]}> Choose Your Own Adventure, answer the questions to find your purrrfect pet!  </Text> 
           </View> 


      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      > 
        <TouchableOpacity
          style={[
           styles.selected2,
          ]}
        >
           <Text style={[{fontWeight: 500}, {textAlign:"center"}, {fontSize: 30} ]}> Yes  </Text> 
            </TouchableOpacity>
      
      </View> 
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      > 
      <TouchableOpacity
          style={[
           styles.selected2,
          ]}
        >
  <Text style={[{fontWeight: 500}, {textAlign:"center"}, {fontSize: 30} ]}> No  </Text> 
     
     </TouchableOpacity>
      </View> 
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  header: {
     width: 360,
  height: 400,
  },
  box: {
    width: 360,
    height: 70,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  selected2: {
    opacity: 0.5,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FlexDirectionBasics;