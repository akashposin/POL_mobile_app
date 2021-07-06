import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {theme} from '../constants';

const FabButton = ({style, small, onPress, icon, color}) => {
  return (
    <FAB
      style={[styles.fab, style]}
      small={small}
      icon={icon}
      color={color ? color : theme.Colors.white}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    margin: theme.Sizes.S10 / 2,
    right: 0,
    bottom: 0,
    backgroundColor: theme.Colors.blue,
  },
});

export default FabButton;
