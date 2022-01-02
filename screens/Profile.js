import React, { useContext } from "react";
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
import Fontisto from "react-native-vector-icons/Fontisto";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import styles from "./profileStyle";
import appTheme from "../constants/colors";
import { AuthContext } from "../context";
import { TabScreenHeader } from "../components/TabScreenHeader";
// import { navigateToNestedRoute } from "../../navigators/RootNavigation";
import { getScreenParent } from "../utils/NavigationHelper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLog, useSetIsLog } from "../context/LogContext";

export function Profile({ navigation }) {
  isLogged = useLog();
  setIsLogged = useSetIsLog();
  const user = {
    id: "0123V",
    name: "Usman Marwat",
    photo:
      "https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    designation: "Lead Designer",
  };

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      setIsLogged(false);
    } catch (e) {
      // clear error
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.profileDetailsSection}>
            <View style={styles.profileInfoSection}>
              <View style={styles.statisticsContainer}>
                <Text style={styles.statisticsText}>135</Text>
                <Text style={styles.statisticsTitle}>Completed Tasks</Text>
              </View>
              <Image
                style={styles.profilePhoto}
                source={{
                  uri: user?.photo,
                }}
              />
              <View style={styles.statisticsContainer}>
                <Text style={styles.statisticsText}>20</Text>
                <Text style={styles.statisticsTitle}>Ongoing Tasks</Text>
              </View>
            </View>
            <View style={styles.profileCenterSection}>
              <Text style={styles.nameText}>{user?.name}</Text>
              <Text style={styles.designationText}>{user?.designation}</Text>
              <TouchableOpacity style={styles.editProfileWrapper}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.exploreSection}>
            <Text style={styles.exploreHeader}>Explore</Text>
            <View style={styles.exploreContent}>
              <TouchableOpacity style={styles.singleExplore}>
                <Ionicons name="people" size={22} color={appTheme.COLOR1} />
                <Text style={styles.exploreText}>Members</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.singleExplore}>
                <MaterialCommunityIcons
                  name="crown"
                  size={22}
                  color={appTheme.COLOR1}
                />
                <Text style={styles.exploreText}>Go Pro</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.singleExplore}>
                <Fontisto
                  name="pie-chart-1"
                  size={22}
                  color={appTheme.COLOR1}
                />
                <Text style={styles.exploreText}>Report</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.singleExplore}>
                <SimpleLineIcons
                  name="settings"
                  size={22}
                  color={appTheme.COLOR1}
                />
                <Text style={styles.exploreText}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.singleExplore,
                  { marginRight: "auto", marginLeft: "7%" },
                ]}
                onPress={() => clearAsyncStorage()}
              >
                <MaterialCommunityIcons
                  name="logout"
                  size={22}
                  color={appTheme.COLOR1}
                />
                <Text style={styles.exploreText}>Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
