import React from 'react';
import { Image, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';

import Onboarding from 'react-native-onboarding-swiper';


const StyledButton = styled(Button)` 
  background-color: brown;
  color: #ccc;
  text-transform: uppercase;
`;

const SimpleOnboarding = () => (
  <Onboarding
    showNext={false}
    showDone={false}
    showSkip={false}
    bottomBarHighlight={false}
    onDone={() => {
      console.log('carregou')
    }}

    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/images/onboarding1.png')} />,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        subtitle: (
          <Button 
              title={'Pular'}
              containerViewStyle={{ marginTop: 0 }}
              backgroundColor={'red'}
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
        title: 'Donec eget arcu elementum. Nulla facilisi.',
        subtitle: (
          <StyledButton
            title={'Começar'}          
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