import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'


export default function Fancycard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <Image 
        source={{
                uri:'https://lh3.googleusercontent.com/l2lOwjwEyhaThvJv-ubyqDD6whyL0PO5UfEM7oAbOPLd9TibP-kzVNbmZblBJMhv5Ly1V7IJCkk5cKaFZO8zg_3nXU30kDQheg=w3840-h2160-c-rw-v3'
            }}
            style={styles.cardImage}></Image>
            <View style={styles.cardbody}>
                <Text style={styles.cardtitle}>Hazarduari</Text>
                <Text style={styles.cardlabel}>Nawab palace,Murshidabad</Text>
                <Text style={styles.cardDrescription}>Hazarduari Palace is a three-storied palatial building, set on a 17-hectare (41-acre) site, built in the Neoclassical Italianate style</Text>
                <Text style={styles.cardfooter}>12 mins away</Text>
                



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
    card:{
        width:332,
        height:340,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated :{
        backgroundColor:'#141414',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }

    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardbody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardtitle:{
        color:'#e6e8e7',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6

    },
    cardlabel:{
        color:'#e6e8e7',
        fontSize:14,
        marginBottom:6

    },
    cardDrescription:{
        color:'#758283',
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardfooter:{
        color:'#e6e8e7',
    }

})