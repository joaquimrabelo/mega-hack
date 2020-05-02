import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
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
        <Image source={card1} style={styles.card} />
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
    justifyContent: "center"
  },
  card: {
    width: 300
  }
  
});
