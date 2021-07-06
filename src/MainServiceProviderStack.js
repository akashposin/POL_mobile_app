import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ServiceProviderTabs from './navigation/ServiceProviderTabs';
import Login from './screens/service_provider/Login';
import ForgotPassword from './screens/service_provider/ForgotPassword';
import Register from './screens/service_provider/Register';

import Toast from 'react-native-toast-message';
import {theme} from './constants';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={theme.Colors.blue2} translucent={false} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={ServiceProviderTabs} />
      </Stack.Navigator>
      <Toast ref={ref => Toast.setRef(ref)} />
    </SafeAreaProvider>
  );
};

export default MainStack;
