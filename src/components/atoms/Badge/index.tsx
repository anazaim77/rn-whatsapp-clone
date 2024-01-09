import { myColors } from "@/assets/themes";
import React, { useMemo } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import Typography from "../Typography";

interface BadgeProps {
  text: string;
  bgColor?: ColorValue | undefined;
}

const Badge = ({ text, bgColor = myColors.secondary.S300 }: BadgeProps) => {
  const customStyle = useMemo(
    () => ({
      backgroundColor: bgColor,
    }),
    [bgColor]
  );
  return (
    <View style={[styles.base, customStyle]}>
      <Typography fontSize={12} color={myColors.neutral.N30}>
        {text}
      </Typography>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  base: { paddingVertical: 1, paddingHorizontal: 4, borderRadius: 60 },
});
