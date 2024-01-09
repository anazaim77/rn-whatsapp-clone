import { myColors } from "@/assets/themes";
import { Typography } from "@/components";
import { ChatModel } from "@/hooks/queryHooks";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

interface HeaderChatRoomProps {}

const HeaderChatRoom = (props: HeaderChatRoomProps) => {
  const { goBack } = useNavigation();
  const route = useRoute();

  const params = route.params as ChatModel;

  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color={myColors.neutral.N0} />
      </Pressable>
      <Image
        source={{ uri: params.image_url || "https://i.pravatar.cc/300" }}
        style={styles.image}
      />
      <Typography color={myColors.neutral.N0} fontSize={20} style={{ flex: 1 }}>
        {params.name}
      </Typography>
      <View style={styles.containerIcons}>
        <Feather name="video" size={24} color={myColors.neutral.N0} m />
        <Ionicons name="call" size={24} color={myColors.neutral.N0} />
        <Feather name="more-vertical" size={24} color={myColors.neutral.N0} />
      </View>
    </View>
  );
};

export default HeaderChatRoom;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: myColors.secondary.S400,
    paddingVertical: 13,
    paddingHorizontal: 8,
  },
  containerIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 90,
  },
  image: { height: 34, width: 34, borderRadius: 100, marginHorizontal: 8 },
});
