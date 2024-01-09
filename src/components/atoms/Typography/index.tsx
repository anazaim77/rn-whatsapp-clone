import { myColors } from "@/assets/themes";
import React, { useMemo } from "react";
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from "react-native";

interface TypographyProps {
  children: React.ReactNode;
  fontSize?:
    | 6
    | 7
    | 8
    | 10
    | 12
    | 13
    | 14
    | 16
    | 20
    | 22
    | 24
    | 26
    | 28
    | 30
    | 34
    | 40
    | 46
    | 54;
  style?: StyleProp<TextStyle>;
  fontWeight?: "light" | "regular" | "bold";
  color?: ColorValue | undefined;
}

const Typography = ({
  children,
  fontSize = 13,
  style,
  fontWeight = "regular",
  color = myColors.neutral.N900,
}: TypographyProps) => {
  const customStyle = useMemo(
    () => ({
      fontSize,
      color,
    }),
    [fontSize, color]
  );
  const customFontWeight = useMemo(
    () => ({
      fontFamily:
        fontWeight === "light"
          ? "Lato_300Light"
          : fontWeight === "bold"
          ? "Lato_700Bold"
          : "Lato_400Regular",
    }),
    [fontWeight]
  );
  return (
    <Text style={[styles.base, customStyle, customFontWeight, style]}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  base: {},
});
