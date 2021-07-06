import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../constants';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RatingStars = props => {
  return (
    <View style={{alignItems: 'flex-start', marginTop: 5}}>
      <Stars
        default={props.default}
        count={props.count}
        half={false}
        spacing={5}
        fullStar={
          <Icon
            name={'star'}
            style={[
              styles.myStarStyle,
              {fontSize: props.size ? props.size : 20},
            ]}
          />
        }
        emptyStar={
          <Icon
            name={'star-outline'}
            style={[
              styles.myStarStyle,
              styles.myEmptyStarStyle,
              {fontSize: props.size ? props.size : 20},
            ]}
          />
        }
        halfStar={
          <Icon
            name={'star-half'}
            style={[
              styles.myStarStyle,
              {fontSize: props.size ? props.size : 20},
            ]}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  myStarStyle: {
    color: theme.Colors.yellow,
    textShadowColor: 'black',
    // textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    fontSize: 20,
  },
  myEmptyStarStyle: {
    color: 'white',
    fontSize: 20,
  },
});

export default RatingStars;
