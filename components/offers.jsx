import {
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { offerStyles } from "../styles/styles";

export default function Offers() {
  return (
    <View style={offerStyles.container}>
      <View style={offerStyles.recomend}>
        <Text style={offerStyles.recomendText}> Offers</Text>
        <Text style={offerStyles.recomendSee}>
          Promotions, deals and special offers for you
        </Text>
      </View>
      <View style={offerStyles.cardHolder}>
        <ScrollView horizontal={true}>
          <View style={offerStyles.mainCard}>
            <View>
              <Image
                source={require("../assets/istockp.jpg")}
                style={offerStyles.cardImage}
              />
            </View>
            <View style={offerStyles.cont2}>
              <View style={offerStyles.cont1}>
                <Text style={offerStyles.cont1}> Looking to get away? </Text>
                <Text> save 15% or more on stays </Text>
              </View>
              <TouchableOpacity style={offerStyles.btn}>
                <Text style={offerStyles.btnText}>Find Gateway Deals</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={offerStyles.mainCard}>
            <View>
              <Image
                source={require("../assets/istockp.jpg")}
                style={offerStyles.cardImage}
              />
            </View>
            <View style={offerStyles.cont2}>
              <View style={offerStyles.cont1}>
                <Text style={offerStyles.cont1}> Looking to get away? </Text>
                <Text> save 15% or more on stays </Text>
              </View>
              <TouchableOpacity style={offerStyles.btn}>
                <Text style={offerStyles.btnText}>Find Gateway Deals</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={offerStyles.mainCard}>
            <View>
              <Image
                source={require("../assets/istockp.jpg")}
                style={offerStyles.cardImage}
              />
            </View>
            <View style={offerStyles.cont2}>
              <View style={offerStyles.cont1}>
                <Text style={offerStyles.cont1}> Looking to get away? </Text>
                <Text> save 15% or more on stays </Text>
              </View>
              <TouchableOpacity style={offerStyles.btn}>
                <Text style={offerStyles.btnText}>Find Gateway Deals</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
