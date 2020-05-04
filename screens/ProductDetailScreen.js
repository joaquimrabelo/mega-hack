import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import { MonoText } from '../components/StyledText';

export default function ProductDetailScreen({navigation}) {

  function handleBackToShop() {
    navigation.navigate('ProductScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.navTop}>
        <TouchableOpacity onPress={handleBackToShop} style={styles.backButton}>
          <Icon name="arrow-left" size={14} color="#748A9D" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Tomate</Text>
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <Image source={require('../assets/images/products/tomate1.png')} />

        <View style={styles.selectQuant}>

          <View style={styles.selectProduct}>
            <Text style={styles.selectQuantInfo}>
              Tomate
            </Text>
            <Icon name="angle-up" size={14} color="#748A9D" />

          </View>
         

          <View style={styles.selectIcons}>
            <Icon name="angle-up" size={14} color="#748A9D" />
            <Icon name="angle-up" size={14} color="#748A9D" />
            <Icon name="angle-up" size={14} color="#748A9D" />
          </View>

          <View style={styles.selectControls}>

            <Text style={styles.selectQuantInfo}>
              2
            </Text>
            <Text style={styles.selectQuantInfo}>
              unidade
            </Text>
            <Text style={styles.selectQuantInfo}>
              R$ 0,99
            </Text>
          </View>

          <View style={styles.selectIcons}>
            <Icon name="angle-down" size={14} color="#748A9D" />
            <Icon name="angle-down" size={14} color="#748A9D" />
            <Icon name="angle-down" size={14} color="#748A9D" />
          </View>

        </View>

        <TouchableOpacity style={styles.submitButton}>
          <View>
         {/*  <Icon name="arrow-right" size={14} color="#fff" /> */}

          <Text style={styles.buttonText}>Selecionar</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}

ProductDetailScreen.navigationOptions = {
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
    paddingRight: 15,
    paddingLeft: 15,
  },
  navTop: {
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center'
  },
  backButton: {
    paddingLeft: 10,
  },
  navTitle: {
    paddingLeft: 20,
    color: '#748A9D',
    fontSize: 18,
    textAlign: 'center'
  },
  submitButton: {
    backgroundColor: '#7BED8D',
    color: '#fff',
    height: 60,
    borderRadius: 40,
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  selectQuant: {
    backgroundColor: '#F0F4F8',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20

  },
  selectQuantInfo: {
    color: '#748A9D',
    paddingTop: 10,
  },
  selectProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  },
  selectControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  selectIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
   
  }

  
});
