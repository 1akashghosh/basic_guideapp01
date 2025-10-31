import { StyleSheet, Text, View,Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function Actioncard() {
    function openwebsite(websiteLink:string){
        Linking.openURL(websiteLink)

    }
  return (
    <View>
      <Text style={styles.headingText}>Contact with Us</Text>
      <View style={[styles.card,styles.elevatedCards,]}>
        <View style={styles.headingcontainer}>
        <Text style={styles.headertext}>email-akashghosh1030@gmail.com</Text>
        </View>
    
        <Image 
        source={{
            uri:'https://hastenexpress.com/wp-content/uploads/2025/01/contactus.jpg'
        }} style={styles.cardimage}>

        </Image>
        <View style={styles.bodycontainer}>
            <Text>
            "We're here to help. For inquiries, support, or partnership opportunities, please fill out the form or reach out via one of the methods below."

            </Text>
        </View>
        <View style={styles.footercontasiner}>
            <TouchableOpacity onPress={()=>openwebsite('https://en.wikipedia.org/wiki/Hazarduari_Palace')}>
            
            <Text style={styles.readlink}>Read more</Text>
            
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openwebsite('https://www.facebook.com/profile.php?id=100024479646967')}>
            
            <Text style={styles.readlink}>follow me</Text>
            
            </TouchableOpacity>
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
      width:330,
      height:270,
      borderRadius:6,
      marginVertical:12,
      marginHorizontal:16
    },
    elevatedCards:{
      backgroundColor:'#e6b581',
      elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }

    },
    headingcontainer:{
      height:40,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    headertext:{
      fontSize:16,
      fontWeight:'600'
      
    },
    cardimage:{
        height:100,
    },
    bodycontainer:{
      padding:10,
      
    },
    footercontasiner:{
      padding:8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly'
    },
    readlink:{
      fontSize:16,
      color:'#1f4dc2',
      backgroundColor:'#f7f8fa',
      paddingHorizontal:20,
      paddingVertical:6,
      borderRadius:15,
     
    },
})