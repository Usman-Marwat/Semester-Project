import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  SafeAreaView,
} from "react-native";
// import shortid from "shortid";
import ProgressCircle from "react-native-progress-circle";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles2 from "./taskViewStyle";
import appTheme from "../constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { getTaskDb } from "../db/demo";
import { ScrollView } from "react-native-gesture-handler";
import { EmptyListComponent } from "../components/EmptyListComponent";
import { LinearGradient } from "expo-linear-gradient";

export function TaskView({ navigation, ProjectId, route }) {
  const { taskId } = route.params;
  const [task, setTask] = useState({});
  const getData = async () => {
    try {
      const taskDb = await getTaskDb(taskId);
      setTask(taskDb);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // const selectedTask = {
  //   id: 1,
  //   projectId: 1,
  //   title: "Dashboard Design",
  //   members: [
  //     {
  //       name: "John Doe",
  //       photo:
  //         "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  //     },
  //     {
  //       name: "Ann Smith",
  //       photo:
  //         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  //     },
  //     {
  //       name: "Jeff Atwood",
  //       photo:
  //         "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
  //     },
  //   ],
  //   progress: 15,
  // };

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <SafeAreaView style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.navigate("Project", { ProjectId })}
        ></TouchableOpacity>
        <View style={styles.setModalDimensions("90%", "100%")}>
          {task?.id ? (
            <View style={styles2.container}>
              <View style={styles2.topWrapper}>
                <View style={styles2.taskProgressWrapper}>
                  <ProgressCircle
                    percent={task?.progress}
                    radius={30}
                    borderWidth={7}
                    color="#6AC67E"
                    shadowColor="#f4f4f4"
                    bgColor="#fff"
                  >
                    <Text style={styles2.taskProgress}>{task?.progress}%</Text>
                  </ProgressCircle>
                </View>
                <Text style={styles2.taskTitle}>{task?.title}</Text>
              </View>
              <Text style={styles2.taskTeamText}>Team</Text>
              <View style={styles2.taskMembersWrapper}>
                {task?.selectedMembers?.map((member) => (
                  <Image
                    key={Math.random().toString()}
                    style={styles2.taskMemberPhoto}
                    source={{ uri: member?.image }}
                  />
                ))}
                <TouchableOpacity style={styles2.plusBtnContainer}>
                  <MaterialCommunityIcons name="plus" size={22} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles2.scheduleWrapper}>
                <View style={styles2.scheduleRow}>
                  <MaterialCommunityIcons
                    name="clock"
                    size={20}
                    color={appTheme.INACTIVE_COLOR}
                  />
                  <Text style={styles2.scheduleText}>1:30PM - 2:00PM</Text>
                </View>
                <View style={styles2.scheduleRow}>
                  <AntDesign
                    name="calendar"
                    size={20}
                    color={appTheme.INACTIVE_COLOR}
                  />
                  <Text style={styles2.scheduleText}>June 13 2021</Text>
                </View>
              </View>
              <Text style={styles2.longText}>dsad</Text>

              <View style={[styles2.bottomWrapper]}>
                <TouchableOpacity onPress={() => deleteTask()}>
                  <LinearGradient
                    colors={["#ff9068", "#ffa500"]}
                    style={styles2.btnWrapper}
                  >
                    <Text style={styles2.btnText}>Delete?</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <EmptyListComponent />
          )}
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
