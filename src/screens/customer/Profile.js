import React, {useState, useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';
import {images, theme} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ButtonComponent,
  Container,
  FooterComponent,
  HeaderComponent,
  HorizontalLine,
  Ratings,
  FabButton,
} from '../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {moderateScale} from 'react-native-size-matters';
import axios from 'axios';

const Profile = ({navigation}) => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [wcbInsurance, setWCBInsurance] = useState('');
  const [memberSinceDate, setMemberSinceDate] = useState('');
  const [userImage, setUserImage] = useState(userImage);
  const [headCategory, setHeadCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [totalRatings, setTotalRatings] = useState('');
  const [totalJobs, setTotalJobs] = useState('');
  const [punctuality, setPunctuality] = useState('');
  const [negotiating, setNegotiating] = useState('');
  const [quality, setQuality] = useState('');

  const renderHeader = () => {
    // we will get the title from datebase based on the ID
    return (
      <HeaderComponent
        backButton
        backButtonPress={() => navigation.goBack()}
        title="Wayne"
      />
    );
  };

  useEffect(() => {
    getUserProfileData();
  }, []);

  const getUserProfileData = async () => {
    // const userId = (await getUserId()).toString();

    const result = await axios.get(
      `https://pol.aisoftwares.co.in/get-user-details?user_id=${5}`,
    );
    const {user_info, over_all_avg, total_jobs, userRating} = result.data;

    if (result.data.success === 'true') {
      const memberSince = new Date(user_info.member_since).toLocaleDateString(
        'en-US',
        {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        },
      );
      setUserFirstName(user_info.firstName);
      setUserLastName(user_info.lastName);
      setMemberSinceDate(memberSince);
      setSubCategory(user_info.sub_category);
      setHeadCategory(user_info.head_category);
      setUserImage(user_info.user_image);

      setWCBInsurance(user_info.wcb_insurance);
      setTotalRatings(over_all_avg);
      setTotalJobs(total_jobs);
      setPunctuality(userRating.punctuality);
      setNegotiating(userRating.negotiating);
      setQuality(userRating.quality);
    }
  };

  const renderProfile = () => {
    return (
      <Container center middle flex={false}>
        <Container center middle row style={{marginTop: theme.Sizes.S14}}>
          <Image
            source={userImage ? userImage : images.profile}
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
        </Container>

        <Container center>
          <Text
            style={{
              ...theme.Fonts.fontBold,
              fontSize: theme.Sizes.F14,
              marginTop: theme.Sizes.S12,
            }}>
            {`${userFirstName} ${userLastName}`} {/* Wayne Gates */}
          </Text>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              color: theme.Colors.gray,
            }}>
            {`${subCategory}, ${headCategory}`}
          </Text>
        </Container>
      </Container>
    );
  };

  const renderMiddleLabels = () => {
    return (
      <Container flex={false} center middle>
        {/* 1st Label */}
        <Container
          flex={false}
          center
          middle
          row
          style={{marginTop: theme.Sizes.S14}}>
          <Container
            flex={false}
            color="gray2"
            center
            middle
            style={{
              width: theme.Sizes.S14 * 11,
              height: theme.Sizes.S14 * 3,
              marginRight: theme.Sizes.S14 * 1.5,
            }}>
            <Text style={{...theme.Fonts.fontMedium}}>Member since</Text>
            <Text style={{...theme.Fonts.fontBold}}>{memberSinceDate}</Text>
          </Container>

          <Container
            flex={false}
            color="gray2"
            center
            middle
            style={{
              width: theme.Sizes.S14 * 11,
              height: theme.Sizes.S14 * 3,
            }}>
            <Text style={{...theme.Fonts.fontMedium}}>WCB Insurance</Text>
            <Text style={{...theme.Fonts.fontBold}}>
              {wcbInsurance ? wcbInsurance : 'No'}
            </Text>
          </Container>
        </Container>

        {/* 2nd Label */}
        <Container
          flex={false}
          color="green"
          center
          middle
          style={{
            width: theme.Sizes.S14 * 23,
            height: theme.Sizes.S14 * 3,
            marginTop: theme.Sizes.S14,
          }}>
          <Text
            style={{
              ...theme.Fonts.fontMedium,
              fontSize: theme.Sizes.F16,
              color: theme.Colors.white,
            }}>
            Available for Job
          </Text>
        </Container>

        {/* 3rd Label */}
        <Container
          flex={false}
          center
          middle
          row
          style={{marginTop: theme.Sizes.S14}}>
          <Container
            flex={false}
            color="gray2"
            center
            middle
            style={{
              width: theme.Sizes.S14 * 7,
              height: theme.Sizes.S14 * 3,
              marginRight: theme.Sizes.S14,
            }}>
            <Text style={{...theme.Fonts.fontMedium}}>Ratings</Text>
            <Container flex={false} row center>
              <FontAwesome
                name="star"
                size={moderateScale(18)}
                color={theme.Colors.orange}
              />
              <Text
                style={{
                  ...theme.Fonts.fontBold,
                  fontSize: theme.Sizes.F14,
                  marginLeft: theme.Sizes.S10 / 5,
                }}>
                {totalRatings}
              </Text>
            </Container>
          </Container>

          <Container
            flex={false}
            color="gray2"
            center
            middle
            style={{
              width: theme.Sizes.S14 * 10,
              height: theme.Sizes.S14 * 3,
            }}>
            <Text style={{...theme.Fonts.fontMedium}}>Job Completed</Text>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F14}}>
              {totalJobs}
            </Text>
          </Container>
          {/* <Container
            flex={false}
            color="gray2"
            center
            middle
            style={{marginLeft: theme.Sizes.S14, width: theme.Sizes.S14 * 6}}> */}
          {/* <FabButton
            icon="phone-in-talk"
            small
            onPress={() => {}}
            style={{
              borderRadius: 0,
              width: theme.Sizes.S14 * 4,
              height: theme.Sizes.S14 * 2.8,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          /> */}
          <ButtonComponent
            style={{
              width: theme.Sizes.S14 * 4,
              height: theme.Sizes.S14 * 3,
              backgroundColor: theme.Colors.orange,
              marginTop: 0,
              marginLeft: theme.Sizes.S14,
            }}
            onPress={() => {}}>
            <Feather
              name="phone-call"
              size={moderateScale(24)}
              color={theme.Colors.white}
            />
          </ButtonComponent>
          {/* </Container> */}
        </Container>
      </Container>
    );
  };

  const renderRatings = () => {
    return (
      <Container style={{marginHorizontal: theme.Sizes.S14 * 1.5}}>
        {/* horizontal line */}
        <HorizontalLine />

        <Container
          flex={false}
          style={{
            marginLeft: theme.Sizes.S10 / 3,
          }}>
          <Text style={{...theme.Fonts.fontSemiBold, color: theme.Colors.gray}}>
            Punctuality
          </Text>
          <Ratings
            ratings={punctuality}
            starCount={5}
            starColor={theme.Colors.orange}
            starSize={20}
            disable={true}
            style={{marginTop: theme.Sizes.S10 / 3}}
          />
        </Container>

        {/* horizontal line */}
        <HorizontalLine />

        <Container
          flex={false}
          style={{
            marginLeft: theme.Sizes.S10 / 3,
            marginTop: theme.Sizes.S10 / 2,
          }}>
          <Text style={{...theme.Fonts.fontSemiBold, color: theme.Colors.gray}}>
            Negotiating
          </Text>
          <Ratings
            ratings={negotiating}
            starCount={5}
            starColor={theme.Colors.orange}
            starSize={20}
            style={{marginTop: theme.Sizes.S10 / 3}}
            disable={true}
          />
        </Container>

        {/* horizontal line */}
        <HorizontalLine />

        <Container
          flex={false}
          style={{
            marginLeft: theme.Sizes.S10 / 3,
            marginTop: theme.Sizes.S10 / 2,
          }}>
          <Text style={{...theme.Fonts.fontSemiBold, color: theme.Colors.gray}}>
            Quality
          </Text>
          <Ratings
            ratings={quality}
            starCount={5}
            starColor={theme.Colors.orange}
            starSize={20}
            disable={true}
            style={{marginTop: theme.Sizes.S10 / 3}}
          />
        </Container>

        {/* horizontal line */}
        <HorizontalLine />
      </Container>
    );
  };

  const renderBottomButton = () => {
    return (
      <FooterComponent>
        <ButtonComponent
          onPress={() => navigation.navigate('SelectAddress')}
          contentStyle={{height: theme.Sizes.S14 * 3.5}}
          style={{
            borderRadius: 0,
          }}>
          Hire
        </ButtonComponent>
      </FooterComponent>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView>
        {renderProfile()}
        {renderMiddleLabels()}
        {renderRatings()}
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
});

export default Profile;
