import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'

export default function Contact() {
  const contacts=[
    {
      uid:1,
      name:'Biswamber biswas',
      status:'Historical guide',
      imageurl:'https://media.licdn.com/dms/image/v2/D5635AQEirw98ILAdgQ/profile-framedphoto-shrink_400_400/B56ZlsGeJ4HUAc-/0/1758455260114?e=1762243200&v=beta&t=k2oSxDkGKNLrLH5QS2qkp2qArTj4emQPFbGgHNL5GpA'
    },
    {
      uid:2,
      name:'Anit biswas',
      status:'Historical guide',
      imageurl:'https://media.licdn.com/dms/image/v2/D5603AQFlweiVg81c6w/profile-displayphoto-scale_400_400/B56ZjHdGr5HUAg-/0/1755692954205?e=1763596800&v=beta&t=AFM5Rmhr6-M_Vgpvd1O1Kk2xqBFPXr1ZqT5mXYAVx8c'
    },
    {
      uid:3,
      name:'sanchita malakar',
      status:'Historical guide',
      imageurl:'https://media.licdn.com/dms/image/v2/D4E03AQEJtJPqYUDW4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723532141364?e=1763596800&v=beta&t=JpNIrRfDA_8T31CSOuudUjF1I27EKSlergC6TcsjJiY'
    },
    {
      uid:4,
      name:'utkarsh chakraborty',
      status:'Historical guide',
      imageurl:'https://media.licdn.com/dms/image/v2/D4E03AQEVMcDPR0PPvQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723124603484?e=1763596800&v=beta&t=4DfQK4jhYyRvTUvkAZVoXsnwdLe8Y56V73X_cUdCLxQ'
    },
    {
      uid:5,
      name:'Akash ghosh',
      status:'Historical guide',
      imageurl:'https://media.licdn.com/dms/image/v2/D4D03AQGjOC4H1QM9IQ/profile-displayphoto-crop_800_800/B4DZiddytPH8AU-/0/1754988490220?e=1763596800&v=beta&t=l7Vva9tdc5tnMHOlskcLsoLskIn3D_4aVcoRQf45Xc0'
    },
  ]
  return (
    <View>
      <Text style={styles.headingText}>Contact Lists</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      
      >
        {contacts.map(({uid,name,status,imageurl})=>(
          <View key={uid}style={styles.usercard}>
            <Image
            source={{
              uri:imageurl
            }}
            style={styles.userimage}
            
            />
            <View>
            <Text style={styles.usersName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    paddingHorizontal:16,
    marginBottom:4
  },
  usercard:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:4,
    backgroundColor:'#a232a8',
    padding:4,
    borderRadius:18
  },
  userimage:{
    width:60,
    height:60,
    borderRadius:60/2,
    marginRight:14
  },
  usersName:{
    fontSize:16,
    fontWeight:'600',
     color:'#f4ebf5'
  },
  userStatus:{
    fontSize:12,
    color:'#f4ebf5'
  }


})