import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {theme} from '../constants';

import Help from '../screens/customer/Help';
import {Container} from '../components';
import {createStackNavigator} from '@react-navigation/stack';
import {moderateScale} from 'react-native-size-matters';

import SelectAddress from '../screens/service_provider/SelectAddress';
import AddNewAddress from '../screens/service_provider/AddNewAddress';
import SelectTimeSlot from '../screens/service_provider/SelectTimeSlot';
import BookingSummary from '../screens/service_provider/BookingSummary';
import Confirmation from '../screens/service_provider/Confirmation';
import Categories from '../screens/service_provider/Categories';
import EditProfile from '../screens/service_provider/EditProfile';
import BookingDetails from '../screens/service_provider/BookingDetails';
import Chat from '../screens/service_provider/Chat';
import BookingServiceProviderMapLocation from '../screens/service_provider/BookingServiceProviderMapLocation';
import BookingMarkComplete from '../screens/service_provider/BookingMarkComplete';
import BookingLeaveAReview from '../screens/service_provider/BookingLeaveAReview';
import BookingSubmitAReview from '../screens/service_provider/BookingSubmitAReview';
import BookingCompletedView from '../screens/service_provider/BookingCompletedView';
import ServiceProviderProfile from '../screens/service_provider/ServiceProviderProfile';
import Chat2 from '../screens/service_provider/Chat2';
import ServiceProviderDashboard from '../screens/service_provider/ServiceProviderDashboard';
import VerifyOTP21 from '../screens/service_provider/VerifyOTP21';
import ServiceProviderDashboardToday from '../screens/service_provider/ServiceProviderDashboardToday';
import ServiceProviderListOfReviews from '../screens/service_provider/ServiceProviderListOfReviews';
import CustomerProfile from '../screens/service_provider/CustomerProfile';
import Temporary from '../screens/service_provider/Temporary';
import Bookings from '../screens/service_provider/Bookings';
import Profile from '../screens/service_provider/Profile';
// import ServiceProviderProfileDetails from '../screens/service_provider/ServiceProviderProfileDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Tabs'}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="SelectAddress" component={SelectAddress} />
      <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
      <Stack.Screen name="SelectTimeSlot" component={SelectTimeSlot} />
      <Stack.Screen name="Bookings" component={Bookings} />
      <Stack.Screen name="BookingSummary" component={BookingSummary} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="BookingDetails" component={BookingDetails} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen
        name="BookingServiceProviderMapLocation"
        component={BookingServiceProviderMapLocation}
      />
      <Stack.Screen
        name="BookingMarkComplete"
        component={BookingMarkComplete}
      />
      <Stack.Screen
        name="BookingLeaveAReview"
        component={BookingLeaveAReview}
      />
      <Stack.Screen
        name="BookingSubmitAReview"
        component={BookingSubmitAReview}
      />
      <Stack.Screen
        name="BookingCompletedView"
        component={BookingCompletedView}
      />
      <Stack.Screen
        name="ServiceProviderProfile"
        component={ServiceProviderProfile}
      />
      <Stack.Screen name="Chat2" component={Chat2} />

      <Stack.Screen name="VerifyOTP21" component={VerifyOTP21} />
      <Stack.Screen
        name="ServiceProviderDashboardToday"
        component={ServiceProviderDashboardToday}
      />
      <Stack.Screen
        name="ServiceProviderListOfReviews"
        component={ServiceProviderListOfReviews}
      />
      {/* <Stack.Screen
        name="ServiceProviderProfileDetails"
        component={ServiceProviderProfileDetails}
      /> */}
      <Stack.Screen name="CustomerProfile" component={CustomerProfile} />
    </Stack.Navigator>
  );
};

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
        name="ServiceProviderDashboard"
        component={ServiceProviderDashboard}
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
        name="ServiceProviderListOfReviews"
        component={ServiceProviderListOfReviews}
        options={{
          tabBarLabel: 'Reviews',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Container
                flex={false}
                style={{
                  width: theme.Sizes.S14 * 2,
                }}>
                <MaterialCommunityIcons
                  name="star-circle"
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
                  name="star-circle"
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

export default HomeScreens;
