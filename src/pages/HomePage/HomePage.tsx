import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "@/assets/themes";
import { Typography } from "@/components";
import { HeaderHome } from "./components";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={myColors.secondary.S400} />
      <HeaderHome />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
