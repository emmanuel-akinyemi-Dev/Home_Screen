import{Button, Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native'
import {cardStyles} from '../styles/styles'
import FontAwesome from '@expo/vector-icons/FontAwesome'


export default function Card1(){

    return (
        <View style={cardStyles.container}>
            <View style={cardStyles.nav}>
             <TouchableOpacity style={cardStyles.navtouchLeft}>
                <Text style={cardStyles.text}>Hotel</Text>
                <FontAwesome name='institution' size={20} color='#2C2C2C' />
                </TouchableOpacity>
             <TouchableOpacity style={cardStyles.navTouchCenter}>
                <Text style={cardStyles.text}>Car</Text>
                <FontAwesome name='car' size={20} color='#2C2C2C' />
                </TouchableOpacity>
             <TouchableOpacity style={cardStyles.navtouchRight}>
                <Text style={cardStyles.text}>Homes</Text>
                <FontAwesome name='home' size={25} color='#2C2C2C' />
                </TouchableOpacity>
            </View>
           
            <TextInput style={cardStyles.searchBox} placeholder='Search Location' cursorColor='black' />
            
            <View style={cardStyles.nav}>
                <View style={[cardStyles.innerTextContainer,cardStyles.innerExt2]}>
                <Text style={cardStyles.text}>Checkin Date</Text> 
                <TextInput style={cardStyles.textBaseLeft} textAlign='center' placeholder='02 sept 2023' cursorColor='black' />
                </View>
            <View style={[cardStyles.innerTextContainer, cardStyles.innerExt,cardStyles.innerExt2]}>
            <Text style={cardStyles.text}>CheckOut Date</Text>
            <TextInput  style={cardStyles.textBaseRight} textAlign='center' placeholder='06 sept 2023' cursorColor='black' />
            </View>
            
            </View>

            <View style={cardStyles.nav}>
                <View style={[cardStyles.innerTextContainer,cardStyles.innerExt3]}>
                <Text style={cardStyles.text}>Adult</Text>
                <TextInput style={cardStyles.textInputLeft} placeholder='2' cursorColor='grey' inputMode='decimal' />
                </View>

                <View style={cardStyles.innerTextContainer}>
                <Text style={cardStyles.text}>Children</Text>
                <TextInput style={cardStyles.textInputCenter} placeholder='0' cursorColor='grey'inputMode='decimal' />
                </View>

                <View style={[cardStyles.innerTextContainer,cardStyles.innerExt3]}>
                <Text style={cardStyles.text}>Rooms</Text>
                <TextInput style={cardStyles.textInputRight} placeholder='2' cursorColor='grey' inputMode='decimal'/>
                </View>
                
            </View>
            
            <TouchableOpacity style={cardStyles.btn}>
                <Text style={cardStyles.btnText}>Search</Text>
            </TouchableOpacity>
             
        </View>
    )
}