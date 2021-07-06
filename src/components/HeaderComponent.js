import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../constants';
import {Appbar} from 'react-native-paper';

const HeaderComponent = ({
  style,
  title,
  titleStyle,
  children,
  backButtonPress,
  backButtonStyle,
  backButton,
  actionIcon,
  actionStyle,
  actionPress,
  actionIconColor,
}) => {
  return (
    <Appbar.Header style={[styles.header, style]}>
      {backButton && (
        <Appbar.BackAction style={backButtonStyle} onPress={backButtonPress} />
      )}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Appbar.Action
        icon={actionIcon}
        style={actionStyle}
        onPress={actionPress}
        color={actionIconColor}
      />
      {children}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.Colors.blue2,
  },
  title: {
    ...theme.Fonts.fontBold,
    fontSize: theme.Sizes.F15,
    color: theme.Colors.white,
    flex: 1,
  },
});

export default HeaderComponent;
