import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from "react-native";
import { Image } from "react-native-elements";
import { Card } from "react-native-shadow-cards";

const yogaImage = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAXKkCL9wT0vag2vpfBc4ou9ng6-xu8ZjNQ&usqp=CAU" };
const ghostImage = { uri: "https://cinemafromthespectrum.files.wordpress.com/2017/02/rehost2f20162f92f132f6dff0cc3-1320-44ee-afe5-64e494974ae4.jpg" };
const eventsImage = { uri: "https://media-exp1.licdn.com/dms/image/C561BAQE-51J-8KkMZg/company-background_10000/0/1548357920228?e=2147483647&v=beta&t=wrOVYN8qrGon9jILrMQv78FsyOV4IMQxr_3UjYtUREI" };

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
        <ImageBackground source={eventsImage} resizeMode="cover" style={styles.image}>
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
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default HomeScreen;
