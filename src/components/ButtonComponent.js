import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../constants';
import {Button} from 'react-native-paper';

const ButtonComponent = ({
  mode,
  uppercase,
  color,
  contentStyle,
  labelStyle,
  onPress,
  icon,
  style,
  children,
  disabled,
}) => {
  return (
    <Button
      icon={icon}
      mode={mode ? mode : 'contained'}
      disabled={disabled}
      uppercase={uppercase ? uppercase : false}
      color={color ? color : theme.Colors.blue}
      contentStyle={[styles.content, contentStyle]}
      labelStyle={[styles.label, labelStyle]}
      onPress={onPress}
      style={[styles.button, style]}
      theme={{fonts: {medium: theme.Fonts.fontBold}}}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  content: {
    height: theme.Sizes.S14 * 3,
  },
  label: {
    ...theme.Fonts.fontBold,
    fontSize: theme.Sizes.F18,
  },
  button: {
    // marginTop: theme.Sizes.S10,
  },
});

export default ButtonComponent;
