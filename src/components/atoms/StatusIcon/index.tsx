import React, { useMemo } from "react";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { myColors } from "@/assets/themes";

export type StatusType = "read" | "unread" | "sent" | "delivered" | string;

interface StatusIconProps {
  size: "small" | "medium";
  status: StatusType;
}

const StatusIcon = ({ status, size }: StatusIconProps) => {
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
    <Ionicons
      size={size === "small" ? 10 : 20}
      color={myColors.neutral.N500}
      {...messageStatusProps}
    />
  );
};

export default StatusIcon;

const styles = StyleSheet.create({
  container: {},
});
