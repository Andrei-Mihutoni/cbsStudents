import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from "react-native";
import { Image } from "react-native-elements";
import { Card } from "react-native-shadow-cards";

const yogaImage = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAXKkCL9wT0vag2vpfBc4ou9ng6-xu8ZjNQ&usqp=CAU" };
const ghostImage = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6z6cw6lEJLQO-b3xuB-9HLqgRK0ZwPkjYQ&usqp=CAU" };

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.section}>
        <ImageBackground source={yogaImage} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}> Christmas with CBS Yoga</Text>
          <Text style={styles.spacer}></Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section}>
        <ImageBackground source={ghostImage} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>CBS Film: Ghost Wold</Text>
          <Text style={styles.spacer}></Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section}>
        <Text style={styles.text}>ALL EVENTS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    // opacity: 0.3,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  spacer: {
    width: 300,
  },
  section: {
    margin: 15,
    width: 300,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#841584",
  },
  text: {
    opacity: 1,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
