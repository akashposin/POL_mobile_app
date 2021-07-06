import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, StatusBar} from 'react-native';
import {images, theme} from './constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Container, FooterComponent} from './components';
import {moderateScale} from 'react-native-size-matters';
import SplashScreen from 'react-native-splash-screen';

const Start = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const renderLogo = () => {
    return (
      <Container
        flex={false}
        center
        middle
        style={{
          marginTop: theme.Sizes.S14 * 4,
        }}>
        <Image
          source={images.logo}
          style={{
            width: theme.Sizes.S14 * 15,
            height: theme.Sizes.S14 * 15,
          }}
        />
      </Container>
    );
  };

  const renderButtons = () => {
    return (
      <Container
        flex={false}
        style={{
          marginVertical: theme.Sizes.S14,
          marginHorizontal: theme.Sizes.S14 * 4,
        }}>
        <ButtonComponent
          mode="contained"
          uppercase={false}
          color={theme.Colors.blue2}
          contentStyle={{height: theme.Sizes.S14 * 3}}
          labelStyle={{
            fontSize: theme.Sizes.F16,
          }}
          onPress={() => navigation.navigate('MainServiceProviderStack')}
          style={{
            marginTop: theme.Sizes.S14,
          }}>
          Looking for Work
        </ButtonComponent>

        <ButtonComponent
          mode="contained"
          uppercase={false}
          color={theme.Colors.blue}
          contentStyle={{height: theme.Sizes.S14 * 3}}
          labelStyle={{
            fontSize: theme.Sizes.F16,
          }}
          onPress={() => navigation.navigate('MainCustomerStack')}
          style={{
            marginTop: theme.Sizes.S14,
          }}>
          Need some Help
        </ButtonComponent>
      </Container>
    );
  };

  const renderText = () => {
    return (
      <Container
        center
        middle
        style={{
          marginTop: theme.Sizes.S14,
        }}>
        <Text
          style={{
            ...theme.Fonts.fontBold,
            fontSize: theme.Sizes.F18,
            letterSpacing: moderateScale(0.5),
          }}>
          Saving Our Planet One
        </Text>
        <Text
          style={{
            ...theme.Fonts.fontBold,
            fontSize: theme.Sizes.F18,
            letterSpacing: moderateScale(0.5),
          }}>
          Odd-job At A Time! ©
        </Text>
      </Container>
    );
  };

  const renderFooter = () => {
    return (
      <FooterComponent middle center>
        <Text
          style={{
            ...theme.Fonts.fontBold,
            color: theme.Colors.black,
            fontSize: theme.Sizes.F14,
            letterSpacing: 0.5,
          }}>
          ©2021 Plenty of Labor . All Rights Reserved
        </Text>
      </FooterComponent>
    );
  };
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container}>
        {renderLogo()}
        {renderButtons()}
        {renderText()}
        {renderFooter()}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default Start;
