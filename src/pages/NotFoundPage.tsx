import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface NotFoundPageProps {}

const NotFoundPage = (props: NotFoundPageProps) => {
  return (
    <View style={styles.container}>
      <Text>NotFoundPage</Text>
    </View>
  );
};

export default NotFoundPage;

const styles = StyleSheet.create({
  container: {},
});
