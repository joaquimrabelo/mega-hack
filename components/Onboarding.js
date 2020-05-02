import React from 'react';
import { Image, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';

import Onboarding from 'react-native-onboarding-swiper';

const Done = () => (
  <Button
    title={'Done'}
    buttonStyle={{
      backgroundColor: 'red',
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: 'red',
    }}
    textStyle={{ color: '#ccc' }}
    {...props}
  />
);

const SimpleOnboarding = () => (
  <Onboarding
    showNext={false}
    showDone={false}
    showSkip={false}
    bottomBarHighlight={false}
    DoneButtonComponent={Done}
    onDone={() => {
      // navigate to main app experience
    }}

    

    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/images/onboarding1.png')} />,
        title: 'Explicação sobre o app 1',
        subtitle: (
          <Button 
              title={'Pular'}
              containerViewStyle={{ marginTop: 20 }}
              backgroundColor={'white'}
              borderRadius={5}
              textStyle={{ color: '#ccc' }}
              onDone={() => {
                StatusBar.setBarStyle('default');
              }}
            />
          ),
      },

      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/images/onboarding2.png')} />,
        title: 'Explicação sobre o app 2',
        subtitle: (
          <Button
            title={'Começar'}
            containerViewStyle={{ marginTop: 20 }}
            backgroundColor={'white'}
            borderRadius={5}
            textStyle={{ color: '#ccc' }}
            onDone={() => {
              StatusBar.setBarStyle('default');
            }}
          />
        ),
      },
    ]}
  />
);

export default SimpleOnboarding;