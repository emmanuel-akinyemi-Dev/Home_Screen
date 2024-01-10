import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import Home from "./screens/home";
import { appStyles } from "./styles/styles";
import Navigator from './routes/navigation'

export default function App() {
  return (
    <View style={appStyles.container}>
        <Navigator />
    </View>
  );
}
