import { myColors } from "@/assets/themes";
import { Badge, Typography } from "@/components";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface ChatItemProps {}

const ChatItem = (props: ChatItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => console.log("pressed")}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={styles.nameBox}>
            <Typography
              fontWeight="bold"
              fontSize={16}
              color={myColors.neutral.N800}
            >
              Name
            </Typography>
            <Typography color={myColors.neutral.N800}>10.22</Typography>
          </View>
          <View style={styles.nameBox}>
            <View style={styles.messageBox}>
              <Ionicons
                name={"checkmark-done-outline"}
                size={20}
                color={myColors.neutral.N500}
              />
              <Typography fontSize={13} color={myColors.neutral.N300}>
                Message
              </Typography>
            </View>
            <Badge text="12" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: myColors.neutral.N300,
  },
  image: { height: 66, width: 66, borderRadius: 100 },
  textContainer: { flex: 1, marginLeft: 16 },
  nameBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});
