import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from 'screens';
import screenNames from 'utils/screenName';
import React from 'react';
const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenNames.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};
