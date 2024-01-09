import{StyleSheet} from 'react-native'



export const headerStyles = StyleSheet.create({
    container:{
        width:340,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 10,
    },
 text:{
    fontSize:24,
    marginTop:2,
    color:'white'
 },
 case:{
    marginTop:38,
    
 },
 topText:{
    fontSize:18,
    marginLeft:2,
    color:'white'
    
 },
 icon:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#B6B6B6',
    width:50,
    height:50,
    marginRight:8,
    borderRadius:10,
    shadowRadius:20,
    opacity:0.7,
    marginTop:38,
 },
 image:{
   padding:4,
 },

})
export const appStyles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#DFDFDF',
      },

    

})
export const homeStyles = StyleSheet.create({
    container:{
            justifyContent:'center',
            alignItems:'center',
    },

    bgImage:{
        position: 'absolute',
        top:0,
        left:0,
        height:300,
        opacity:1,
    }
    
})
export const cardStyles = StyleSheet.create({

    container:{
        width:300,
        height:500,
        backgroundColor:"#DFDFDF",
        marginTop:100,
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:10,
        padding:30,
    },
    
    navtouchRight:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center', 
        width:80,
        height:50,
        marginRight:0
    },

    navtouchLeft:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center', 
        width:80,
        height:50,
        marginLeft:0,
    },

    navTouchCenter:{
        justifyContent:'center', 
        alignItems:'center',
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor:'grey',
        width:80,
        height:60,

    },
    textInputCenter:{ 
        justifyContent:'center', 
        alignItems:'center', 
        marginLeft:0,
        fontSize: 17,
        fontWeight:'bold',
        color:'#4A4949',
        width:30, 

    },
    textInputLeft:{
        justifyContent:'center', 
        alignItems:'center', 
        marginLeft:0,
        fontSize: 17,
        fontWeight:'bold',
        color:'#4A4949',
        width:30,  

    },
    textInputRight:{
        justifyContent:'center', 
        alignItems:'center',
        marginRight:0, 
        fontSize: 17,
        fontWeight:'bold',
        color:'#4A4949',
        width:30,  
    },
    btnText:{
        color:'white',
        fontSize:20,
    },
    btn:{
        justifyContent :'center',
        alignItems:'center',
        width:250,
        backgroundColor:'#053E80',
        height:50,
        borderRadius:10,
    },
    searchBox:{
        width:250,
        height:50,
        borderWidth:1, 
        marginLeft:0,
        borderRadius:50,
        paddingLeft:25,
        fontSize:20
        
    },
    nav:{
        flexDirection:'row',
        justifyContent:'center',  
        alignItems:'center',
        backgroundColor:'#C4C4C4',
        width:250,
        height:60,
        borderRadius:25,
    },
    innerTextContainer:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center',
   
    },
    innerExt2:{
        width:125,
        height:60,
    },
    innerExt:{
        borderLeftWidth:1,
        borderColor:'grey'
    },
    innerExt3:{
        width:80
    },
    text:{
        fontSize:15,
        color:'#4A4949' 
    },
    textBaseLeft:{
        justifyContent:'center', 
        alignItems:'center', 
        marginLeft:0,
        fontSize: 17,
        fontWeight:'bold',
        color:'#4A4949' 
    },
    textBaseRight:{
        justifyContent:'center', 
        alignItems:'center',
        marginRight:0, 
        fontSize: 17,
        fontWeight:'bold',
        color:'#4A4949' 
    },

})
export const scrollCardStyles = StyleSheet.create({
    container:{
            justifyContent:'center',
            alignItems:'center',
    },

    Image:{ 
        top:0,
        left:0,
        height:300,
        opacity:1,
    }
    
})