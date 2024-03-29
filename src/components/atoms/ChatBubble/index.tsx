import { myColors } from "@/assets/themes";
import { StyleUtils } from "@/utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import StatusIcon from "../StatusIcon";
import Typography from "../Typography";

interface ChatBubbleProps {
  type: "send" | "accept" | string;
  children: React.ReactNode;
}

const radiusBubble = 8;

const ChatBubble = ({ type = "send", children }: ChatBubbleProps) => {
  const isSend = type === "send";
  return (
    <View style={[isSend ? styles.sendBox : styles.acceptBox, styles.baseBox]}>
      <Typography>{children}</Typography>
      {isSend && (
        <View style={styles.boxInfo}>
          <Typography fontSize={6}>09.00</Typography>
          <StatusIcon size="small" status={"delivered"} />
        </View>
      )}
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  baseBox: {
    padding: 4,
    marginBottom: 8,
    maxWidth: StyleUtils.widthScreen * 0.8,
  },

  sendBox: {
    borderTopLeftRadius: radiusBubble,
    borderBottomLeftRadius: radiusBubble,
    borderTopRightRadius: radiusBubble,
    backgroundColor: myColors.secondaryLight.S200,
    alignSelf: "flex-end",
  },
  acceptBox: {
    borderTopLeftRadius: radiusBubble,
    borderBottomRightRadius: radiusBubble,
    borderTopRightRadius: radiusBubble,
    backgroundColor: myColors.neutral.N20,
    alignSelf: "flex-start",
  },
  boxInfo: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
