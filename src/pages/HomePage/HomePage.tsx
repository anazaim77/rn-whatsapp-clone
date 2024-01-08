import { myColors } from "@/assets/themes";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderHome, HomeTabView } from "./components";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={myColors.secondary.S400} />
      <HeaderHome />
      <HomeTabView />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
