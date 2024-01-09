import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ChatItem from "./components/ChatItem";

interface ChatListPageProps {}

const ChatListPage = (props: ChatListPageProps) => {
  return (
    <View style={styles.container}>
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </View>
  );
};

export default ChatListPage;

const styles = StyleSheet.create({
  container: {},
});
