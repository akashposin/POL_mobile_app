import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

const Help = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Help</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Help;
