import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import CustomerTabs from './navigation/CustomerTabs';
import Login from './screens/customer/Login';
// import Start from './screens/customer/Start';
import Register from './screens/customer/Register';
import SelectAddress from './screens/customer/SelectAddress';
import AddNewAddress from './screens/customer/AddNewAddress';
import SelectTimeSlot from './screens/customer/SelectTimeSlot';
import BookingSummary from './screens/customer/BookingSummary';
import Confirmation from './screens/customer/Confirmation';
import Categories from './screens/customer/Categories';
import EditProfile from './screens/customer/EditProfile';
import BookingDetails from './screens/customer/BookingDetails';
import Chat from './screens/customer/Chat';
import BookingServiceProviderMapLocation from './screens/customer/BookingServiceProviderMapLocation';
import BookingMarkComplete from './screens/customer/BookingMarkComplete';
import BookingLeaveAReview from './screens/customer/BookingLeaveAReview';
import BookingSubmitAReview from './screens/customer/BookingSubmitAReview';
import BookingCompletedView from './screens/customer/BookingCompletedView';
import ServiceProviderProfile from './screens/customer/ServiceProviderProfile';
import Chat2 from './screens/customer/Chat2';
import ServiceProviderDashboard from './screens/customer/ServiceProviderDashboard';
import VerifyOTP21 from './screens/customer/VerifyOTP21';
import ServiceProviderDashboardToday from './screens/customer/ServiceProviderDashboardToday';
import ServiceProviderListOfReviews from './screens/customer/ServiceProviderListOfReviews';
import CustomerProfile from './screens/customer/CustomerProfile';
import Temporary from './screens/customer/Temporary';
import Bookings from './screens/customer/Bookings';
import Profile from './screens/customer/Profile';
// import ServiceProviderProfileDetails from './screens/customer/ServiceProviderProfileDetails';
import {theme} from './constants';
import {StatusBar} from 'react-native';
import ForgotPassword from './screens/customer/ForgotPassword';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={theme.Colors.blue2} translucent />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Temporary" component={Temporary} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={CustomerTabs} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        {/* <Stack.Screen name="Start" component={Start} /> */}
        <Stack.Screen name="Register" component={Register} />
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
        <Stack.Screen
          name="ServiceProviderDashboard"
          component={ServiceProviderDashboard}
        />
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
      <Toast ref={ref => Toast.setRef(ref)} />
    </SafeAreaProvider>
  );
};

export default MainStack;
