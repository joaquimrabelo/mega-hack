import React from 'react';
import { Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const SimpleOnboarding = () => (
  <Onboarding
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/images/onboarding1.png')} />,
        title: 'Pagina 1',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/images/onboarding2.png')} />,
        title: 'Pagina 2',
        subtitle: 'This is the subtitle that sumplements the title.',
      },
    ]}
  />
);

export default SimpleOnboarding;