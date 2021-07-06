import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ButtonComponent,
  Card,
  Container,
  HeaderComponent,
  HorizontalLine,
  SearchBarComponent,
  Map,
  AutoCompleteSearch,
} from '../../components';
import Entypo from 'react-native-vector-icons/Entypo';
import {moderateScale} from 'react-native-size-matters';
import axios from 'axios';
import {
  Camera,
  UserLocation,
  PointAnnotation,
} from '@react-native-mapbox-gl/maps';

const Categories = ({navigation, route}) => {
  const [location, setLocation] = useState([
    -106.6272786110048, 52.156657453004,
  ]);

  const [categories, setCategories] = useState([]);

  const searchSubCategory = async inputText => {
    try {
      const result = await axios.get(
        `https://pol.aisoftwares.co.in/search-service-providers?keyword=${inputText}`,
      );

      const getData = result.data.data.map(value => value);
      if (inputText) {
        setCategories(getData);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.log({'error message': error});
    }
  };

  const renderSearchBar = () => {
    return (
      <AutoCompleteSearch
        containerStyle={styles.autoCompleteContainer}
        data={categories}
        renderTextInput={() => (
          <SearchBarComponent
            placeholder="Enter address (Where do you want services)"
            onChangeText={searchSubCategory}
          />
        )}
        flatListProps={{
          keyboardShouldPersistTaps: 'always',
          keyExtractor: item => item.user_id,
          renderItem: ({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Categories')}>
                <Text style={styles.dropDownText}>{item.sub_cat_name}</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    );
  };

  const renderHeader = () => {
    return (
      <HeaderComponent
        title={route.params || 'Cut Grass'}
        titleStyle={{marginBottom: theme.Sizes.S14 * 1.5}}
        backButtonStyle={{marginBottom: theme.Sizes.S14 * 1.5}}
        backButton
        backButtonPress={() => navigation.goBack()}
      />
    );
  };

  const renderWorkerDetails = () => {
    return (
      <Card
        style={{
          width: theme.Sizes.width / 1.2,
          height: theme.Sizes.S14 * 8,
          borderRadius: theme.Sizes.S10 / 1.5,
          top: moderateScale(480),
          zIndex: 2,
          position: 'absolute',
          marginHorizontal: theme.Sizes.S14 * 2,
        }}>
        <Container flex={false} style={{top: moderateScale(35)}}>
          {/* horizontal line */}
          <HorizontalLine style={{marginBottom: theme.Sizes.S10 / 2}} />

          <Container flex={false} row center>
            <Container>
              {/* name */}
              <Text
                style={{
                  ...theme.Fonts.fontSemiBold,
                  color: theme.Colors.gray,
                }}>
                Wayne
              </Text>
              <Entypo
                name="star"
                color={theme.Colors.orange}
                size={moderateScale(20)}
              />
            </Container>

            <ButtonComponent
              labelStyle={{fontSize: theme.Sizes.F10}}
              contentStyle={{width: theme.Sizes.S14 * 10}}
              style={{
                height: theme.Sizes.S10 * 2.5,
                maxWidth: theme.Sizes.S14 * 7,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('Profile')}>
              View Details
            </ButtonComponent>
          </Container>
        </Container>
      </Card>
    );
  };

  const onUserLocationUpdate = position => {
    const {latitude, longitude} = position.coords;
    setLocation([longitude, latitude]);
  };

  const renderMap = () => {
    return (
      <Map>
        {/* <UserLocation
          visible={false}
          animated={true}
          onUpdate={onUserLocationUpdate}
        />
        <PointAnnotation
          id="1"
          title="marker title"
          coordinate={location}
          draggable={true}
        /> */}
      </Map>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderSearchBar()}
      {renderWorkerDetails()}
      {renderMap()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
  autoCompleteContainer: {
    marginHorizontal: theme.Sizes.S14 * 1.2,
    width: theme.Sizes.width / 1.1,
    top: moderateScale(55),
    zIndex: 5,
    elevation: 5,
  },
  dropDownText: {
    ...theme.Fonts.fontMedium,
    margin: theme.Sizes.S10 / 3,
  },
});

export default Categories;
