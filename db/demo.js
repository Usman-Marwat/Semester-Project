import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const FIREBASE_API_ENDPOINT =
  "https://demo2-bdd15-default-rtdb.firebaseio.com/"; // << LOOK Here, provide URL of your Firebase Realtime Database

export const postData = () => {
  var requestOptions = {
    method: "POST",
    body: JSON.stringify({
      employeename: "New Employee",
      taskdesc: "New Task",
    }),
  };
  fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
export const getData = async () => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`);
  const data = await response.json();
  console.log(data);
};
export const GetId = async () => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`);
  const data = await response.json();
  const ids = Object.keys(data);
  console.log(ids);
};
GetId();
export const deleteData = () => {
  const id = "-Ms4xZVlgv5Fw-QWlOpv";
  var requestOptions = {
    method: "DELETE",
  };
  fetch(`${FIREBASE_API_ENDPOINT}/tasks/${id}.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log("Delete Response:", result))
    .catch((error) => console.log("error", error));
};

export const updateData = () => {
  const id = "-Ms4xMzhRhSrEvM7iw_O";
  var requestOptions = {
    method: "PATCH",
    body: JSON.stringify({
      username: "UserName",
      password: "Password",
      employeename: "Update New Employee",
    }),
  };

  fetch(`${FIREBASE_API_ENDPOINT}/tasks/${id}.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
