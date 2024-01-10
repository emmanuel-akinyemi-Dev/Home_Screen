import { TouchableOpacity, View, ScrollView, Image, Text } from "react-native";
import { featStyles } from "../styles/styles";

export default function feat() {
  return (
    <View style={featStyles.container}>
      <View style={featStyles.recomend}>
        <Text style={featStyles.recomendText}> Recomendations</Text>
        <Text style={featStyles.recomendSee}>See all</Text>
      </View>
      <View style={featStyles.cardHolder}>
        <ScrollView horizontal={true}>
          <View style={featStyles.mainCard}>
            <View>
              <Image
                source={require("../assets/istockp.jpg")}
                style={featStyles.cardImage}
              />
            </View>
            <View style={featStyles.cont2}>
              <View style={featStyles.cont1}>
                <Text style={featStyles.cont1}> Luxury King </Text>
                <Text> single Room </Text>
              </View>
              <View style={featStyles.cont3}>
                <Text style={featStyles.cont3Text}> N200k </Text>
              </View>
            </View>
          </View>
          <View style={featStyles.mainCard}>
            <View>
              <Image
                source={require("../assets/istockp.jpg")}
                style={featStyles.cardImage}
              />
            </View>
            <View style={featStyles.cont2}>
              <View style={featStyles.cont1}>
                <Text style={featStyles.cont1}> Luxury King </Text>
                <Text> single Room </Text>
              </View>
              <View style={featStyles.cont3}>
                <Text style={featStyles.cont3Text}> N200k </Text>
              </View>
            </View>
          </View>
          <View style={featStyles.mainCard}>
            <View>
              <Image
                source={require("../assets/istockp.jpg")}
                style={featStyles.cardImage}
              />
            </View>
            <View style={featStyles.cont2}>
              <View style={featStyles.cont1}>
                <Text style={featStyles.cont1}> Luxury King </Text>
                <Text> single Room </Text>
              </View>
              <View style={featStyles.cont3}>
                <Text style={featStyles.cont3Text}> N200k </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
