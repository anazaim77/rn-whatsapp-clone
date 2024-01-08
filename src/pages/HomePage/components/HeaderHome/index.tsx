import { myColors } from "@/assets/themes";
import { Typography } from "@/components";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

interface HeaderHomeProps {}

const HeaderHome = (props: HeaderHomeProps) => {
  return (
    <View style={styles.container}>
      <Typography color={myColors.neutral.N0} fontSize={20}>
        WhatsApp
      </Typography>
      <View style={styles.containerIcons}>
        <Feather name="camera" size={24} color={myColors.neutral.N0} m />
        <Ionicons name="search-outline" size={24} color={myColors.neutral.N0} />
        <Feather name="more-vertical" size={24} color={myColors.neutral.N0} />
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
});
