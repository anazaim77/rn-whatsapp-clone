import { backgroundCollection } from "@/assets/images";
import { myColors } from "@/assets/themes";
import { ChatBubble } from "@/components";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderChatRoom, TextInputSection } from "./components";
import useChatRoomLogic from "./hooks/useChatRoomLogic";

interface ChatRoomPageProps {}

const ChatRoomPage = (props: ChatRoomPageProps) => {
  const { onChangeText, text, onSubmitText, chatList } = useChatRoomLogic();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={myColors.secondary.S400} />
      <HeaderChatRoom />
      <ImageBackground
        source={backgroundCollection.default}
        style={styles.chatBox}
      >
        <FlatList
          inverted
          style={styles.list}
          data={chatList}
          renderItem={({ item, index }) => (
            <ChatBubble key={`chat-bubble-${index}`} type={item.type}>
              {item.message}
            </ChatBubble>
          )}
        />

        <TextInputSection
          onChangeText={onChangeText}
          text={text}
          onSubmitText={onSubmitText}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChatRoomPage;

const styles = StyleSheet.create({
  container: { flex: 1 },
  chatBox: { flex: 1, position: "relative" },
  list: { paddingHorizontal: 8, marginBottom: 50 },
});
