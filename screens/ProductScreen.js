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
          <Icon name="arrow-left" size={16} color="#748A9D" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Supermercado</Text>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.categoryTitle}>Sugestões para você</Text>
        <ScrollView horizontal="true" style={styles.rowProduct} contentContainerStyle={styles.rowProductScroll}>
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe1.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>
          
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
                source={require('../assets/images/products/redbull.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

        </ScrollView>

        <Text style={styles.categoryTitle}>Mercearia</Text>
        <ScrollView horizontal="true" style={styles.rowProduct} contentContainerStyle={styles.rowProductScroll}>
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/manteiga.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>
          
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/pizza.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/toddy.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

        </ScrollView>

        <Text style={styles.categoryTitle}>Hortifruti</Text>
        <ScrollView horizontal="true" style={styles.rowProduct} contentContainerStyle={styles.rowProductScroll}>
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/alface.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>
          
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/maca.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/tomate.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

        </ScrollView>

        <Text style={styles.categoryTitle}>Açougue</Text>
        <ScrollView horizontal="true" style={styles.rowProduct} contentContainerStyle={styles.rowProductScroll}>
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>
          
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

        </ScrollView>

        <Text style={styles.categoryTitle}>Bebidas</Text>
        <ScrollView horizontal="true" style={styles.rowProduct} contentContainerStyle={styles.rowProductScroll}>
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/skollbeats.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>
          
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/fanta.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

        </ScrollView>

        <Text style={styles.categoryTitle}>Limpeza</Text>
        <ScrollView horizontal="true" style={styles.rowProduct} contentContainerStyle={styles.rowProductScroll}>
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>
          
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

        </ScrollView>

        <Text style={styles.categoryTitle}>Higiene e Beleza</Text>
        <ScrollView horizontal="true" style={styles.rowProduct} contentContainerStyle={styles.rowProductScroll}>
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>
          
          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

          <View style={styles.product}>
            <View style={styles.productTop}>
              <Text style={styles.productTopUn}>1UN</Text>
              <Icon name="heart-o" size={16} color="#D8DAE0" />
            </View>
            <View style={styles.productImageView}>
              <Image style={styles.productImage} 
              source={require('../assets/images/products/cafe.png')}
              resizeMethod="scale"
              ></Image>
            </View>
            <Text style={styles.productName}>Nescafé Classic</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
          </View>

        </ScrollView>

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
    paddingLeft: 20,
    paddingRight: 20,
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
    color: '#748A9D',
    fontSize: 18
  },
  categoryTitle: {
    color: '#272a3f',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
  },
  rowProduct: {
    height: 144,
  },
  rowProductScroll: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  product: {
    backgroundColor: '#f0f4f8',
    width: 104,
    height: 144,
    marginRight: 10,
    borderRadius: 5,
  },
  productTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
  },
  productTopUn: {
    backgroundColor: '#d8dae0',
    borderRadius: 2,
    padding: 3,
    fontSize: 8,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  productImageView: {
    height: 80,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    height: 80,
    resizeMode: 'contain',
    
  },
  productName: {
    paddingLeft: 5,
    color: '#6e7989',
    fontSize: 10,
  },
  productPrice: {
    paddingLeft: 5,
    color: '#272a3f',
    fontSize: 10,
    fontWeight: 'bold',
  }
  
});
