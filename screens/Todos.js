import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "../components/header";
import TodoItem from "../components/todoItem";
import AddTodo from "../components/addTodo";

export default function Todos({ navigation }) {
  const [todos, setTodos] = useState([
    { text: "play on the switch", key: "4" },
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch again", key: "3" },
  ]);
  const [toggleBtns, setToggleBtns] = useState(false);
  const [updateText, setUpdateText] = useState("");
  const [updateKey, setUpdateKey] = useState("");

  const updateHandler = (key) => {
    console.log(todos.length);
    todos.forEach((todo, index) => {
      if (todo.key === key) {
        setUpdateText(todo.text);
        setUpdateKey(key);
      }
    });
    setToggleBtns(!toggleBtns);
  };

  const pressHandler = (key) => {
    Alert.alert("Delete?", "Are You sure ", [
      {
        text: "Yes",
        onPress: () =>
          setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.key != key);
          }),
      },
      {
        text: "No",
        onPress: () => {},
      },
    ]);
  };

  const UpdateCurrent = (text) => {
    if (text.length > 3) {
      todos.forEach((todo, index) => {
        if (todo.key === updateKey) {
          todo.text = text;
        }
        //this component rerender below was important after setting th
        setToggleBtns(!toggleBtns);
        setUpdateText("");
      });
    } else {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo
          submitHandler={submitHandler}
          toggleBtns={toggleBtns}
          setToggleBtns={setToggleBtns}
          updateHandler={updateHandler}
          updateText={updateText}
          UpdateCurrent={UpdateCurrent}
        />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem
                item={item}
                pressHandler={pressHandler}
                toggleBtns={toggleBtns}
                setToggleBtns={setToggleBtns}
                updateHandler={updateHandler}
              />
            )}
            ListEmptyComponent={
              <Text style={styles.emptyList}>
                There is not Data in the List
              </Text>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  emptyList: {
    marginTop: 150,
    textAlign: "center",
  },
});
