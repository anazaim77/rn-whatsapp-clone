import { illustrationsCollection } from "@/assets/images";
import { myColors } from "@/assets/themes";
import { StyleUtils } from "@/utils";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NotFoundPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={illustrationsCollection.underDevelopment}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

export default NotFoundPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: myColors.neutral.N0,
  },
  image: {
    width: StyleUtils.widthScreen,
    resizeMode: "contain",
  },
});
