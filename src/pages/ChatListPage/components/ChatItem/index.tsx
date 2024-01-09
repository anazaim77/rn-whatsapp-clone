import { myColors } from "@/assets/themes";
import { Badge, Typography } from "@/components";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useMemo } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface ChatItemProps {
  name: string;
  message?: string;
  status?: "read" | "unread" | "sent" | "delivered" | string;
  totalUnread?: number;
  time?: string;
  urlImage?: string;
}

const ChatItem = ({
  name,
  status = "delivered",
  message,
  time,
  urlImage,
  totalUnread,
}: ChatItemProps) => {
  const messageStatusProps = useMemo<{
    name: "checkmark-outline" | "checkmark-done-outline";
  }>(() => {
    switch (status) {
      case "unread":
        return { name: "checkmark-outline", size: 0 };
      case "sent":
        return { name: "checkmark-outline" };
      case "delivered":
        return { name: "checkmark-done-outline" };
      case "read":
        return { name: "checkmark-done-outline", color: "#39AACC" };

      default:
        return { name: "checkmark-outline", size: 0 };
    }
  }, [status]);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => console.log("pressed")}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: urlImage || "https://i.pravatar.cc/300" }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={styles.nameBox}>
            <Typography
              fontWeight="bold"
              fontSize={16}
              color={myColors.neutral.N800}
            >
              {name}
            </Typography>
            <Typography color={myColors.neutral.N800}>{time}</Typography>
          </View>
          <View style={styles.nameBox}>
            <View style={styles.messageBox}>
              <Ionicons
                size={20}
                color={myColors.neutral.N500}
                {...messageStatusProps}
              />
              <Typography fontSize={13} color={myColors.neutral.N300}>
                {message}
              </Typography>
            </View>
            {totalUnread ? <Badge text={totalUnread?.toString()} /> : null}
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
