import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, Text } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'localstorage-polyfill';
import AppIntroSlider from 'react-native-app-intro-slider';

import SimpleOnboarding from './components/Onboarding';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

import slides from './components/IntroSlider';

/* import GlobalStyle from './GlobalStyle'; */

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  const [ onboarding, setOnboarding ] = React.useState(() => {
    const showBoarding =  localStorage.getItem('@megaHack.onboarding');
    if (showBoarding) {
      return true;
    }
    return false;
  });

  console.log('state onboarding: ', onboarding);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  const _renderItem = ({ item }) => {
    return (
      <View key={item.key} style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    localStorage.setItem('@megaHack.onboarding', true);
    setOnboarding(true);
  }

  const _keyExtractor = (item) => item.title;

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else if(!onboarding) {
    return (
      //<SimpleOnboarding />     
      <AppIntroSlider keyExtractor={_keyExtractor} renderItem={_renderItem} data={slides} onDone={_onDone}/>
    );
  } else {
    return (
    <>
     {/*  <GlobalStyle /> */}
      <View style={styles.container}>
        
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>

      </>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
