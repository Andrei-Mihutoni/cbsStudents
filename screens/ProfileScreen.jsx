import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/UserActions";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.Container}>
      <Text>I am ProfileScreen</Text>
      <View style={styles.BtnContainer}>
        <Button style={styles.btn} title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
      </View>
      <View style={styles.BtnContainer}>
        <Button style={styles.btn} title="Logout" onPress={() => dispatch(logout())} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  BtnContainer: {
    width: 120,
    margin: 10,
  },

  btn: {
    width: 100,
  },
});

export default ProfileScreen;
