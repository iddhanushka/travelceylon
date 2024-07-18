import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// components
import Historical from '../components/Historical';
import Wild from '../components/Wild';
import Beach from '../components/Beach';
import Mountant from '../components/Mountant';
import Other from '../components/Other';

const Tab = createMaterialTopTabNavigator();

export default function Destinations() {
  return (
    <Tab.Navigator initialRouteName="Historical">
      <Tab.Screen name="Historical" component={Historical} />
      <Tab.Screen name="Wild" component={Wild} />
      <Tab.Screen name="Beach" component={Beach} />
      <Tab.Screen name="Mountant" component={Mountant} />
      <Tab.Screen name="Other" component={Other} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
