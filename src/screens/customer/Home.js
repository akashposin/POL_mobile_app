import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  PermissionsAndroid,
  TouchableOpacity,
  Text,
} from 'react-native';
import {theme} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  HeaderComponent,
  Map,
  SearchBarComponent,
  AutoCompleteSearch,
} from '../../components';
import axios from 'axios';
import {
  Camera,
  UserLocation,
  PointAnnotation,
} from '@react-native-mapbox-gl/maps';
import LocationEnabler from 'react-native-location-enabler';
import {moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';

const {
  useLocationSettings,
  PRIORITIES: {HIGH_ACCURACY},
} = LocationEnabler;

const Home = ({navigation}) => {
  const userModel = useSelector(state => state.todo_reducer.userModel);

  const [mapRegion, setMapRegion] = useState([
    -106.6282786110048, 52.156657453004,
  ]);
  const [location, setLocation] = useState([
    -106.6272786110048, 52.156657453004,
  ]);

  useEffect(() => {
    console.log('userModel', userModel);
  }, [userModel]);

  const [subCategories, setSubCategories] = useState([]);
  // location checking start
  const [enabled, requestResolution] = useLocationSettings(
    {
      priority: HIGH_ACCURACY,
      alwaysShow: true,
      needBle: false,
    },
    false,
  );

  if (!enabled) {
    requestResolution();
  }
  // location checking end

  const searchSubCategory = async inputText => {
    try {
      const result = await axios.get(
        `https://pol.aisoftwares.co.in/get-all-sub-categories?keyword=${inputText}`,
      );
      const getData = result.data.all_sub_categories.map(value => value);
      if (inputText) {
        setSubCategories(getData);
      } else {
        setSubCategories([]);
      }
    } catch (error) {
      console.log({'error message': error});
    }
  };

  // const renderHeader = () => {
  //   return <HeaderComponent />;
  // };

  const renderSearchBar = () => {
    return (
      <AutoCompleteSearch
        data={subCategories}
        containerStyle={styles.autoCompleteContainer}
        renderTextInput={() => (
          <SearchBarComponent
            placeholder="Search services..."
            onChangeText={searchSubCategory}
          />
        )}
        flatListProps={{
          keyboardShouldPersistTaps: 'always',
          keyExtractor: item => item.sub_category_id,
          renderItem: ({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Categories', item.sub_category_name);
                }}>
                <Text style={styles.dropDownText}>
                  {item.sub_category_name}
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const result = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (result === false) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Plenty Of Labor',
            message: 'Plenty Of Labor wants to access to your location',
            buttonPositive: 'Allow',
            buttonNegative: 'Deny',
            buttonNeutral: 'Ask Later',
          },
        );
        if (granted === 'granted') {
          // alert('Location access granted');
        } else {
          alert('Location permission denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const onUserLocationUpdate = position => {
    const {latitude, longitude} = position.coords;
    setLocation([longitude, latitude]);
  };

  const renderMap = () => {
    return (
      <Map centerCoordinate={mapRegion}>
        <UserLocation
          visible={false}
          animated={true}
          onUpdate={onUserLocationUpdate}
        />
        <Camera
          zoomLevel={8}
          centerCoordinate={location}
          followUserLocation={true}
          followUserMode={'normal'}
          followZoomLevel={8}
          animationMode={'flyTo'}
          animationDuration={0}
        />
        <PointAnnotation
          id="1"
          title="User current location"
          coordinate={location}
          draggable={true}
        />
      </Map>
    );
  };

  return (
    <>
      <StatusBar hidden={false} />
      <SafeAreaView style={styles.container}>
        {/* {renderHeader()} */}
        {renderSearchBar()}
        {renderMap()}
        {/* {renderBody()} */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.gray2,
  },
  autoCompleteContainer: {
    // marginHorizontal: theme.Sizes.S14 * 1.2,
    // width: theme.Sizes.width / 1.1,
    // top: moderateScale(55),
    // zIndex: 5,
    // elevation: 5,
    top: moderateScale(40),
  },
  dropDownText: {
    ...theme.Fonts.fontMedium,
    margin: theme.Sizes.S10 / 3,
  },
});
export default Home;
