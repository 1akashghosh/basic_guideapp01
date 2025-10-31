import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat cards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardone]}>
            <Text>red</Text>
        </View>
        <View style={[styles.card,styles.cardtwo]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardthree]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
        
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8

    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8,

    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,


    },
    cardone:{
        backgroundColor:'#EF5354',

    },
    cardtwo:{
        backgroundColor:'#4260f5',
    },
    cardthree:{
        backgroundColor:'#42f56c',

    },

})