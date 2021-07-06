import React from 'react';
import {StyleSheet} from 'react-native';
import Container from './Container';
import {theme} from '../constants';

const Card = ({color, style, shadow, row, center, middle, children}) => {
  const cardStyles = [
    styles.card,
    row && styles.row,
    center && styles.center,
    middle && styles.middle,
    shadow && styles.shadow,
    style,
  ];
  return (
    <Container
      flex={false}
      color={color || theme.Colors.white}
      style={cardStyles}>
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: theme.Sizes.S10 + 4,
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
  shadow: {
    shadowColor: theme.Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: theme.Sizes.S10,
    backgroundColor: theme.Colors.white,
  },
});

export default Card;
