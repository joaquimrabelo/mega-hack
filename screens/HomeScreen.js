import * as WebBrowser from 'expo-web-browser';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { SliderBox } from 'react-native-image-slider-box';

import { MonoText } from '../components/StyledText';
import bgMap from '../assets/images/map.png';

import imageSlider from '../components/HomeSlider';

export default function HomeScreen({navigation}) {

  function handleImagePressed(id) {
    navigation.navigate('ProductScreen', { shop: id });
  }
  return (
    <View style={styles.container}>

      <ImageBackground source={bgMap} style={styles.image}>

        <View style={styles.mainBlock}>

          <Text style={styles.mainTitle}>O que você precisa?</Text>
          
            <View style={styles.searchSection}>
            
              <Input
                style={styles.searchInput}
                placeholder={'Pesquisar...'}
                underlineColorAndroid='transparent'
                inputContainerStyle={{ borderBottomWidth: 0 }}
                leftIcon={
                  <Icon name="search" size={15} color="#7B7B7B" style={styles.iconSearch} />
                }
                rightIcon={
                  <View style={styles.iconBlock}>
                    <Icon name="microphone" size={20} color="#fff" />
                  </View> 
                }
                            
              />

          </View> 
        </View>

        <View style={styles.sliderBox}>
          <SliderBox resizeMode="cover" onCurrentImagePressed={(index) => handleImagePressed(index)} parentWidth={300} images={imageSlider}></SliderBox>
        </View>

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
  },
  contentContainer: {
    paddingTop: 30,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  card: {
    width: 300,
  },
  mainBlock: {
    backgroundColor: '#fff',
    padding: 10,
  
    shadowColor: '#eee',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 0,

  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainTitle: {
    backgroundColor: '#fff',
    padding: 20,
    textAlign: 'center',
    color: '#748A9D',
    fontSize: 16,
    height: 90,
  },

  searchInput: {
    height: 80, 
    backgroundColor: '#fff',
    color: '#868686',
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

  sliderBox: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    borderRadius: 10,
    overflow: 'hidden'
  },


});
