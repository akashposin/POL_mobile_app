import React from 'react';
import {Text, Image, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Card,
  Container,
  FooterComponent,
  HeaderComponent,
  Map,
  FabButton,
  ButtonComponent,
} from '../../components';
import {images, theme} from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';

const BookingMarkComplete = () => {
  // Header
  const renderHeader = () => {
    return <HeaderComponent />;
  };

  // Map
  const renderMap = () => {
    return (
      <Container style={{height: theme.Sizes.height / 3}}>
        <Map />
      </Container>
    );
  };

  // Profile Data
  const renderProfileData = () => {
    return (
      <Container center style={{marginTop: theme.Sizes.S14}}>
        <Card shadow style={styles.card}>
          <Container row>
            {/* Profile Image */}
            <Container middle flex={false} style={styles.imageContainer}>
              <Image
                source={images.profile}
                resizeMode="contain"
                style={styles.image}
              />
            </Container>

            <Container>
              {/* Name */}
              <Container flex={false} row>
                <Container>
                  <Text style={styles.nameText}>Bill Smith</Text>
                </Container>
                <Container
                  flex={false}
                  center
                  middle
                  style={styles.inProgressLabel}>
                  <Text style={styles.inProgressLabelText}>In Progress</Text>
                </Container>
              </Container>

              {/* Address */}
              <Container>
                <Text style={styles.address}>
                  Mayfair, Saskatoon, SK S7L 1V6, Canada
                </Text>
              </Container>
              {/* Date & Time */}
              <Container row style={styles.dateTimeContainer}>
                <Container flex={false} style={styles.calenderContainer}>
                  <AntDesign
                    name="calendar"
                    size={moderateScale(20)}
                    color={theme.Colors.orange}
                  />
                </Container>
                <Container>
                  <Text style={styles.dayMonthYear}>Monday, May 24, 2021</Text>
                  <Text style={styles.time}>02:30 PM</Text>
                </Container>
              </Container>
              {/* Arrow Icon */}
              <Container flex={false} style={styles.arrowIconContainer}>
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

  // Contact Provider
  const renderContactProvider = () => {
    return (
      <Container center>
        <Card
          shadow
          middle
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 9,
            borderRadius: theme.Sizes.radius / 5,
            marginVertical: theme.Sizes.S14,
          }}>
          <Container flex={false} row center>
            {/* Text */}
            <Container>
              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F14,
                  marginBottom: theme.Sizes.S10 / 1.5,
                }}>
                Contact Provider
              </Text>
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                }}>
                98564-57854
              </Text>
            </Container>

            {/* Phone Icon */}
            {/* <FabButton icon="phone-in-talk" onPress={() => {}} /> */}
            <FabButton
              icon={() => (
                <MaterialIcons
                  name="phone-in-talk"
                  size={moderateScale(25)}
                  color={theme.Colors.white}
                  style={{bottom: moderateScale(2), right: moderateScale(2)}}
                />
              )}
              onPress={() => {}}
            />
            {/* Chat Icon */}
            {/* <FabButton icon="wechat" onPress={() => {}} /> */}
            <FabButton
              icon={() => (
                <FontAwesome
                  name="wechat"
                  size={moderateScale(19)}
                  color={theme.Colors.white}
                />
              )}
              onPress={() => {}}
            />
          </Container>
        </Card>
      </Container>
    );
  };

  // Booking Details
  const renderBookingDetails = () => {
    return (
      <Container center style={{marginBottom: theme.Sizes.S14 * 2}}>
        {/* Booking Details */}
        <Card
          shadow
          middle
          style={{
            width: theme.Sizes.width / 1.12,
            height: theme.Sizes.height / 9,
            borderRadius: theme.Sizes.radius / 5,
          }}>
          <Container>
            {/* Text Left*/}
            <Container
              row
              style={{
                marginBottom: theme.Sizes.S10,
              }}>
              <Container middle style={{height: theme.Sizes.S14 * 1.3}}>
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F14,
                  }}>
                  Booking Details
                </Text>
              </Container>

              <Container
                flex={false}
                color="orange"
                center
                middle
                style={{
                  width: theme.Sizes.S14 * 2.8,
                  borderRadius: theme.Sizes.radius / 10,
                }}>
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F10,
                    color: theme.Colors.white,
                  }}>
                  #1025
                </Text>
              </Container>
            </Container>

            {/* Text Right */}
            <Container row>
              <Container>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                  }}>
                  Status
                </Text>
              </Container>

              <Container flex={false}>
                <Text
                  style={{
                    ...theme.Fonts.fontSemiBold,
                    color: theme.Colors.gray,
                  }}>
                  Ready
                </Text>
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
          icon={() => (
            <Feather
              name="check-circle"
              color={theme.Colors.white}
              size={moderateScale(26)}
              style={{marginTop: theme.Sizes.S10 / 5}}
            />
          )}
          contentStyle={{height: theme.Sizes.S14 * 3.5}}
          style={{
            borderRadius: 0,
          }}>
          Finish
        </ButtonComponent>
      </FooterComponent>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView>
        {renderMap()}
        {renderProfileData()}
        {renderContactProvider()}
        {renderBookingDetails()}
      </ScrollView>
      {renderBottomButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
  // Profile Card Styles
  card: {
    width: theme.Sizes.width / 1.12,
    height: theme.Sizes.height / 5.5,
    borderRadius: theme.Sizes.S10,
    borderLeftWidth: theme.Sizes.S10,
    borderColor: theme.Colors.orange,
  },
  imageContainer: {
    marginRight: theme.Sizes.S14,
  },
  image: {
    width: theme.Sizes.S14 * 6.7,
    height: theme.Sizes.S14 * 6.7,
  },
  nameText: {
    ...theme.Fonts.fontBold,
    fontSize: theme.Sizes.F14,
  },
  inProgressLabel: {
    backgroundColor: theme.Colors.green,
    borderRadius: theme.Sizes.radius / 10,
    width: theme.Sizes.S14 * 5,
    height: theme.Sizes.S14 * 1.1,
  },
  inProgressLabelText: {
    ...theme.Fonts.fontSemiBold,
    color: theme.Colors.white,
    fontSize: theme.Sizes.F10,
  },
  address: {
    ...theme.Fonts.fontSemiBold,
    color: theme.Colors.black,
    marginTop: theme.Sizes.S10 / 2,
    fontSize: theme.Sizes.F11,
  },
  dateTimeContainer: {marginTop: theme.Sizes.S10 / 2},
  calenderContainer: {marginRight: theme.Sizes.S10 / 2},
  dayMonthYear: {
    ...theme.Fonts.fontRegular,
    color: theme.Colors.black,
    fontSize: theme.Sizes.F11,
  },
  time: {
    ...theme.Fonts.fontRegular,
    color: theme.Colors.black,
    fontSize: theme.Sizes.F11,
  },
  arrowIconContainer: {
    alignSelf: 'flex-end',
  },
});

export default BookingMarkComplete;
