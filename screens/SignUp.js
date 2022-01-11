import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Switch,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./signUpStyle";
// import { navigateToNestedRoute } from "../shared/navigators/RootNavigation";
import { getScreenParent } from "../utils/NavigationHelper";
import appTheme from "../constants/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useLog, useSetIsLog } from "../context/LogContext";
import { LinearGradient } from "expo-linear-gradient";

export function SignUp({ navigation }) {
  const setIsLogged = useSetIsLog();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleBackButton = () => {
    navigation?.goBack();
  };

  const saveDataToAsync = async () => {
    console.log("Saving-------------------");
    await AsyncStorage.setItem(
      "@user_me",
      JSON.stringify({ username, password, email })
    );
    setIsLogged(true);
    console.log("Saving Done!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => handleBackButton()}
        >
          <MaterialIcons name="keyboard-arrow-left" size={25} color="gray" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContent}>
        <Text style={styles.largeText}>Welcome Back!</Text>
        <Text style={styles.smallText}>
          Log into your account &amp; make {"\n"}a successful company
        </Text>
        <View style={styles.inputRow}>
          <Ionicons name="person-outline" size={20} color="gray" />
          <TextInput
            placeholder="Username"
            placeholderTextColor="gray"
            style={styles.textInput}
            value={username}
            onChangeText={(text) => {
              setUserName(text);
            }}
          />
        </View>
        <View style={styles.inputRow}>
          <MaterialCommunityIcons name="email-outline" size={20} color="gray" />
          <TextInput
            placeholder="Email"
            placeholderTextColor="gray"
            secureTextEntry={true}
            style={styles.textInput}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </View>
        <View style={styles.inputRow}>
          <MaterialIcons name="lock-outline" size={20} color="gray" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            style={styles.textInput}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <Octicons name="eye-closed" size={20} color="gray" />
        </View>
        <View style={styles.savePwdRow}>
          <Text style={styles.savePwdText}>Save Password</Text>
          <Switch
            trackColor={{
              false: appTheme.INACTIVE_COLOR,
              true: appTheme.COLOR2,
            }}
            thumbColor="#fff"
            value={true}
          />
        </View>
        <TouchableOpacity onPress={saveDataToAsync}>
          <LinearGradient
            colors={[appTheme.GRADIENT_COLOR1, appTheme.GRADIENT_COLOR2]}
            style={styles.signUpBtnWrapper}
          >
            <Text style={styles.signUpBtnText}>SIGN UP</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtnWrapper}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginBtnText}>
            Already have an account? LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          style={styles.indexBtnWrapper}
          onPress={() => navigation.navigate("Onboarding")}
        >
          <Text>Home?</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}
