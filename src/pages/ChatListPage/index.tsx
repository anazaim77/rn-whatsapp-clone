import React, { useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import ChatItem from "./components/ChatItem";
import { queryHooks } from "@/hooks";
import { myColors } from "@/assets/themes";
import { ChatModel } from "@/hooks/queryHooks";
import { useNavigation } from "@react-navigation/native";

interface ChatListPageProps {}

const ChatListPage = (props: ChatListPageProps) => {
  const navigation = useNavigation();
  const { data, isLoading } = queryHooks.useGetChats();
  const goToChatRoot = useCallback((chat: ChatModel) => {
    navigation.navigate("ChatRoom", chat);
  }, []);

  if (isLoading)
    return <ActivityIndicator color={myColors.secondary.S500} size={"large"} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item: chat, index }) => (
          <ChatItem
            key={`chat-item-${index}`}
            name={chat.name}
            message={chat.last_message}
            time={chat.updated_at}
            status={chat.status}
            totalUnread={chat.total_unread_messages}
            urlImage={chat.image_url}
            onPress={() => goToChatRoot(chat)}
          />
        )}
      />
    </View>
  );
};

export default ChatListPage;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
