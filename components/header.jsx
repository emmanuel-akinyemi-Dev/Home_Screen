import{Text, View, Image, Touchable, TouchableOpacity} from 'react-native'
import { headerStyles } from '../styles/styles'
import FontAwesome from '@expo/vector-icons/FontAwesome'


export default function Header(){

    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.case}>
            <Text style={headerStyles.topText}>Find and book</Text>
            <Text style={headerStyles.text}>The Best Hotel Rooms</Text>
            </View>
            <TouchableOpacity style={headerStyles.icon}>
            <FontAwesome name='bell' size={35} color='white' />
            </TouchableOpacity>
        </View>
    )
}