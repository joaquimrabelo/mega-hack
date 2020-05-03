import * as WebBrowser from 'expo-web-browser';
/* import { Ionicons } from '@expo/vector-icons'; */
import Icon from 'react-native-vector-icons/FontAwesome';

import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import bgMap from '../assets/images/map.png';

import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
      </ScrollView> */}

      <ImageBackground source={bgMap} style={styles.image}>
        <Text style={styles.mainTitle}>O que você procura?</Text>
        <TextInput 
          style={styles.search}
          placeholder={'Pesquisar...'} />

    
        <Icon name="search" size={20} color="#900" />
        <Icon name="microphone" size={20} color="#900" />
        {/* <Ionicons name="md-search" size={22} color="rgba(0,0,0,0.35)" /> */}
        {/* <Ionicons name="ios-keyboard-voice" size={22} color="rgba(0,0,0,0.35)" /> */}
        
        {/* <Image source={card1} style={styles.card} />  */}
      </ImageBackground>

      
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

/* function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
} */


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  contentContainer: {
    paddingTop: 30,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start"
  },
  card: {
    width: 300
  },
  search: {
    height: 60, 
    backgroundColor: '#fff',
    color: '#868686',
    paddingTop: 10,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 10,
    borderBottomRightRadius:30,
    borderBottomLeftRadius: 30,
    shadowColor: '#eee',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  mainTitle: {
    backgroundColor: '#fff',
    padding: 10,
    textAlign: 'center',
    color: '#748A9D',
    fontSize: 16,
  }
  
});
