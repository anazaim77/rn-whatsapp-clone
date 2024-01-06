import Navigation from "@/config/navigator";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
      <Text>coba</Text>
    </>
  );
}
