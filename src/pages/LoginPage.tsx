import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

interface LoginPageProps {}

const LoginPage = (props: LoginPageProps) => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text>LoginPage</Text>
      <Button title="goToHome" onPress={goToHome} />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {},
});
