import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Start from './Start';
import MainCustomerStack from './MainCustomerStack';
import MainServiceProviderStack from './MainServiceProviderStack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const MainStack = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Start'}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen
            name="MainCustomerStack"
            component={MainCustomerStack}
          />
          <Stack.Screen
            name="MainServiceProviderStack"
            component={MainServiceProviderStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainStack;
