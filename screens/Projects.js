import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
// import shortid from "shortid";
// import { nanoid } from "nanoid";
import styles from "./projectsStyle";
import { AuthContext } from "../context";
import { TabScreenHeader } from "../components/TabScreenHeader";
import { ProjectCard } from "../components/ProjectCard";
import { EmptyListComponent } from "../components/EmptyListComponent";
import { combineData } from "../utils/DataHelper";

export function Projects({ navigation }) {
  const tabs = ["All", "Ongoing", "Completed"];
  const projects = [
    {
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
    },
    {
      id: 2,
      title: "Dashboard UI",
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
      progress: 28,
      createdAt: "Jan 17 2021",
      tasks: 24,
      status: "completed",
    },
    {
      id: 3,
      title: "App UX Planning",
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
      createdAt: "Feb 25 2021",
      tasks: 24,
      status: "ongoing",
    },
  ];

  const [data, setData] = useState({ activeTab: "All" });

  const toggleTab = (tab) => {
    setData(combineData(data, { activeTab: tab }));
  };

  const isActiveTab = (tab) => {
    const value = data?.activeTab === tab;
    return value;
  };

  const getProjects = () => {
    let { activeTab } = data;
    let projectsToRender = [];
    if (activeTab === "All") {
      projectsToRender = projects;
    } else {
      projectsToRender =
        projects?.filter(
          (project) => project.status === activeTab?.toLowerCase()
        ) || [];
    }

    return projectsToRender;
  };

  const renderProjectInfo = ({ item }) => {
    return (
      <ProjectCard
        project={item}
        key={Math.random().toString()}
        navigation={navigation}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <Text style={styles.headerTitle}>Projects</Text>}
        isSearchBtnVisible={true}
        isMoreBtnVisible={true}
      />
      <View style={styles.projectsBody}>
        <View style={styles.projectsTabs}>
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
        {projects?.length > 0 ? (
          <FlatList
            data={getProjects()}
            keyExtractor={(item, index) => Math.random().toString()}
            renderItem={renderProjectInfo}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <EmptyListComponent />
        )}
      </View>
    </SafeAreaView>
  );
}
