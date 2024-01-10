import { TouchableOpacity, View, ScrollView, Image, Text } from "react-native";
import {scrollCardStyles }from '../styles/styles'


export default function ScrollCard(){


    return (
        <View style={scrollCardStyles.container}>
            <View style={scrollCardStyles.recomend}>
                <Text style={scrollCardStyles.recomendText} > Recomendations</Text> 
                <Text style={scrollCardStyles.recomendSee}>See all</Text> 
            </View> 
            <View style={scrollCardStyles.cardHolder}>
                <ScrollView horizontal={true}>
                    <View style={scrollCardStyles.mainCard}>
                <View >
                       <Image source={require('../assets/istockp.jpg')} style={scrollCardStyles.cardImage} />
                 </View>
             <View style={scrollCardStyles.cont2}>

                            <View style={scrollCardStyles.cont1}>
                                <Text style={scrollCardStyles.cont1}> Luxury King </Text>
                                <Text> single Room </Text>
                            </View>

                            <View style={scrollCardStyles.rating}>
                                <Image source={require('../assets/istockp.jpg')} style={scrollCardStyles.ratingImg} />
                                <Text> 4.3</Text>
                            </View>
         
                            </View>

         <View style={scrollCardStyles.cont3}> 
                    <Text style={scrollCardStyles.cont3Text} > N200k </Text>
                    </View>
                  
                    </View>
                    <View style={scrollCardStyles.mainCard}>
                <View >
                       <Image source={require('../assets/istockp.jpg')} style={scrollCardStyles.cardImage} />
                 </View>
             <View style={scrollCardStyles.cont2}>

                            <View style={scrollCardStyles.cont1}>
                                <Text style={scrollCardStyles.cont1}> Luxury King </Text>
                                <Text> single Room </Text>
                            </View>

                            <View style={scrollCardStyles.rating}>
                                <Image source={require('../assets/istockp.jpg')} style={scrollCardStyles.ratingImg} />
                                <Text> 4.3</Text>
                            </View>
         
                            </View>

         <View style={scrollCardStyles.cont3}> 
                    <Text style={scrollCardStyles.cont3Text} > N200k </Text>
                    </View>
                  
                    </View>
                    <View style={scrollCardStyles.mainCard}>
                <View >
                       <Image source={require('../assets/istockp.jpg')} style={scrollCardStyles.cardImage} />
                 </View>
             <View style={scrollCardStyles.cont2}>

                            <View style={scrollCardStyles.cont1}>
                                <Text style={scrollCardStyles.cont1}> Luxury King </Text>
                                <Text> single Room </Text>
                            </View>

                            <View style={scrollCardStyles.rating}>
                                <Image source={require('../assets/istockp.jpg')} style={scrollCardStyles.ratingImg} />
                                <Text> 4.3</Text>
                            </View>
         
                            </View>

         <View style={scrollCardStyles.cont3}> 
                    <Text style={scrollCardStyles.cont3Text} > N200k </Text>
                    </View>
                  
                    </View>


                </ScrollView> 
            </View>  
            
            

        </View>
    )
}