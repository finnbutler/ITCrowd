import React from "react";
import { Formik } from "formik";
import { View, TextInput, Button } from "react-native";

export default function SignUpFrom() {
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
              onChangeText={props.handleChange("username")}
              value={props.values.username}
            />
            <TextInput
              placeholder="Password"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />
            <Button
              title="submit"
              color="lightpink"
              onPreess={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
