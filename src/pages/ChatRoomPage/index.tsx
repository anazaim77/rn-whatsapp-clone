import { backgroundCollection } from "@/assets/images";
import { myColors } from "@/assets/themes";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderChatRoom, TextInputSection } from "./components";

interface ChatRoomPageProps {}

const ChatRoomPage = (props: ChatRoomPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={myColors.secondary.S400} />
      <HeaderChatRoom />
      <ImageBackground
        source={backgroundCollection.default}
        style={styles.chatBox}
      >
        <TextInputSection />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChatRoomPage;

const styles = StyleSheet.create({
  container: { flex: 1 },
  chatBox: { flex: 1, position: "relative" },
});
