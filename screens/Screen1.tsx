import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../App";
import { add, addChatroom, deleteChatroom, fetchChatrooms, subtract, toggleHappy } from "../store/actions/ChatActions";
import RaisedButton from "../components/ButtonsStyled";
import { Button } from "react-native-elements";

const Screen1 = ({ navigation }: { navigation: any }) => {
  const [text, onChangeText] = useState("");

  const dispatch = useDispatch();
  const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);
  // const isHappy = useSelector((state: RootState) => state.chat.isHappy); // subscribing to the store's chat slice/part
  // const numberOfIcecreams = useSelector((state: RootState) => state.chat.counter);

  useEffect(() => {
    dispatch(fetchChatrooms());
  }, []);

  console.log("chatrooms", chatrooms);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.ActiveChats}>
      <Text>{item.title}</Text>
      <View style={styles.Container}>
        <View style={styles.BtnContainer}>
          <Button title="X" onPress={() => dispatch(deleteChatroom(item.id))} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <RaisedButton title="Go to screen 1" onPress={() => navigation.navigate("Screen2")} />

      <Text style={styles.AddChatsTitle}>Add a new chatrooms</Text>
      <View style={styles.Container}>
        <TextInput placeholder="Chatroom name" style={styles.input} onChangeText={onChangeText} value={text} />
        <View style={styles.BtnContainer}>
          <Button style={styles.btn} title="+" onPress={() => dispatch(addChatroom(text))} />
        </View>
      </View>

      <View style={styles.ActiveChatsTitle}>
        <Text>Active Chatrooms</Text>
        <FlatList data={chatrooms} renderItem={renderItem} />
      </View>
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
  BtnContainer: {
    width: 80,
  },

  RedBtnContainer: {
    width: 50,
    backgroundColor: "#DDDDDD",
  },
  btn: {
    width: 100,
  },
  Container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  ActiveChats: {
    margin: 12,
    // marginRight: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#edebf7",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 5,
  },
  ActiveChatsTitle: {
    margin: 20,
  },

  AddChatsTitle: {
    margin: 20,
    marginBottom: -4,
  },
});

export default Screen1;
