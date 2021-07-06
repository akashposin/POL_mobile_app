import React from 'react';
import {ActivityIndicator} from 'react-native';

const Loader = props => {
  return (
    <ActivityIndicator
      size={props.large ? 'large' : 'small'}
      style={[{padding: 0}, props.style]}
      color={props.color || 'black'}
    />
  );
};

export default Loader;
