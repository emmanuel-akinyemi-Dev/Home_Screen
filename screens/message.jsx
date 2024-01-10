import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import Home from "./screens/home";
import { appStyles } from "./styles/styles";

export default function Message() {
  return (
    <View style={appStyles.container}>
      <ScrollView>
        <Home />
      </ScrollView>
    </View>
  );
}
