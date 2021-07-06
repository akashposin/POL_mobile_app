import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {theme} from '../constants';

const KeyBoardAvoidingViewComponent = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'position' : 'padding'}
      keyboardVerticalOffset={theme.Sizes.S14 * 2}
      {...props}>
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default KeyBoardAvoidingViewComponent;
