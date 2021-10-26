import Firebase from "../config/firebase";
import React, { useState } from "react";

const signOut = () => {
  Firebase.auth().signOut();
};

export default signOut;
