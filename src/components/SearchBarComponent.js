import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {theme} from '../constants';
import Container from './Container';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, TextInput} from 'react-native';

const SearchBarComponent = ({
  onChangeText,
  value,
  placeholder,
  placeholderTextColor,
  style,
  children,
}) => {
  return (
    <Container
      flex={false}
      color="white"
      row
      middle
      center
      style={styles.container}>
      <Container>
        <TextInput
          style={[styles.inputText, style]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : theme.Colors.gray
          }>
          {children}
        </TextInput>
      </Container>
      <Container flex={false} style={styles.iconContainer}>
        <IonIcons
          name="search"
          size={moderateScale(24)}
          color={theme.Colors.gray}
        />
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.Sizes.radius / 5,
    height: theme.Sizes.height / 16,
  },
  inputText: {
    ...theme.Fonts.fontRegular,
    fontSize: theme.Sizes.F13,
    backgroundColor: 'transparent',
    paddingLeft: theme.Sizes.S10,
  },
  iconContainer: {
    marginRight: theme.Sizes.S10,
  },
});

export default SearchBarComponent;
