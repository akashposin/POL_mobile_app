import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, LogBox} from 'react-native';
import MainStack from './src/MainStack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './src/redux/store';
import {persistStore} from 'redux-persist';

let persistor = null;

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain']);

export default function App() {
  const [rehydrating, setRehydrating] = useState(true);

  useEffect(() => {
    // persistStore(store).purge();
    persistor = persistStore(store, null, () => {
      setRehydrating(false);
    });
  }, []);

  if (rehydrating) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <MainStack />
      </PersistGate>
    </Provider>
  );
}

const styles = {
  mainToastStyle: {
    marginHorizontal: 18,
    width: '90%',
    backgroundColor: '#000000cc',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
};
