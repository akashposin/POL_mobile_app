import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {theme} from '../constants';

import Home from '../screens/customer/Home';
import Bookings from '../screens/customer/Bookings';
import Help from '../screens/customer/Help';
import {Container} from '../components';
import {moderateScale} from 'react-native-size-matters';
import ServiceProviderListOfReviews from '../screens/customer/ServiceProviderListOfReviews';
import EditProfile from '../screens/customer/EditProfile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: theme.Colors.orange,
        inactiveTintColor: theme.Colors.gray,
        labelStyle: {
          ...theme.Fonts.fontRegular,
          fontSize: theme.Sizes.F11,
          paddingVertical: theme.Sizes.S10 / 2,
          marginTop: -theme.Sizes.S14,
        },
        style: {
          height: theme.Sizes.height / 12,
          borderTopRightRadius: theme.Sizes.radius / 1.5,
          borderTopLeftRadius: theme.Sizes.radius / 1.5,
          paddingHorizontal: theme.Sizes.S14,
          backgroundColor: theme.Colors.white,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Container
                flex={false}
                style={{
                  width: theme.Sizes.S14 * 2,
                }}>
                <MaterialCommunityIcons
                  name="home"
                  color={theme.Colors.orange}
                  size={moderateScale(30)}
                />
              </Container>
            ) : (
              <Container
                flex={false}
                style={{
                  width: theme.Sizes.S14 * 2,
                }}>
                <MaterialCommunityIcons
                  name="home"
                  color={theme.Colors.gray}
                  size={moderateScale(30)}
                />
              </Container>
            ),
        }}
      />

      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Container
                flex={false}
                style={{
                  width: theme.Sizes.S14 * 2,
                }}>
                <Entypo
                  name="location-pin"
                  color={theme.Colors.orange}
                  size={moderateScale(30)}
                />
              </Container>
            ) : (
              <Container
                flex={false}
                style={{
                  width: theme.Sizes.S14 * 2,
                }}>
                <Entypo
                  name="location-pin"
                  color={theme.Colors.gray}
                  size={moderateScale(30)}
                />
              </Container>
            ),
        }}
      />

      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Container
                flex={false}
                style={{
                  width: theme.Sizes.S14 * 2.3,
                }}>
                <Entypo
                  name="help-with-circle"
                  color={theme.Colors.orange}
                  size={moderateScale(30)}
                />
              </Container>
            ) : (
              <Container
                flex={false}
                style={{
                  width: theme.Sizes.S14 * 2.3,
                }}>
                <Entypo
                  name="help-with-circle"
                  color={theme.Colors.gray}
                  size={moderateScale(30)}
                />
              </Container>
            ),
        }}
      />

      <Tab.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Container
                flex={false}
                style={{
                  width: theme.Sizes.S14 * 2,
                }}>
                <FontAwesome
                  name="user"
                  color={theme.Colors.orange}
                  size={moderateScale(30)}
                />
              </Container>
            ) : (
              <Container
                flex={false}
                style={{
                  width: theme.Sizes.S14 * 2,
                }}>
                <FontAwesome
                  name="user"
                  color={theme.Colors.gray}
                  size={moderateScale(30)}
                />
              </Container>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
