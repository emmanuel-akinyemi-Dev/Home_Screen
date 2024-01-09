import{Text, View, Image, TouchableWithoutFeedback, Keyboard} from 'react-native'
import Header from '../components/header'
import { homeStyles } from '../styles/styles'
import Card1 from '../components/card1'
import ScrollCard from '../components/scrollCard'


export default function Home(){

    return (
       <TouchableWithoutFeedback on onPress={()=> Keyboard.dismiss()}>
        <View style={homeStyles.container}>
            <Image source={require('../assets/waterfall.jpg')} alt='image'  style={homeStyles.bgImage}/>
            <Header />
            <Card1 />
            <ScrollCard />
        </View>
        </TouchableWithoutFeedback>
    )
}