import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Card } from "react-native-shadow-cards";

const DiscoverScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.section}>
        <Text style={styles.text}>ALL EVENTS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section}>
        <Text style={styles.text}>All STUDENTS ORGANISTAIONS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section}>
        <Text style={styles.text}>ALL POSTS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  section: {
    margin: 15,
    borderRadius: 10,
    width: 400,
    height: 130,
    backgroundColor: "#581584",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default DiscoverScreen;
