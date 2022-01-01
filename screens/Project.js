import React, { useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProgressCircle from "react-native-progress-circle";
// import shortid from "shortid";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./projectStyle";
import { TabScreenHeader } from "../components/TabScreenHeader";
import { TaskInfo } from "../components/TaskInfo";
import { combineData } from "../utils/DataHelper";
import { AuthContext } from "../context";
import appTheme from "../constants/colors";

import { CreateTask } from "../components/CreateTask";

export function Project({ navigation, route }) {
  //   const project = route.params;
  const project = {
    id: 1,
    title: "App Project",
    description: "Digital Product Design",
    team: [
      {
        name: "John Doe",
        photo:
          "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
      {
        name: "Ann Smith",
        photo:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      },
      {
        name: "Jeff Atwood",
        photo:
          "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
      },
    ],
    progress: 35,
    createdAt: "Jan 13 2021",
    tasks: 24,
    status: "ongoing",
  };

  const [modalVisible, setModalVisible] = useState(false);

  const tasks = [
    {
      id: 1,
      projectId: 1,
      title: "Dashboard Design",
      members: [
        {
          name: "John Doe",
          photo:
            "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {
          name: "Ann Smith",
          photo:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
        {
          name: "Jeff Atwood",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
      ],
      progress: 15,
    },
    {
      id: 2,
      projectId: 1,
      title: "Mobile App Design",
      members: [
        {
          name: "Miriam Cooper",
          photo:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
        {
          name: "Jessica Leonard",
          photo:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {
          name: "Jeff Atwood",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
      ],
      progress: 100,
    },
    {
      id: 3,
      projectId: 2,
      title: "Wireframe Design",
      members: [
        {
          name: "Baron Dunecr",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
        {
          name: "Ferindah Yerstu",
          photo:
            "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
        {
          name: "Jeff Atwood",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: "A/B Testing",
      members: [
        {
          name: "Jeff Atwood",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
        {
          name: "Ferindah Yerstu",
          photo:
            "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: "A/B Testing",
      members: [
        {
          name: "Jeff Atwood",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
        {
          name: "Ferindah Yerstu",
          photo:
            "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: "A/B Testing",
      members: [
        {
          name: "Jeff Atwood",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
        {
          name: "Ferindah Yerstu",
          photo:
            "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: "A/B Testing",
      members: [
        {
          name: "Jeff Atwood",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
        {
          name: "Ferindah Yerstu",
          photo:
            "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: "A/B Testing",
      members: [
        {
          name: "Jeff Atwood",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
        {
          name: "Ferindah Yerstu",
          photo:
            "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: "A/B Testing",
      members: [
        {
          name: "Jeff Atwood",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
        {
          name: "Ferindah Yerstu",
          photo:
            "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: "A/B Testing",
      members: [
        {
          name: "Jeff Atwood",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
        {
          name: "Ferindah Yerstu",
          photo:
            "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: "A/B Testing",
      members: [
        {
          name: "Jeff Atwood",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
        {
          name: "Ferindah Yerstu",
          photo:
            "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
      ],
      progress: 80,
    },
  ];

  const tabs = ["Task List", "File", "Comments"];

  const [data, setData] = useState({
    activeTab: "Task List",
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "All Tasks", value: "All Tasks" },
    { label: "Ongoing", value: "Ongoing" },
    { label: "Completed", value: "Completed" },
  ]);

  const getTasks = () => {
    let tasksToRender = [];
    if (!value || value === "All Tasks") {
      tasksToRender = tasks;
    } else if (value === "Ongoing") {
      tasksToRender = tasks.filter((task) => task.progress < 100) || [];
    } else if (value === "Completed") {
      tasksToRender = tasks.filter((task) => task.progress === 100) || [];
    }

    return tasksToRender;
  };

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const toggleTab = (tab) => {
    setData(combineData(data, { activeTab: tab }));
  };

  const isActiveTab = (tab) => {
    const value = data?.activeTab === tab;
    return value;
  };

  const handleCreateTask = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => (
          <TouchableOpacity
            onPress={() => handleBackButton()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back-outline" size={25} color="#000" />
          </TouchableOpacity>
        )}
        isSearchBtnVisible={true}
        isMoreBtnVisible={true}
      />
      <View>
        <View style={styles.projectDetailsSection}>
          <View style={styles.projectTitleWrapper}>
            <Text style={styles.projectTitle}>{project?.title}</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.projectDescription}>{project?.description}</Text>
          <View style={styles.projectTeamAndProgress}>
            <View style={styles.projectProgressWrapper}>
              <ProgressCircle
                percent={project?.progress}
                radius={50}
                borderWidth={10}
                color="#6AC67E"
                shadowColor="#f4f4f4"
                bgColor="#fff"
              >
                <Text style={styles.projectProgress}>{project?.progress}%</Text>
              </ProgressCircle>
            </View>
            <View>
              <Text style={styles.projectTeamTitle}>Team</Text>
              <View style={styles.projectTeamWrapper}>
                {project?.team?.map((member) => (
                  <Image
                    key={Math.random().toString()}
                    style={styles.projectMemberPhoto}
                    source={{ uri: member?.photo }}
                  />
                ))}
                <TouchableOpacity style={styles.plusBtnContainer}>
                  <MaterialCommunityIcons name="plus" size={22} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.projectStatus}>{project?.status}</Text>
        </View>
        <View style={styles.projectBody}>
          <View style={styles.projectTabs}>
            {tabs?.map((tab) => (
              <TouchableOpacity
                style={[
                  styles.projectTab,
                  isActiveTab(tab) ? styles.activeProjectTab : null,
                ]}
                onPress={() => toggleTab(tab)}
                key={Math.random().toString()}
              >
                <Text
                  style={[
                    styles.projectTabText,
                    isActiveTab(tab)
                      ? styles.activeProjectTabText
                      : styles.inActiveProjectTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {data?.activeTab === "Task List" ? (
            <>
              <View style={styles.tasksHeader}>
                <TouchableOpacity
                  style={styles.tasksRow}
                  onPress={() => handleCreateTask()}
                >
                  <Text style={styles.tasksLeftText}>Add Task</Text>
                  <View style={styles.plusBtnContainer2}>
                    <MaterialCommunityIcons
                      name="plus"
                      size={19}
                      color="#fff"
                    />
                  </View>
                </TouchableOpacity>
                <DropDownPicker
                  placeholder="All Tasks"
                  placeholderStyle={{ fontSize: 15 }}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  containerStyle={{
                    width: 130,
                  }}
                  style={{
                    borderColor: "transparent",
                    backgroundColor: "transparent",
                  }}
                  dropDownContainerStyle={{
                    backgroundColor: "#fff",
                    borderColor: "transparent",
                  }}
                  labelStyle={{
                    fontSize: 15,
                  }}
                />
              </View>
              <View style={styles.bottomContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.bottomContent}>
                    {getTasks()?.map((task) => (
                      <TaskInfo task={task} key={Math.random().toString()} />
                    ))}
                  </View>
                </ScrollView>
              </View>
            </>
          ) : data?.activeTab === "File" ? (
            <></>
          ) : null}
        </View>
      </View>
      <CreateTask
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
}
