import { backgroundCollection } from "@/assets/images";
import { myColors } from "@/assets/themes";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderChatRoom, TextInputSection } from "./components";
import { ChatBubble } from "@/components";

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
        <View>
          <ChatBubble type="send">test i</ChatBubble>
          <ChatBubble type="accept">test ii</ChatBubble>
          <ChatBubble type="send">test i</ChatBubble>
          <ChatBubble type="send">test i</ChatBubble>
          <ChatBubble type="accept">test ii</ChatBubble>
          <ChatBubble type="accept">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quis facere ullam cumque, exercitationem atque temporibus in a!
            Inventore, dignissimos a. Laboriosam culpa natus doloremque
            reiciendis architecto possimus iste odio!
          </ChatBubble>
          <ChatBubble type="accept">test ii</ChatBubble>
          <ChatBubble type="accept">test ii</ChatBubble>
        </View>
        <TextInputSection />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChatRoomPage;

const styles = StyleSheet.create({
  container: { flex: 1 },
  chatBox: { flex: 1, position: "relative", padding: 8 },
});
