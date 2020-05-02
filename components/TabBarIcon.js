import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Image } from 'react-native';

import Colors from '../constants/Colors';

export default function TabBarIcon({icon}) {
  return (
    <Image source={icon}
    />
  );
}
