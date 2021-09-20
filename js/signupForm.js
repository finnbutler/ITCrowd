import React from "react";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { View, TextInput, Button } from "react-native";
const URL = "https://itcrowdproject.uqcloud.net/?ACCOUNTS";
export default function SignUpForm() {
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
    <View>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {}}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder="Username"
              pb="2em"
              pt="5em"
              onChangeText={props.handleChange("username")}
              value={props.values.username}
            />
            <TextInput
              placeholder="Password"
              pb="2em"
              pt="5em"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />
            <Button
              title="submit"
              color="lightpink"
              pb="2em"
              pt="5em"
              onPreess={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

//export default SignUpForm;
