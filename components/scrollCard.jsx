import { TouchableHighlightBase, View, ScrollView, Image, Text } from "react-native";
import {scrollCardStyles }from '../styles/styles'
import { appStyles } from "../styles/styles";


export default function ScrollCard(){


    return (
        <View style={scrollCardStyles.container}>
            <View>
                <Text> Recomendations</Text> 
                <Text>See all</Text>  
            </View> 
        <ScrollView horizontal='true'style={appStyles.container} >
            <View>
                
            </View>
        </ScrollView>   

        </View>
    )
}