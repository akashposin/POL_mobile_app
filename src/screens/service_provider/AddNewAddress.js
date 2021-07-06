import React from 'react';
import {Keyboard, ScrollView, StyleSheet} from 'react-native';
import {theme} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Container,
  FooterComponent,
  HeaderComponent,
  KeyBoardAvoidingViewComponent,
  TextInputComponent,
  Map,
  ButtonComponent,
} from '../../components';
import {moderateScale} from 'react-native-size-matters';
import {
  Camera,
  UserLocation,
  PointAnnotation,
} from '@react-native-mapbox-gl/maps';

const AddNewAddress = ({navigation}) => {
  const [houseNumber, setHouseNumber] = React.useState('');
  const [fullAddress, setFullAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [saveAs, setSaveAs] = React.useState('');

  const [mapRegion, setMapRegion] = React.useState([
    -106.6282786110048, 52.156657453004,
  ]);

  const [location, setLocation] = React.useState([
    -106.6272786110048, 52.156657453004,
  ]);

  const renderHeader = () => {
    return (
      <HeaderComponent
        backButton
        backButtonPress={() => navigation.goBack()}
        title="Add New Address"
      />
    );
  };

  // const Marker = ({coordinate, id, color, label}) => {
  //   return (
  //     <MapboxGL.MarkerView
  //       anchor={{x: 1, y: 1}}
  //       coordinate={coordinate}
  //       id={id}>
  //       <View
  //         style={{
  //           width: 20,
  //           height: 20,
  //           borderRadius: 10,
  //           backgroundColor: color,
  //         }}
  //       />
  //       {/* <View>
  //         <Text>{label}</Text>
  //       </View> */}
  //     </MapboxGL.MarkerView>
  //   );
  // };

  const onUserLocationUpdate = position => {
    const {latitude, longitude} = position.coords;
    setLocation([longitude, latitude]);
  };

  const renderMap = () => {
    return (
      <Container>
        <Map
          zoomLevel={8}
          showUserLocation={true}
          centerCoordinate={mapRegion}
          style={{flex: 1}}>
          <Camera
            zoomLevel={8}
            centerCoordinate={mapRegion}
            followUserLocation={true}
            followUserMode={'normal'}
            followZoomLevel={8}
            animationMode={'flyTo'}
            animationDuration={0}
          />
          <UserLocation
            visible={false}
            animated={true}
            onUpdate={onUserLocationUpdate}
          />
          {/* <Marker
            coordinate={markerLatLng}
            id="1"
            color="red"
            label="Label 1"
          /> */}
          <PointAnnotation
            id="1"
            title="marker title"
            coordinate={location}
            draggable={true}
          />
        </Map>
      </Container>
    );
  };

  const onSubmitValues = () => {
    const data = {location, houseNumber, fullAddress, city, saveAs};
    console.log('Values are:', data);
    Keyboard.dismiss();
  };

  const renderAddressData = () => {
    return (
      <Container flex={false}>
        <ScrollView>
          <KeyBoardAvoidingViewComponent>
            <Container
              flex={false}
              style={{
                marginHorizontal: theme.Sizes.S14 * 4,
              }}>
              <Container flex={false}>
                <TextInputComponent
                  style={{
                    backgroundColor: theme.Colors.white,
                    borderRadius: theme.Sizes.radius,
                    borderWidth: moderateScale(0.5),
                    fontSize: theme.Sizes.F12,
                    height: theme.Sizes.height / 18,
                    paddingLeft: theme.Sizes.S10,
                  }}
                  placeholderTextColor={theme.Colors.gray}
                  placeholder="House Number"
                  value={houseNumber}
                  onChangeText={value => setHouseNumber(value)}
                />
              </Container>
              <Container flex={false}>
                <TextInputComponent
                  style={{
                    backgroundColor: theme.Colors.white,
                    borderRadius: theme.Sizes.radius,
                    borderWidth: moderateScale(0.5),
                    fontSize: theme.Sizes.F12,
                    height: theme.Sizes.height / 18,
                    paddingLeft: theme.Sizes.S10,
                  }}
                  placeholderTextColor={theme.Colors.gray}
                  placeholder="Full Address"
                  value={fullAddress}
                  onChangeText={value => setFullAddress(value)}
                />
              </Container>
              <Container flex={false}>
                <TextInputComponent
                  style={{
                    backgroundColor: theme.Colors.white,
                    borderRadius: theme.Sizes.radius,
                    borderWidth: moderateScale(0.5),
                    fontSize: theme.Sizes.F12,
                    height: theme.Sizes.height / 18,
                    paddingLeft: theme.Sizes.S10,
                  }}
                  placeholderTextColor={theme.Colors.gray}
                  placeholder="City"
                  value={city}
                  onChangeText={value => setCity(value)}
                />
              </Container>
              <Container flex={false}>
                <TextInputComponent
                  style={{
                    backgroundColor: theme.Colors.white,
                    borderRadius: theme.Sizes.radius,
                    borderWidth: moderateScale(0.5),
                    fontSize: theme.Sizes.F12,
                    height: theme.Sizes.height / 18,
                    paddingLeft: theme.Sizes.S10,
                  }}
                  placeholderTextColor={theme.Colors.gray}
                  placeholder="Save as e.g Home, Office, Joe's home"
                  value={saveAs}
                  onChangeText={value => setSaveAs(value)}
                  onSubmitEditing={onSubmitValues}
                />
              </Container>
            </Container>
          </KeyBoardAvoidingViewComponent>
        </ScrollView>
      </Container>
    );
  };

  const renderBottomButton = () => {
    return (
      <FooterComponent>
        <ButtonComponent
          contentStyle={{height: theme.Sizes.S14 * 3.5}}
          style={{
            borderRadius: 0,
          }}
          onPress={() => navigation.navigate('SelectTimeSlot')}>
          Next
        </ButtonComponent>
      </FooterComponent>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMap()}
      {renderAddressData()}
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

export default AddNewAddress;
