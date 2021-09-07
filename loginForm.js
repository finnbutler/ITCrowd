import React from "react";
import { Formik } from "formik";

export default function LoginForm() {
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
function validateForm() {
  //Add Spring Boot Validation Logic in here
  const getMoviesFromApi = () => {
    return fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const pass_and_user = JSON.stringify(getMoviesFromApi);
}
