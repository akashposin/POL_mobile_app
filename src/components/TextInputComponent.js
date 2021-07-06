import React from 'react';
import {Keyboard, StyleSheet} from 'react-native';
import {theme} from '../constants';
import {TextInput} from 'react-native-paper';

const TextInputComponent = ({
  label,
  mode,
  refs,
  onChangeText,
  value,
  keyboardType,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  editable,
  autoCapitalize,
  style,
  children,
  multiline,
  customTheme,
}) => {
  const inputStyles = [styles.input, style];

  const submit = () => {
    Keyboard.dismiss();
  };

  return (
    <TextInput
      label={label}
      mode={mode}
      ref={refs}
      underlineColorAndroid="transparent"
      value={value}
      autoCorrect={false}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : theme.Colors.gray
      }
      autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
      blurOnSubmit={false}
      editable={editable}
      keyboardType={keyboardType}
      onSubmitEditing={submit}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      style={inputStyles}
      theme={
        customTheme
          ? customTheme
          : {
              colors: {text: theme.Colors.black, primary: theme.Colors.blue},
              fonts: {regular: theme.Fonts.fontRegular},
            }
      }>
      {children}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    height: theme.Sizes.S14 * 3.5,
    backgroundColor: theme.Colors.white,
  },
});

export default TextInputComponent;
