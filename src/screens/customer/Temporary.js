import React from 'react';
import {Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {ButtonComponent, Container} from '../../components';
import {theme} from '../../constants';

const Temporary = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container row style={{marginTop: theme.Sizes.S14 * 2}}>
          <Container>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('Login')}>
              Login
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('Home')}>
              Home
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('SelectAddress')}>
              Select Address
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('AddNewAddress')}>
              Add New Address
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('SelectTimeSlot')}>
              Select Time Slot
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('BookingSummary')}>
              Booking Summary
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('Categories')}>
              Categories
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('EditProfile')}>
              Edit Profile
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('Register')}>
              Register
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('BookingDetails')}>
              BookingDetails
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('Chat')}>
              Chat
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() =>
                navigation.navigate('BookingServiceProviderMapLocation')
              }>
              BookingServiceProviderMapLocation
            </ButtonComponent>

            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('Bookings')}>
              Bookings
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('Confirmation')}>
              Confirmation
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('Profile')}>
              Profile
            </ButtonComponent>
          </Container>

          <Container>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('BookingMarkComplete')}>
              BookingMarkComplete
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('BookingLeaveAReview')}>
              BookingLeaveAReview
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('BookingSubmitAReview')}>
              BookingSubmitAReview
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('BookingCompletedView')}>
              BookingCompletedView
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('ServiceProviderProfile')}>
              ServiceProviderProfile
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('Chat2')}>
              Chat2
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('ServiceProviderDashboard')}>
              ServiceProviderDashboard
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('VerifyOTP21')}>
              VerifyOTP21
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() =>
                navigation.navigate('ServiceProviderDashboardToday')
              }>
              ServiceProviderDashboardToday
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() =>
                navigation.navigate('ServiceProviderListOfReviews')
              }>
              ServiceProviderListOfReviews
            </ButtonComponent>
            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('CustomerProfile')}>
              CustomerProfile
            </ButtonComponent>

            <ButtonComponent
              style={{
                marginVertical: theme.Sizes.S10,
                marginHorizontal: theme.Sizes.S14,
              }}
              onPress={() => navigation.navigate('Start')}>
              Start
            </ButtonComponent>
          </Container>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Temporary;
