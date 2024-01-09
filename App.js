import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import Home from './screens/home';
import { appStyles } from './styles/styles';






export default function App() {
  return (
    <ScrollView style={appStyles.container}>
     <Home />
    </ScrollView>
  );
}

