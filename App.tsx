import Navigation from "@/config/navigator";
import { useCachedResources } from "@/hooks";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const { fontsLoaded, isLoadingComplete } = useCachedResources();
  if (!isLoadingComplete && !fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
