import { myColors } from "@/assets/themes";
import { StyleUtils } from "@/utils";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface TextInputSectionProps {}

const TextInputSection = (props: TextInputSectionProps) => {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.boxInput}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color={myColors.neutral.N500}
        />
        <TextInput
          placeholder="type your message..."
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.boxMic}>
        <Feather name="send" size={24} color={myColors.neutral.N0} />
      </View>
    </View>
  );
};

export default TextInputSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    width: StyleUtils.widthScreen,
    paddingHorizontal: 8,
  },
  boxInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: myColors.neutral.N0,
    padding: 8,
    marginRight: 8,
  },
  boxMic: {
    backgroundColor: myColors.secondary.S300,
    borderRadius: 100,
    padding: 8,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginLeft: 12,
  },
});
