import { TouchableOpacity, View, ScrollView, Image, Text } from "react-native";
import { exploreStyles } from "../styles/styles";

export default function Explore() {
  return (
    <View style={exploreStyles.container}>
      <View style={exploreStyles.recomend}>
        <Text style={exploreStyles.recomendText}> Explore Nigeria</Text>
        <Text style={exploreStyles.recomendSee}>
          these area always have a lot of offers
        </Text>
      </View>
      <View style={exploreStyles.cardHolder}>
        <ScrollView horizontal={true}>
          <View style={exploreStyles.mainCard}>
            <View>
              <Image
                source={require("../assets/istockp.jpg")}
                style={exploreStyles.cardImage}
              />
            </View>
            <View style={exploreStyles.cont2}>
              <View style={exploreStyles.cont1}>
                <Text style={exploreStyles.cont1}> Abuja </Text>
                <Text> 224 properties </Text>
              </View>
            </View>
          </View>
          <View style={exploreStyles.mainCard}>
            <View>
              <Image
                source={require("../assets/istockp.jpg")}
                style={exploreStyles.cardImage}
              />
            </View>
            <View style={exploreStyles.cont2}>
              <View style={exploreStyles.cont1}>
                <Text style={exploreStyles.cont1}> Enugu </Text>
                <Text>170 properties </Text>
              </View>
            </View>
          </View>
          <View style={exploreStyles.mainCard}>
            <View>
              <Image
                source={require("../assets/istockp.jpg")}
                style={exploreStyles.cardImage}
              />
            </View>
            <View style={exploreStyles.cont2}>
              <View style={exploreStyles.cont1}>
                <Text style={exploreStyles.cont1}> Lagos</Text>
                <Text> 160 properties </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
