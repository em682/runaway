import React, {useState} from "react";
import Navigation from "./navigation/index";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  StatusBar,
  Platform
} from "react-native";
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

async function getFonts(){
  await Font.loadAsync({
    "Lato": require('./assets/fonts/Lato-Regular.ttf'),
    "Raleway": require('./assets/fonts/Raleway-Medium.ttf'),
    "Raleway-Bold": require('./assets/fonts/Raleway-Bold.ttf'),
    "Avenir": require('./assets/fonts/Avenir-Book.otf')
  })
}

export default function App() {
  const [fontLoaded,setFontLoaded] =useState(false)

  if (fontLoaded){
    return (
      <SafeAreaProvider>
        {(Platform.OS === 'ios')  ? <StatusBar  barStyle="dark-content" translucent={true} />:null}
        <Navigation/>
      </SafeAreaProvider>
    )
  }
  else {
return(<AppLoading startAsync = {getFonts} onFinish={()=> setFontLoaded(true)}/>)
  }
  
}