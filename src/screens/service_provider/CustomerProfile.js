import React from 'react';
import {Text, StyleSheet, Image, ScrollView} from 'react-native';
import {
  Container,
  HeaderComponent,
  HorizontalLine,
  FabButton,
} from '../../components';
import {images, theme} from '../../constants';
import {moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';

const CustomerProfile = ({navigation}) => {
  const renderHeader = () => {
    return (
      <HeaderComponent
        titleStyle={{flex: 0}}
        style={{
          justifyContent: 'center',
          marginLeft: theme.Sizes.S10 * 2,
        }}
        title="My Profile"
      />
    );
  };

  const renderProfile = () => {
    return (
      <Container center middle flex={false}>
        <Container center middle row style={{marginTop: theme.Sizes.S14}}>
          <Image
            source={images.profile}
            style={{
              width: theme.Sizes.S14 * moderateScale(6.7),
              height: theme.Sizes.S14 * moderateScale(6.7),
            }}
          />
          <FabButton
            icon="lead-pencil"
            small
            style={{
              position: 'absolute',
              top: moderateScale(69),
              left: moderateScale(67),
              right: -theme.Sizes.S10,
              bottom: -theme.Sizes.S12,
              backgroundColor: theme.Colors.orange,
            }}
            onPress={() => {}}
          />
          {/* <Container
            flex={false}
            style={{
              overflow: 'hidden',
              position: 'absolute',
              borderRadius: theme.Sizes.radius,
              borderWidth: moderateScale(4),
              borderColor: theme.Colors.orange,
              left: theme.Sizes.S14 * moderateScale(4.6),
              top: theme.Sizes.S14 * moderateScale(4.8),
            }}>
            <ButtonComponent
              style={{
                width: theme.Sizes.S14 * 1.6,
                height: theme.Sizes.S14 * 1.6,
                backgroundColor: theme.Colors.white,
              }}
              onPress={() => alert('change profile picture')}>
              <FontAwesome5
                name="pen"
                size={moderateScale(14)}
                color={theme.Colors.orange}
              />
            </ButtonComponent>
          </Container> */}
        </Container>
      </Container>
    );
  };

  const renderData = () => {
    return (
      <Container
        flex={false}
        style={{
          marginHorizontal: theme.Sizes.S14 * 1.2,
        }}>
        {/* Name */}
        <Container flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              color: theme.Colors.gray,
            }}>
            Name
          </Text>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F14,
              borderColor: theme.Colors.gray3,
              marginTop: theme.Sizes.S10,
            }}>
            Wayne Gates
          </Text>
        </Container>

        {/* Horizontal Line */}
        <HorizontalLine />

        {/* Phone Number */}
        <Container flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              color: theme.Colors.gray,
            }}>
            Phone Number
          </Text>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F14,
              borderColor: theme.Colors.gray3,
              marginTop: theme.Sizes.S10,
            }}>
            869-465-8954
          </Text>
        </Container>

        {/* Horizontal Line */}
        <HorizontalLine />

        {/* Home address */}
        <Container flex={false}>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              color: theme.Colors.gray,
            }}>
            Home Address
          </Text>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F14,
              borderColor: theme.Colors.gray3,
              marginTop: theme.Sizes.S10,
            }}>
            Mayfair, Saskatoon, SK S7L 1V6, Canada
          </Text>
        </Container>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {renderHeader()}
        {renderProfile()}
        {renderData()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});
export default CustomerProfile;
