import React from 'react';
import {Text, Image, StyleSheet, ScrollView} from 'react-native';
import {
  ButtonComponent,
  Card,
  Container,
  FooterComponent,
  HeaderComponent,
} from '../../components';
import {images, theme} from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';

const BookingServiceProviderMapLocation = () => {
  // Header
  const renderHeader = () => {
    return <HeaderComponent />;
  };

  // Map
  const renderMap = () => {
    return <Container flex={2} color="gray2" />;
  };

  // Profile Data
  const renderProfileData = () => {
    return (
      <Container center style={{marginVertical: theme.Sizes.S14}}>
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 5.5,
            borderRadius: theme.Sizes.S10,
            borderLeftWidth: theme.Sizes.S10,
            borderColor: theme.Colors.orange,
          }}>
          <Container row>
            {/* Profile Image */}
            <Container
              center
              middle
              flex={false}
              style={{
                marginRight: theme.Sizes.S14,
              }}>
              <Image
                source={images.profile}
                resizeMode="contain"
                style={{
                  width: theme.Sizes.S14 * 6.7,
                  height: theme.Sizes.S14 * 6.7,
                }}
              />
            </Container>

            <Container>
              {/* Name */}
              <Container flex={false} row>
                <Container>
                  <Text
                    style={{
                      ...theme.Fonts.fontBold,
                      fontSize: theme.Sizes.F14,
                    }}>
                    Bill Smith
                  </Text>
                </Container>
                <Container
                  flex={false}
                  center
                  middle
                  style={{
                    backgroundColor: theme.Colors.green,
                    borderRadius: theme.Sizes.radius / 10,
                    width: theme.Sizes.S14 * 3.8,
                    height: theme.Sizes.S14 * 1.1,
                  }}>
                  <Text
                    style={{
                      ...theme.Fonts.fontSemiBold,
                      color: theme.Colors.white,
                      fontSize: theme.Sizes.F10,
                    }}>
                    Coming
                  </Text>
                </Container>
              </Container>

              {/* Address */}
              <Container>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.black,
                    marginTop: theme.Sizes.S10 / 2,
                    fontSize: theme.Sizes.F11,
                  }}>
                  Mayfair, Saskatoon, SK S7L 1V6, Canada
                </Text>
              </Container>
              {/* Date & Time */}
              <Container row style={{marginTop: theme.Sizes.S10 / 2}}>
                <Container
                  flex={false}
                  style={{marginRight: theme.Sizes.S10 / 2}}>
                  <AntDesign
                    name="calendar"
                    size={moderateScale(20)}
                    color={theme.Colors.orange}
                  />
                </Container>
                <Container>
                  <Text
                    style={{
                      ...theme.Fonts.fontRegular,
                      color: theme.Colors.black,
                      fontSize: theme.Sizes.F11,
                    }}>
                    Monday, May 24, 2021
                  </Text>
                  <Text
                    style={{
                      ...theme.Fonts.fontRegular,
                      color: theme.Colors.black,
                      fontSize: theme.Sizes.F11,
                    }}>
                    02:30 PM
                  </Text>
                </Container>
              </Container>
              {/* Arrow Icon */}
              <Container
                flex={false}
                style={{
                  alignSelf: 'flex-end',
                }}>
                <Entypo
                  name="chevron-with-circle-right"
                  size={moderateScale(22)}
                  color={theme.Colors.black}
                />
              </Container>
            </Container>
          </Container>
        </Card>
      </Container>
    );
  };

  //   Bottom Button
  const renderBottomButton = () => {
    return (
      <FooterComponent>
        <ButtonComponent
          onPress={() => {}}
          contentStyle={{height: theme.Sizes.S14 * 3.5}}
          style={{
            borderRadius: 0,
          }}>
          Start
        </ButtonComponent>
      </FooterComponent>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMap()}
      <ScrollView>{renderProfileData()}</ScrollView>
      {renderBottomButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default BookingServiceProviderMapLocation;
