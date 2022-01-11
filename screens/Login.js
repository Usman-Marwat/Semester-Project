import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Switch,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons, Ionicons, Octicons } from "@expo/vector-icons";
import styles from "../styles/screens/loginStyle";
// import { navigateToNestedRoute } from "../../navigators/RootNavigation";
import { getScreenParent } from "../utils/NavigationHelper";
import appTheme from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

export function Login({ navigation, route }) {
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleBackButton = () => {
    navigation?.goBack();
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
          />
          <Octicons name="eye-closed" size={20} color="gray" />
        </View>
        <View style={styles.savePwdRow}>
          <Text style={styles.savePwdText}>Save Password</Text>
          <Switch
            trackColor={{
              false: appTheme.GRADIENT_COLOR1,
              true: appTheme.GRADIENT_COLOR1,
            }}
            ios_backgroundColor={appTheme.GRADIENT_COLOR2}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={[appTheme.GRADIENT_COLOR1, appTheme.GRADIENT_COLOR2]}
            style={styles.loginBtnWrapper}
          >
            <Text style={styles.loginBtnText}>LOGIN</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtnWrapper}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.signUpBtnText}>
            Don't have an account? SIGN UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.indexBtnWrapper}
          onPress={() => navigation.navigate("Onboarding")}
        >
          <Text>Home?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
