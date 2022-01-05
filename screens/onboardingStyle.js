import { StyleSheet } from "react-native";
import appTheme from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  illustrationWrapper: { display: "flex", alignItems: "center" },
  illustrationContent: {
    height: 400,
    width: "100%",
    resizeMode: "cover",
    marginTop: 0,
    marginBottom: 30,
  },
  largeText: {
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 32,
    marginBottom: 15,
    textAlign: "center",
  },
  smallText: {
    fontSize: 16,
    color: appTheme.INACTIVE_COLOR,
    fontWeight: "500",
    marginBottom: 50,
    textAlign: "center",
  },
  loginBtnWrapper: {
    borderColor: appTheme.INACTIVE_COLOR,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: 7,
    marginBottom: 15,
    marginHorizontal: 30,
  },
  loginBtnText: {
    fontWeight: "bold",
    fontSize: 16,
    borderColor: appTheme.INACTIVE_COLOR,
    // borderBottomWidth: 1,
  },
  signUpBtnWrapper: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: 7,
    marginHorizontal: 30,
  },
  signUpBtnText: { fontWeight: "bold", fontSize: 16, color: "#fff" },
});

export default styles;
