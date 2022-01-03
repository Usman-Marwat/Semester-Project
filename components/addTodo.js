import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({
  submitHandler,
  toggleBtns,
  setToggleBtns,
  updateHandler,
  updateText,
  UpdateCurrent,
}) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(updateText);
    console.log(text + "-----------");
  }, [updateText]);
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      {!toggleBtns && (
        <Button
          color="steelblue"
          onPress={() => submitHandler(text)}
          title="add todo"
        />
      )}
      {toggleBtns && (
        <Button
          color="steelblue"
          onPress={() => UpdateCurrent(text)}
          title="Update"
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
