import React from 'react'
import {  Text ,ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Flatcards from './Flatcards'
import ElevatedCards from './ElevatedCards';
import Fancycard from './Fancycard';
import Actioncard from './Actioncard';
import Contact from './Contact';

const AppPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Flatcards/>
      <ElevatedCards/>
      <Fancycard></Fancycard>
      <Actioncard></Actioncard>
      <Contact></Contact>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default AppPro