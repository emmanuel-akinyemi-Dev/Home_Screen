import{Text, View, Image} from 'react-native'
import Header from '../components/header'
import { homeStyles } from '../styles/styles'
import Card1 from '../components/card1'


export default function Home(){

    return (
        <View style={homeStyles.container}>
            <Image source={require('../assets/waterfall.jpg')} alt='image'  style={homeStyles.bgImage}/>
            <Header />
            <Card1 />
        </View>
    )
}