import { myColors } from "@/assets/themes";
import { Badge, StatusIcon, Typography } from "@/components";
import { StatusType } from "@/components/atoms/StatusIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useMemo } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface ChatItemProps {
  name: string;
  message?: string;
  status?: StatusType;
  totalUnread?: number;
  time?: string;
  urlImage?: string;
  onPress?: () => void;
}

const ChatItem = ({
  name,
  status = "delivered",
  message,
  time,
  urlImage,
  totalUnread,
  onPress,
}: ChatItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
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
              <StatusIcon size="medium" status={status} />
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
