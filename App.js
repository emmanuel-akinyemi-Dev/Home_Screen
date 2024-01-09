import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './screens/home';
import { appStyles } from './styles/styles';






export default function App() {
  return (
    <SafeAreaView style={appStyles.container}>
     <Home />
    </SafeAreaView>
  );
}

