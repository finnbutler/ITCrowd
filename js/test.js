import React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const URL = "https://itcrowdproject.uqcloud.net/?PET_PHOTO";
const Test = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json.PID))
      .catch((error) => alert(error))
      .finally(setLoading(false));
  });

  return (

    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => <Text>{item.PID}</Text>}
        />

      )}
    </SafeAreaView>
        
  );
};
export default Test;
