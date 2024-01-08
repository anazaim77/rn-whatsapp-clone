import { iconsCollection } from "@/assets/images";
import { myColors } from "@/assets/themes";
import { Typography } from "@/components";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingPage = () => {
  const navigation = useNavigation();
  useEffect(function autoNavigate() {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", marginVertical: 40, flex: 1 }}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={iconsCollection.appLogo} style={styles.image} />
        </View>
        <View style={{ alignItems: "center", marginBottom: 50 }}>
          <Typography
            fontWeight="bold"
            fontSize={13}
            color={myColors.neutral.N300}
          >
            from
          </Typography>
          <Typography
            fontWeight="bold"
            fontSize={20}
            color={myColors.secondary.S300}
          >
            Facebook
          </Typography>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingPage;

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: 125, height: 125 },
});
