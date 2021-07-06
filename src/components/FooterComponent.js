import React from 'react';
import {StyleSheet} from 'react-native';
import Container from './Container';
import {theme} from '../constants';

const FooterComponent = ({style, color, children, center, middle}) => {
  const containerStyles = [styles.container, style];

  return (
    <Container
      flex={false}
      color={color}
      center={center}
      middle={middle}
      style={containerStyles}>
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    height: theme.Sizes.S14 * 3.5,
  },
});

export default FooterComponent;
