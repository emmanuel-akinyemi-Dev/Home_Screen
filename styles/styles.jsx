import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  container: {
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    marginTop: 2,
    color: "white",
  },
  case: {
    marginTop: 38,
  },
  topText: {
    fontSize: 18,
    marginLeft: 2,
    color: "white",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B6B6B6",
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 10,
    shadowRadius: 20,
    opacity: 0.7,
    marginTop: 38,
  },
  image: {
    padding: 4,
  },
});
export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFDFDF",
  },
});
export const homeStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 300,
    opacity: 1,
  },
});
export const cardStyles = StyleSheet.create({
  container: {
    width: 300,
    height: 500,
    backgroundColor: "#DFDFDF",
    marginTop: 100,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    padding: 30,
  },

  navtouchRight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 50,
    marginRight: 0,
  },

  navtouchLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 50,
    marginLeft: 0,
  },

  navTouchCenter: {
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "grey",
    width: 80,
    height: 60,
  },
  textInputCenter: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
    fontSize: 17,
    fontWeight: "bold",
    color: "#4A4949",
    width: 30,
  },
  textInputLeft: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
    fontSize: 17,
    fontWeight: "bold",
    color: "#4A4949",
    width: 30,
  },
  textInputRight: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 0,
    fontSize: 17,
    fontWeight: "bold",
    color: "#4A4949",
    width: 30,
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    backgroundColor: "#053E80",
    height: 50,
    borderRadius: 10,
  },
  searchBox: {
    width: 250,
    height: 50,
    marginLeft: 0,
    borderRadius: 50,
    paddingLeft: 25,
    fontSize: 20,
    backgroundColor: "#C4C4C4",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    width: 250,
    height: 60,
    borderRadius: 25,
  },
  innerTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerExt2: {
    width: 125,
    height: 60,
  },
  innerExt: {
    borderLeftWidth: 1,
    borderColor: "grey",
  },
  innerExt3: {
    width: 80,
  },
  text: {
    fontSize: 15,
    color: "#4A4949",
  },
  textBaseLeft: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
    fontSize: 17,
    fontWeight: "bold",
    color: "#4A4949",
  },
  textBaseRight: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 0,
    fontSize: 17,
    fontWeight: "bold",
    color: "#4A4949",
  },
});
export const scrollCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  Image: {
    top: 0,
    left: 0,
    height: 300,
    opacity: 1,
  },
  scroller: {
    width: 400,
    height: 100,
  },
  mainCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    width: 280,
    height: 130,
    backgroundColor: "#DCDCDC",
    margin: 10,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
  },
  scrolcontainer: {
    flex: 1,
  },
  recomend: {
    flexDirection: "row",
    width: 350,
    justifyContent: "space-between",
    margin: 10,
    shadowColor: "#767676",
    shadowOpacity: 1,
    shadowOffset: 1,
    shadowRadius: 12,
  },
  recomendText: {
    fontSize: 24,
  },
  Touchable: {
    fontSize: 30,
  },
  recomendSee: {
    fontSize: 20,
    color: "gray",
  },
  cardHolder: {
    flex: 1,
    padding: 10,
  },
  cardImage: {
    width: 120,
    height: 110,
    borderRadius: 20,
    margin: 10,
  },

  ratingImg: {
    width: 15,
    height: 15,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cont1: {
    width: 120,
    fontSize: 20,
    marginTop: 7,
    fontWeight: "bold",
  },
  cont2: {
    flex: 1,
    justifyContent: "space-between",
  },
  cont3: {
    justifyContent: "flex-end",
    margin: 10,
  },
  cont3Text: {
    fontSize: 20,
    color: "#444444",
    fontWeight:'bold'
  },
  rating: {
    flexDirection: "row",
    width: 40,
    justifyContent: "space-between",
    marginBottom: 11,
  },
});

export const featStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  Image: {
    top: 0,
    left: 0,
    height: 300,
    opacity: 1,
  },
  scroller: {
    width: 400,
    height: 100,
  },
  mainCard: {
    flex: 1,
    justifyContent: "space-between",
    gap: 5,
    width: 280,
    height: 320,
    backgroundColor: "#DCDCDC",
    margin: 10,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
  },
  scrolcontainer: {
    flex: 1,
  },
  recomend: {
    flexDirection: "row",
    width: 350,
    justifyContent: "space-between",
    margin: 10,
    shadowColor: "#767676",
    shadowOpacity: 1,
    shadowOffset: 1,
    shadowRadius: 12,
  },
  Touchable: {
    fontSize: 30,
  },
  recomendText: {
    fontSize: 24,
  },
  recomendSee: {
    fontSize: 20,
    color: "gray",
  },
  cardHolder: {
    flex: 1,
    padding: 10,
  },
  cardImage: {
    width: 260,
    height: 200,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 0,
  },

  ratingImg: {
    width: 15,
    height: 15,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cont1: {
    width: 120,
    fontSize: 20,
    marginTop: 7,
    fontWeight: "bold",
  },
  cont2: {
    flex: 1,
    marginLeft:10,
    marginTop:0,
  },
  cont3: {
  },
  cont3Text: {
    fontSize: 20,
    color: "#444444",
    fontWeight:'bold'
  },
  rating: {
    flexDirection: "row",
    width: 40,
    justifyContent: "space-between",
    marginBottom: 11,
  },
});
export const offerStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  
    Image: {
      top: 0,
      left: 0,
      height: 300,
      opacity: 1,
    },
    scroller: {
      width: 400,
      height: 100,
    },
    mainCard: {
      flexDirection: "row",
      justifyContent: "space-between", 
      width: 335,
      height: 130,
      backgroundColor: "#DCDCDC",
      margin: 10,
      borderRadius: 30,
      elevation: 5,
      shadowColor: "#000",
    },
    scrolcontainer: {
      flex: 1,
    },
    recomend: {
      width: 350,
      justifyContent: "space-between",
      margin: 10,
      shadowColor: "#767676",
      shadowOpacity: 1,
      shadowOffset: 1,
      shadowRadius: 12,
    },
    recomendText: {
      fontSize: 24,
    },
    Touchable: {
      fontSize: 30,
    },
    recomendSee: {
      fontSize: 16,
      marginLeft:8,
      color: "gray",
    },
    cardHolder: {
      flex: 1,
      padding: 10,
    },
    cardImage: {
      width: 120,
      height: 110,
      borderRadius: 20,
      margin: 10,
    },
  
    ratingImg: {
      width: 15,
      height: 15,
    },
    details: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    cont1: {
        flex:1,
      fontSize: 20,
      marginTop: 7,
      fontWeight: "bold",
    },
    cont2: {
      flex: 1,
      width :200,
    },
    cont3: {
      justifyContent: "flex-end",
      margin: 10,
    },
    cont3Text: {
      fontSize: 20,
      color: "#444444",
      fontWeight:'bold'
    },
    rating: {
      flexDirection: "row",
      width: 40,
      justifyContent: "space-between",
      marginBottom: 11,
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#053E80",
        width:170,
        height: 40,
        borderRadius: 20,
        marginTop:20,
        marginBottom:10,
      },
      btnText: {
        color: "white",
        fontSize: 17,
      },
  });