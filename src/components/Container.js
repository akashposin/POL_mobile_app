import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../constants';

const Container = ({
  flex,
  row,
  center,
  middle,
  space,
  shadow,
  radius,
  style,
  color,
  children,
}) => {
  const containerStyles = [
    styles.container,
    flex && {flex},
    flex === false && {flex: 0},
    row && styles.row,
    center && styles.center,
    middle && styles.middle,
    radius && styles.radius,
    space && {justifyContent: `space-${space}`},
    shadow && styles.shadow,
    color && styles[color],
    color && !styles[color] && {backgroundColor: color},
    style,
  ];
  return <View style={containerStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  radius: {
    borderRadius: theme.Sizes.radius,
  },
  shadow: {
    shadowColor: theme.Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: theme.Sizes.S10 / 1.5,
  },

  gray: {backgroundColor: theme.Colors.gray},
  gray2: {backgroundColor: theme.Colors.gray2},
  gray3: {backgroundColor: theme.Colors.gray3},
  blue: {backgroundColor: theme.Colors.blue},
  blue2: {backgroundColor: theme.Colors.blue2},
  white: {backgroundColor: theme.Colors.white},
  black: {backgroundColor: theme.Colors.black},
  black2: {backgroundColor: theme.Colors.black2},
  orange: {backgroundColor: theme.Colors.orange},
  green: {backgroundColor: theme.Colors.green},
});

export default Container;
