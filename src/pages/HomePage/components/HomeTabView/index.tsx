import { myColors } from "@/assets/themes";
import { Typography } from "@/components";
import NotFoundPage from "@/pages/NotFoundPage";
import React, { useState } from "react";
import { Pressable, StyleSheet, View, useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

interface HomeTabViewProps {}

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const FirstRoute2 = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoutes = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  camera: NotFoundPage,
  chats: SecondRoute,
  status: NotFoundPage,
  calls: NotFoundPage,
});

const renderTabBar = ({ jumpTo, navigationState }: any) => {
  const { routes } = navigationState;
  return (
    <View style={{ flexDirection: "row", width: "100%" }}>
      {routes.map((route: any, index: number) => {
        const focused = index === navigationState.index;

        return (
          <Pressable
            key={route.key}
            onPress={() => !focused && jumpTo(route.key)}
            style={{
              flex: 1,
              backgroundColor: myColors.secondary.S400,
              alignItems: "center",
              paddingVertical: 13,
              borderBottomWidth: focused ? 3 : 0,
              borderBottomColor: myColors.neutral.N30,
            }}
          >
            <Typography
              color={myColors.neutral.N30}
              fontWeight={focused ? "bold" : "regular"}
              fontSize={16}
            >
              {route.title}
            </Typography>
          </Pressable>
        );
      })}
    </View>
  );
};

const HomeTabView = (props: HomeTabViewProps) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(1);
  const [routes] = useState([
    { key: "camera", title: "Camera" },
    { key: "chats", title: "Chats" },
    { key: "status", title: "Status" },
    { key: "calls", title: "Calls" },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

export default HomeTabView;

const styles = StyleSheet.create({
  container: {},
});
