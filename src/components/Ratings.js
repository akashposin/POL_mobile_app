import React, {useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback, Animated, Easing} from 'react-native';
import {theme} from '../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {moderateScale} from 'react-native-size-matters';

const Star = ({filled, color, size}) => {
  return (
    <FontAwesome
      name={filled ? 'star' : 'star-o'}
      color={color ? color : theme.Colors.blue2}
      size={size ? moderateScale(size) : moderateScale(32)}
      style={{marginHorizontal: theme.Sizes.S10 / 4}}
    />
  );
};

const Ratings = ({
  ratings = 1,
  starCount = 5,
  starColor,
  starSize,
  style,
  disable,
}) => {
  const [rating, setRating] = useState(ratings);
  const [animation, setAnimation] = useState(new Animated.Value(1));

  useEffect(() => {
    setRating(ratings);
  }, [ratings]);

  let stars = [];

  const clickRate = star => {
    setRating(star);
  };

  const animateScale = animation.interpolate({
    inputRange: [1, 1.5, 2],
    outputRange: [1, 1.4, 1],
  });

  const animateOpacity = animation.interpolate({
    inputRange: [1, 1.2, 2],
    outputRange: [1, 0.3, 1],
  });

  const animateWobble = animation.interpolate({
    inputRange: [1, 1.25, 1.75, 2],
    outputRange: ['0deg', '-3deg', '3deg', '0deg'],
  });

  const animationStyle = {
    transform: [{scale: animateScale}, {rotate: animateWobble}],
    opacity: animateOpacity,
  };

  const animate = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(1);
    });
  };

  for (let count = 1; count <= starCount; count++) {
    stars.push(
      <TouchableWithoutFeedback
        key={count}
        disabled={disable}
        onPress={() => {
          clickRate(count);
          animate();
        }}>
        <Animated.View style={count <= rating ? animationStyle : ''}>
          <Star
            filled={count <= rating ? true : false}
            color={starColor}
            size={starSize}
          />
        </Animated.View>
      </TouchableWithoutFeedback>,
    );
  }
  return <View style={[{flexDirection: 'row'}, style]}>{stars}</View>;
};

export default Ratings;
