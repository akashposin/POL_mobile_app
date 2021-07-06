import {Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

export const Colors = {
  black: '#000000',
  black2: '#505254',
  white: '#FFFFFF',
  blue: '#2B78E4',
  blue2: '#1D95EC',
  gray: '#8D8D8D',
  gray2: '#F0F0F0',
  gray3: '#B9B5B5',
  orange: '#F15A23',
  yellow: '#FFC107',
  green: '#78C10B',
};

export const Sizes = {
  F10: moderateScale(10),
  F11: moderateScale(11),
  F12: moderateScale(12),
  F13: moderateScale(13),
  F14: moderateScale(14),
  F15: moderateScale(15),
  F16: moderateScale(16),
  F17: moderateScale(17),
  F18: moderateScale(18),
  S10: moderateScale(10),
  S12: moderateScale(12),
  S14: moderateScale(14),
  radius: moderateScale(30),
  width,
  height,
};

export const Fonts = {
  fontRegular: {
    fontFamily: 'Montserrat-Regular',
  },
  fontBold: {
    fontFamily: 'Montserrat-Bold',
  },
  fontSemiBold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  fontMedium: {
    fontFamily: 'Montserrat-Medium',
  },
};

const appTheme = {Colors, Sizes, Fonts};

export default appTheme;
