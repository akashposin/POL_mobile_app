import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {images, theme} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ButtonComponent,
  Card,
  Container,
  FooterComponent,
  HeaderComponent,
} from '../../components';

const BookingSummary = ({navigation}) => {
  // header
  const renderHeader = () => {
    return (
      <HeaderComponent
        title="Booking Summary"
        backButton
        backButtonPress={() => navigation.goBack()}
      />
    );
  };

  //   Booking at
  const renderBookingAt = () => {
    return (
      <Container
        flex={false}
        center
        middle
        style={{
          marginVertical: theme.Sizes.S10 / 2,
        }}>
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 6,
            borderRadius: theme.Sizes.S10,
            marginTop: theme.Sizes.S10 * 1.5,
          }}>
          <Container row>
            <Container>
              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F14,
                }}>
                Booking at
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                  marginTop: theme.Sizes.S10 / 2,
                }}>
                Monday, May 24, 2021
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                }}>
                02:30 PM
              </Text>
            </Container>

            <Card
              center
              middle
              style={{
                width: theme.Sizes.width / 4,
                height: theme.Sizes.height / 8,
                backgroundColor: theme.Colors.gray2,
                borderRadius: theme.Sizes.S10 / 2,
              }}>
              <Image
                source={images.calendar}
                resizeMode="contain"
                style={{
                  width: theme.Sizes.width / 7,
                  height: theme.Sizes.height / 8,
                }}
              />
            </Card>
          </Container>
        </Card>
      </Container>
    );
  };

  //   Your Address
  //   Note: this is currently flex to push the button to bottom
  const renderAddress = () => {
    return (
      <Container center>
        <Card
          shadow
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 6,
            borderRadius: theme.Sizes.S10,
            marginTop: theme.Sizes.S10,
          }}>
          <Container row>
            <Container>
              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F14,
                }}>
                Your Address
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                  marginTop: theme.Sizes.S10 / 2,
                }}>
                Mayfair, Saskatoon, SK S7L 1V6, Canada
              </Text>
            </Container>

            <Card
              center
              middle
              style={{
                width: theme.Sizes.width / 4,
                height: theme.Sizes.height / 8,
                backgroundColor: theme.Colors.gray2,
                borderRadius: theme.Sizes.S10 / 2,
              }}>
              <Image
                source={images.location_pin}
                resizeMode="contain"
                style={{
                  width: theme.Sizes.width / 8,
                  height: theme.Sizes.height / 8,
                }}
              />
            </Card>
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
          onPress={() => navigation.navigate('Confirmation')}
          contentStyle={{height: theme.Sizes.S14 * 3.5}}
          style={{
            borderRadius: 0,
          }}>
          Confirm & Book Now
        </ButtonComponent>
      </FooterComponent>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderBookingAt()}
      {renderAddress()}
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

export default BookingSummary;
