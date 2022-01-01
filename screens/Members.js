import React, { useContext, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import shortid from "shortid";
import styles from "./membersStyle";
import appTheme from "../constants/colors";
import { TabScreenHeader } from "../components/TabScreenHeader";
import { EmptyListComponent } from "../components/EmptyListComponent";
import { AuthContext } from "../context";
// import { navigateToNestedRoute } from "../../navigators/RootNavigation";
import { getScreenParent } from "../utils/NavigationHelper";

export function Members() {
  //   const { state, dispatch } = useContext(AuthContext);
  //   const { members } = state;

  const members = [
    {
      id: "1234A",
      name: "Mary Houston",
      photo:
        "https://images.unsplash.com/photo-1609132718484-cc90df3417f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
    {
      id: "2345B",
      name: "Alex Johan",
      photo:
        "https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
    {
      id: "3456C",
      name: "Veronica Tshult",
      photo:
        "https://images.unsplash.com/photo-1541787457429-b1766a4766b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
    {
      id: "4567D",
      name: "Bayo Olade",
      photo:
        "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
    {
      id: "5678E",
      name: "Ahmad Hussein",
      photo:
        "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
    {
      id: "6789F",
      name: "Gina Malo",
      photo:
        "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
    {
      id: "7890G",
      name: "Wilfred Opeh",
      photo:
        "https://images.unsplash.com/photo-1573341830496-e89fcae7f5eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
    {
      id: "8901H",
      name: "Stacy Abraham",
      photo:
        "https://images.unsplash.com/photo-1606247193592-53da505571f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
    {
      id: "9012I",
      name: "Owen McClaren",
      photo:
        "https://images.unsplash.com/photo-1611774119019-461b5dbd3ae8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
    {
      id: "0123J",
      name: "David Judah",
      photo:
        "https://images.unsplash.com/photo-1610261003803-224ee66747e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
    {
      id: "1234K",
      name: "Blessing Opharevhe",
      photo:
        "https://images.unsplash.com/photo-1612983133700-739c8f358334?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
    {
      id: "2345L",
      name: "Chinwe Joseph",
      photo:
        "https://images.unsplash.com/photo-1607050132114-8241718a5b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      designation: "Lead Designer",
      lastSeen: "4:20 PM",
    },
  ];

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <Text style={styles.headerTitle}>Members</Text>}
        isSearchBtnVisible={false}
        isMoreBtnVisible={true}
      />
      {members?.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.membersWrapper}>
            {members.map((member) => (
              <TouchableOpacity
                style={styles.singleMember}
                onPress={() => handleNavigation("Chat", member)}
                key={Math.random().toString()}
              >
                <Image
                  style={styles.singleMemberPhoto}
                  source={{
                    uri: member?.photo,
                  }}
                />
                <View style={styles.singleMemberInfo}>
                  <Text
                    style={styles.selectedMemberName}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {member?.name}
                  </Text>
                  <Text style={styles.selectedMemberLastSeen}>
                    {member?.designation}
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="message"
                  size={17}
                  color={appTheme.PRIMARY_COLOR}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <EmptyListComponent />
      )}
    </SafeAreaView>
  );
}