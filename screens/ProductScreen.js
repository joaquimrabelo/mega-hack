import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import { MonoText } from '../components/StyledText';

export default function ProductScreen({navigation}) {
  
  function handleBackToHome() {
    navigation.navigate('HomeScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.navTop}>
        <TouchableOpacity onPress={handleBackToHome} style={styles.backButton}>
          <Icon name="arrow-left" size={16} color="#000" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Supermercado</Text>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
      <Text>Product</Text>
      </ScrollView>

    </View>
  );
}

ProductScreen.navigationOptions = {
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
  navTop: {
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    paddingLeft: 10,
  },
  navTitle: {
    paddingLeft: 20,
    color: '#000',
    fontSize: 18
  }
  
});
