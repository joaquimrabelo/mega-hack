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

      <ImageBackground source={bgMap} style={styles.image}>

        <View>
          <Text style={styles.mainTitle}>O que você precisa?</Text>
          <View style={styles.searchSection}>

            <Icon name="search" size={20} color="#7B7B7B" style={styles.iconSearch} />
            

            <TextInput
              style={styles.search}
              placeholder={'Pesquisar...'}
              underlineColorAndroid="transparent"
                           
            />

            <View style={styles.iconBlock}>
              <Icon name="microphone" size={20} color="#fff" />
            </View> 
           

          </View>
        </View>

        

        
        {/* <Ionicons name="md-search" size={22} color="rgba(0,0,0,0.35)" /> */}
        {/* <Ionicons name="ios-keyboard-voice" size={22} color="rgba(0,0,0,0.35)" /> */}
        
        {/* <Image source={card1} style={styles.card} />  */}

      </ImageBackground>

      
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: { visible: false }
};

/* function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
} */


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
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
    width: 300,
  },


  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: 600,
    width: '100%',
    backgroundColor: 'red',

 
  },

  mainTitle: {
    backgroundColor: '#fff',
    padding: 20,
    textAlign: 'center',
    color: '#748A9D',
    fontSize: 16,

    height: 90,
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
    borderWidth: 0,
    shadowColor: '#eee',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10, 
    flex: 1,
  },

  iconBlock: {
    backgroundColor: '#7BED8D',
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center', 
   

  },


});
