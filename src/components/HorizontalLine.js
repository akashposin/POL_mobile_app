import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Container from './Container';
import {theme} from '../constants';

const HorizontalLine = props => {
  const {style, color} = props;

  const hLineStyles = [styles.container, style];
  return (
    <Container
      flex={false}
      style={hLineStyles}
      color={!color ? 'gray3' : color}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(1),
    marginVertical: theme.Sizes.S10,
  },
});

export default HorizontalLine;
