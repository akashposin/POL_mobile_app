import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  PermissionsAndroid,
} from 'react-native';
import {
  ButtonComponent,
  Container,
  HeaderComponent,
  HorizontalLine,
  TextInputComponent,
  ModalComponent,
  KeyBoardAvoidingViewComponent,
  FabButton,
} from '../../components';
import {theme} from '../../constants';
import {moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {getUserId} from '../../shared/LocalStorage';
import DropDownPicker from 'react-native-dropdown-picker';
import {Switch} from 'react-native-paper';

const EditProfile = ({navigation}) => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userAge, setUserAge] = useState('');
  const [wcbInsurance, setWCBInsurance] = useState('');
  const [memberSinceDate, setMemberSinceDate] = useState('');
  const [userExperience, setUserExperience] = useState('');
  const [userImage, setUserImage] = useState(userImage);
  const [visibleProfileImage, setVisibleProfileImageModal] = useState(false);
  const [visibleExperienceModal, setVisibleExperienceModal] = useState(false);
  const [mainCategories, setmainCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [openSubCategory, setOpenSubCategory] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [mainSubCategories, setMainSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const firstNameInputHandler = inputText => {
    setUserFirstName(inputText);
  };

  const lastNameInputHandler = inputText => {
    setUserLastName(inputText);
  };

  const phoneNumberInputHandler = inputText => {
    setUserPhoneNumber(inputText);
  };

  const ageInputHandler = inputText => {
    setUserAge(inputText);
  };

  const onOpenCategories = useCallback(() => {
    setOpenSubCategory(false);
  }, []);

  const onOpenSubCategories = useCallback(() => {
    setOpenCategory(false);
  }, []);

  useEffect(() => {
    getUserProfileData();
    getCategories();
  }, []);

  const getUserProfileData = async () => {
    const userId = (await getUserId()).toString();

    const result = await axios.get(
      `https://pol.aisoftwares.co.in/get-user-profile?user_id=${userId}`,
    );
    const {
      firstName,
      lastName,
      phone_number,
      wcb_insurance,
      experience,
      age,
      user_image,
      created_at,
    } = result.data.user;
    if (result.data.success === 'true') {
      setUserFirstName(firstName);
      setUserLastName(lastName);
      setUserPhoneNumber(phone_number);
      setWCBInsurance(wcb_insurance);
      setMemberSinceDate(created_at);
      setUserAge(age);
      setUserExperience(experience);
      setUserImage(user_image);
    }
  };

  const launchDeviceCamer = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      res => {
        if (res.didCancel) {
          setVisibleProfileImageModal(false);
        } else if (res.errorCode) {
          console.log(res.errorCode);
        } else {
          res.assets.map(resp => setUserImage(resp.uri));
          setVisibleProfileImageModal(false);
        }
      },
    );
  };

  const openCamera = async () => {
    try {
      const result = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (result === false) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Plenty Of Labor',
            message: 'Plenty Of Labor wants to access to your Camera',
            buttonPositive: 'Allow',
            buttonNegative: 'Deny',
            buttonNeutral: 'Ask Later',
          },
        );
        if (granted === 'granted') {
          launchDeviceCamer();
        } else {
          alert('Camera permission denied');
        }
      } else {
        launchDeviceCamer();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      res => {
        if (res.didCancel) {
          setVisibleProfileImageModal(false);
        } else if (res.errorCode) {
          console.log(res.errorCode);
        } else {
          setVisibleProfileImageModal(false);

          console.log(res.assets);
        }
      },
    );
  };

  const submitCategories = () => {
    const combinedCategories = `${selectedSubCategory}, ${selectedCategory}`;
    setUserExperience(combinedCategories);
    setVisibleExperienceModal(false);
  };

  const getCategories = async () => {
    const result = await axios.get(
      'https://pol.aisoftwares.co.in/get-categories',
    );
    const getCategory = result.data.categories.map(cat => {
      const item = {
        label: cat.category_name,
        value: cat.category_name,
      };
      return item;
    });
    setCategories(getCategory);
    setmainCategories(result.data.categories);
  };

  const getSubCategories = async data => {
    const categoryId = mainCategories
      .filter(res => res.category_name === data)
      .map(obj => obj.id);

    const result = await axios.get(
      `https://pol.aisoftwares.co.in/get-sub-categories?cat_id=${categoryId}`,
    );
    const getSubCategory = result.data.categories.map(cat => {
      const item = {
        label: cat.category_name,
        value: cat.category_name,
      };
      return item;
    });
    setSubCategories(getSubCategory);
    setMainSubCategories(result.data.categories);
  };

  const saveProfileData = async () => {
    const userId = (await getUserId()).toString();

    const categoryId = mainSubCategories
      .filter(res => res.category_name === selectedSubCategory)
      .map(obj => obj.id);

    let formData = new FormData();
    formData.append('user_id', userId);
    formData.append('first_name', userFirstName);
    formData.append('last_name', userLastName);
    formData.append('phone_number', userPhoneNumber);
    formData.append('wcb_insurance', wcbInsurance);
    formData.append('age', userAge);
    formData.append('sub_category_id', categoryId[0]);
    formData.append('user_image', {
      uri: userImage,
      name: `${userFirstName} ${userLastName}`,
      type: 'image/jpg',
    });
    formData.append('experience', userExperience);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const result = await axios.post(
      'https://pol.aisoftwares.co.in/save-user-profile',
      formData,
      config,
    );

    if (result.data.success === 'true') {
      navigation.goBack();
    }
  };

  const renderHeader = () => {
    return (
      <HeaderComponent
        title="Edit Profile"
        backButton
        backButtonPress={() => navigation.goBack()}
        actionIcon="check"
        actionIconColor={theme.Colors.orange}
        actionPress={saveProfileData}
        actionStyle={{
          borderRadius: theme.Sizes.S10 / 2,
          backgroundColor: theme.Colors.white,
          width: theme.Sizes.S14 * 2,
          height: theme.Sizes.S14 * 2,
        }}
      />
    );
  };

  const renderProfile = () => {
    return (
      <Container center middle flex={false}>
        <Container
          flex={false}
          center
          middle
          row
          style={{marginTop: theme.Sizes.S14}}>
          <Image
            source={{uri: userImage}}
            style={{
              width: theme.Sizes.S14 * moderateScale(6.7),
              height: theme.Sizes.S14 * moderateScale(6.7),
              borderRadius: theme.Sizes.radius * 2,
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
            onPress={() => setVisibleProfileImageModal(true)}
          />
        </Container>

        <Container flex={false} center middle>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              marginTop: theme.Sizes.S14,
              fontSize: theme.Sizes.F14,
            }}>
            Member Since
          </Text>
          <Text
            style={{
              ...theme.Fonts.fontSemiBold,
              fontSize: theme.Sizes.F14,
            }}>
            {memberSinceDate ? memberSinceDate : 'yy-mm-dd'}
          </Text>
          {/* <Entypo
            name="star"
            size={moderateScale(18)}
            color={theme.Colors.yellow}
          /> */}
        </Container>
      </Container>
    );
  };

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => {
    if (isSwitchOn) {
      setWCBInsurance('No');
      setIsSwitchOn(false);
    } else {
      setWCBInsurance('Yes');
      setIsSwitchOn(true);
    }
  };

  const renderData = () => {
    return (
      <Container
        flex={false}
        style={{
          marginHorizontal: theme.Sizes.S14 * 1.2,
          marginBottom: theme.Sizes.S14,
          marginTop: theme.Sizes.S14 * 2,
        }}>
        {/* First Name */}
        <TextInputComponent
          mode="flat"
          value={userFirstName}
          onChangeText={firstNameInputHandler}
          placeholder="Please enter your first name"
          style={{
            height: theme.Sizes.S14 * 2,
            marginBottom: theme.Sizes.S14 * 1.5,
            fontSize: theme.Sizes.F15,
          }}
        />

        {/* Last Name */}
        <TextInputComponent
          mode="flat"
          value={userLastName}
          onChangeText={lastNameInputHandler}
          placeholder="Please enter your last name"
          style={{
            height: theme.Sizes.S14 * 2,
            marginBottom: theme.Sizes.S14 * 1.5,
            fontSize: theme.Sizes.F15,
          }}
        />

        {/* Phone Number */}
        <TextInputComponent
          mode="flat"
          value={userPhoneNumber}
          onChangeText={phoneNumberInputHandler}
          placeholder="Please enter your phone number"
          keyboardType="phone-pad"
          style={{
            height: theme.Sizes.S14 * 2,
            marginBottom: theme.Sizes.S14 * 1.5,
            fontSize: theme.Sizes.F15,
          }}
        />

        {/* WCB Insurance */}
        <Container
          row
          center
          style={{
            marginHorizontal: theme.Sizes.S10,
            marginBottom: theme.Sizes.S14,
          }}>
          <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F15}}>
            WCB Insurance
          </Text>
          <Container />
          <Switch
            color={theme.Colors.blue}
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
          />
        </Container>

        {/* Age */}
        <TextInputComponent
          mode="flat"
          value={userAge}
          onChangeText={ageInputHandler}
          placeholder="Please enter your age"
          keyboardType="number-pad"
          style={{
            height: theme.Sizes.S14 * 2,
            fontSize: theme.Sizes.F15,
          }}
        />

        {/* Experience */}
        <Container flex={false}>
          <Pressable onPress={() => setVisibleExperienceModal(true)}>
            <Text
              style={{
                ...theme.Fonts.fontBold,
                fontSize: theme.Sizes.F15,
                marginTop: theme.Sizes.S14 * 1.5,
                marginLeft: theme.Sizes.S10,
              }}>
              {userExperience ? (
                userExperience
              ) : (
                <Text
                  style={{
                    ...theme.Fonts.fontBold,
                    fontSize: theme.Sizes.F15,
                    marginTop: theme.Sizes.S14 * 1.5,
                    marginLeft: theme.Sizes.S10,
                    color: theme.Colors.gray,
                  }}>
                  Select Experience
                </Text>
              )}
            </Text>
          </Pressable>
          <HorizontalLine color="black2" />
        </Container>
      </Container>
    );
  };

  const renderCategories = () => {
    return (
      <Container
        flex={false}
        style={{
          marginHorizontal: theme.Sizes.S14 * 3,
          marginVertical: theme.Sizes.S14,
        }}>
        <DropDownPicker
          open={openCategory}
          onOpen={onOpenCategories}
          value={selectedCategory}
          items={categories}
          setOpen={setOpenCategory}
          setValue={setSelectedCategory}
          setItems={setCategories}
          placeholder="Select Category"
          onChangeValue={getSubCategories}
          zIndex={2}
          zIndexInverse={2}
        />
      </Container>
    );
  };

  const renderSubCategories = () => {
    return (
      <Container
        flex={false}
        style={{
          marginHorizontal: theme.Sizes.S14 * 3,
          marginBottom: theme.Sizes.S14,
        }}>
        <DropDownPicker
          open={openSubCategory}
          onOpen={onOpenSubCategories}
          value={selectedSubCategory}
          items={subCategories}
          setOpen={setOpenSubCategory}
          setValue={setSelectedSubCategory}
          setItems={setSubCategories}
          placeholder="Select Sub Category"
          maxHeight={moderateScale(140)}
          zIndex={1}
          zIndexInverse={1}
        />
      </Container>
    );
  };

  const renderChangeProfileImageModal = () => {
    return (
      <ModalComponent
        visible={visibleProfileImage}
        style={{height: theme.Sizes.height / 2.5}}>
        <Container style={{marginHorizontal: theme.Sizes.S14 * 2}}>
          <Container
            flex={false}
            center
            style={{marginTop: theme.Sizes.S14 * 2}}>
            <Text style={{...theme.Fonts.fontBold, fontSize: theme.Sizes.F15}}>
              Upload Your Profile Picture
            </Text>
          </Container>

          <ButtonComponent
            onPress={openCamera}
            labelStyle={{fontSize: theme.Sizes.F18}}
            style={{marginTop: theme.Sizes.S14}}>
            Take a Photo
          </ButtonComponent>

          <ButtonComponent
            onPress={openGallery}
            labelStyle={{fontSize: theme.Sizes.F18}}
            style={{marginTop: theme.Sizes.S14}}>
            Choose from Gallery
          </ButtonComponent>

          <ButtonComponent
            style={{marginTop: theme.Sizes.S14}}
            labelStyle={{fontSize: theme.Sizes.F18}}
            onPress={() => setVisibleProfileImageModal(false)}>
            Cancel
          </ButtonComponent>
        </Container>
      </ModalComponent>
    );
  };

  const renderExperienceModal = () => {
    return (
      <ModalComponent visible={visibleExperienceModal}>
        <Container center>
          <Text
            style={{...theme.Fonts.fontBold, marginTop: theme.Sizes.S14 * 2}}>
            Please Select Category and Sub-Category
          </Text>
          {renderCategories()}
          {renderSubCategories()}

          <Container
            flex={false}
            style={{zIndex: 0, width: theme.Sizes.S14 * 17}}>
            <ButtonComponent
              onPress={submitCategories}
              labelStyle={{fontSize: theme.Sizes.F18}}>
              Submit
            </ButtonComponent>

            <ButtonComponent
              onPress={() => setVisibleExperienceModal(false)}
              labelStyle={{fontSize: theme.Sizes.F18}}
              style={{
                marginTop: theme.Sizes.S14,
              }}>
              Cancel
            </ButtonComponent>
          </Container>
        </Container>
      </ModalComponent>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView>
        <KeyBoardAvoidingViewComponent>
          {renderProfile()}
          {renderData()}
        </KeyBoardAvoidingViewComponent>
      </ScrollView>
      {renderChangeProfileImageModal()}
      {renderExperienceModal()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});
export default EditProfile;
