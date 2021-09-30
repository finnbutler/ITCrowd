import React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';

const URL = "https://itcrowdproject.uqcloud.net/?PET_PHOTO";
const Test = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      //.alert(data)
      .finally(setLoading(false));
  });
  //alert(data);
  alert(setData);
  return (
    // <SafeAreaView>
    //   {isLoading ? (
    //     <ActivityIndicator />
    //   ) : (
    //     <FlatList
    //   data={data.PID}
    //   keyExtractor={({ id }, index) => id}
    //   renderItem={({ item }) => <Text>{item}</Text>}
    // />

    // )}
    <View>
      {" "}
      TESTS
      <Text>{data[0]}</Text>
    </View>
    // {/* </SafeAreaView> */}
  );
};
export default Test;
