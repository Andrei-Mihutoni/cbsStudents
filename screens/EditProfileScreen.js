import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Input from "./../components/Input";
import { useState } from "react";

const EditProfileScreen = ({ navigation }) => {
  const username = useSelector((state) => state.user.username);
  const [validUsername, setValidUsername] = useState(username !== "");

  const save = () => {
    // ** if the "form" is valid ** {
    // save data - we need access to text here...
    //} else {
    // display error message
    //}
  };

  return (
    <View>
      <Text>Edit your profile here</Text>

      <Input label="Username: " inputValue={username} error="Username cannot be empty." valid={validUsername} setValid={setValidUsername} />
      <Input label="Password: " inputValue="" error="Cannot be empty" />
      <Button title="Save" onPress={save} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
export default EditProfileScreen;
