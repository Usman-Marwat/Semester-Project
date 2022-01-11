import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import styles2 from "./createTaskStyle";
import { combineData } from "../utils/DataHelper";
import { LinearGradient } from "expo-linear-gradient";
import appTheme from "../constants/colors";

export function UpdateProfile({
  navigation,
  modalVisible,
  setModalVisible,
  user,
  updateHandler,
}) {
  const [data, setData] = useState({
    newUser: { username: "", designation: "", profile: "" },
  });

  const handleSetValue = (field, value) => {
    let { newUser } = data;
    newUser[field] = value;
    setData(combineData(data, newUser));
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <SafeAreaView style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalVisible(!modalVisible)}
        ></TouchableOpacity>
        <View style={styles.setModalDimensions("70%", "100%")}>
          <View style={styles2.container}>
            <Text style={styles2.boldText}>Create Task</Text>
            <TextInput
              placeholder="UserName"
              placeholderTextColor="gray"
              style={styles2.textInput}
              onChangeText={(text) => handleSetValue("username", text)}
            />
            <TextInput
              placeholder="Designation"
              placeholderTextColor="gray"
              style={styles2.textInput}
              onChangeText={(text) => handleSetValue("designation", text)}
            />
            <View style={styles2.teamTextWrapper}>
              {/* <Text style={styles2.teamText}>Select Members</Text> */}
            </View>
            <View style={styles2.teamSection}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles2.teamWrapper}></View>
              </ScrollView>
            </View>
            <TouchableOpacity
              onPress={() => updateHandler(combineData(user, data))}
            >
              <LinearGradient
                colors={[appTheme.GRADIENT_COLOR1, appTheme.GRADIENT_COLOR2]}
                style={styles2.btnWrapper}
              >
                <Text style={styles2.btnText}> Set Profile</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  closeButton: {
    height: 7,
    width: 80,
    backgroundColor: "#fff",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  setModalDimensions: (height, width) => ({
    height,
    width,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 10,
    display: "flex",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }),
});

export default UpdateProfile;
