import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {verticalScale, horizontalScale, moderateScale} from '../styles/metrics';
import Home from '../screens/Home';
import Hello from '../screens/Hello';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          display: keyboardVisible ? 'none' : 'flex',
          marginLeft: horizontalScale(30),
          marginRight: horizontalScale(30),
          marginBottom: verticalScale(35),
          borderRadius: moderateScale(20),
          elevation: 10,
          shadowOffset: {height: 5, width: 0},
          shadowRadius: 10,
          shadowOpacity: 0.2,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Icon name="home" size={23} />;
          },
          tabBarIconStyle: {marginTop: verticalScale(10)},
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Icon1 name="heart" size={23} />;
          },
          tabBarIconStyle: {marginTop: verticalScale(10)},
        }}
        name="hello"
        component={Hello}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTab;
