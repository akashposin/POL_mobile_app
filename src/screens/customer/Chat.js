import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {Container, HeaderComponent, TextInputComponent} from '../../components';
import {theme} from '../../constants';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';

const Chat = () => {
  const [text, setText] = React.useState('');

  // Header
  const renderHeader = () => {
    return (
      <HeaderComponent center middle>
        <Text
          style={{
            ...theme.Fonts.fontSemiBold,
            fontSize: theme.Sizes.F14,
            color: theme.Colors.white,
          }}>
          Bill Smith #1025
        </Text>
      </HeaderComponent>
    );
  };

  // Chat
  const renderChat = () => {
    return (
      <Container>
        {/* Chat One */}
        <Container style={{marginHorizontal: theme.Sizes.S14 * 2}}>
          <Container
            color="gray2"
            middle
            style={{
              marginRight: theme.Sizes.S14 * 6,
              marginTop: theme.Sizes.S14 * 2,
              height: theme.Sizes.height / 12,
              borderRadius: theme.Sizes.radius,
              borderBottomLeftRadius: 0,
            }}>
            <Text
              style={{
                ...theme.Fonts.fontRegular,
                marginHorizontal: theme.Sizes.S14 * 1.5,
                color: theme.Colors.black2,
              }}>
              Coming to clean carpet
            </Text>
          </Container>
          <Container
            style={{
              marginTop: theme.Sizes.S10,
            }}>
            <Text
              style={{...theme.Fonts.fontRegular, color: theme.Colors.black2}}>
              18:11
            </Text>
          </Container>
        </Container>

        {/* Chat Two */}
        <Container
          style={{
            marginHorizontal: theme.Sizes.S14 * 2,
            alignItems: 'flex-end',
          }}>
          <Container
            color="blue2"
            middle
            style={{
              marginLeft: theme.Sizes.S14 * 2,
              marginTop: theme.Sizes.S14 * 2,
              height: theme.Sizes.height / 12,
              borderRadius: theme.Sizes.radius,
              borderBottomRightRadius: 0,
            }}>
            <Text
              style={{
                ...theme.Fonts.fontRegular,
                marginHorizontal: theme.Sizes.S14 * 2,
                color: theme.Colors.white,
              }}>
              the printing and typesetting industry It is a long established
              fact that
            </Text>
          </Container>
          <Container
            style={{
              marginTop: theme.Sizes.S10,
            }}>
            <Text
              style={{...theme.Fonts.fontRegular, color: theme.Colors.black2}}>
              18:11
            </Text>
          </Container>
        </Container>

        {/* Chat Three */}
        <Container style={{marginHorizontal: theme.Sizes.S14 * 2}}>
          <Container
            color="gray2"
            middle
            style={{
              width: theme.Sizes.width / 6,
              marginTop: theme.Sizes.S14 * 2,
              height: theme.Sizes.height / 12,
              borderRadius: theme.Sizes.radius,
              borderBottomLeftRadius: 0,
            }}>
            <Text
              style={{
                ...theme.Fonts.fontRegular,
                marginHorizontal: theme.Sizes.S14 * 1.5,
                color: theme.Colors.black2,
              }}>
              Yes
            </Text>
          </Container>
          <Container
            style={{
              marginTop: theme.Sizes.S10,
            }}>
            <Text
              style={{...theme.Fonts.fontRegular, color: theme.Colors.black2}}>
              18:12
            </Text>
          </Container>
        </Container>

        {/* Chat Four */}
        <Container
          style={{
            marginHorizontal: theme.Sizes.S14 * 2,
            alignItems: 'flex-end',
          }}>
          <Container
            color="blue2"
            middle
            style={{
              width: theme.Sizes.width / 5,
              marginTop: theme.Sizes.S14 * 2,
              height: theme.Sizes.height / 12,
              borderRadius: theme.Sizes.radius,
              borderBottomRightRadius: 0,
            }}>
            <Text
              style={{
                ...theme.Fonts.fontRegular,
                marginHorizontal: theme.Sizes.S14 * 2,
                color: theme.Colors.white,
              }}>
              Ok
            </Text>
          </Container>
          <Container
            style={{
              marginTop: theme.Sizes.S10,
            }}>
            <Text
              style={{...theme.Fonts.fontRegular, color: theme.Colors.black2}}>
              18:13
            </Text>
          </Container>
        </Container>
      </Container>
    );
  };

  //   Bottom Button
  const renderChatTextInput = () => {
    return (
      <Container
        flex={false}
        middle
        color="gray2"
        style={{
          height: theme.Sizes.height / 12,
        }}>
        <Container
          flex={false}
          color="white"
          row
          middle
          center
          style={{
            borderRadius: theme.Sizes.radius,
            marginHorizontal: theme.Sizes.S10 * 3,
            borderWidth: moderateScale(0.8),
          }}>
          <TextInputComponent
            style={{
              borderWidth: 0,
              paddingHorizontal: 0,
              flex: 0.9,
            }}
            multiline
            placeholderTextColor={theme.Colors.gray}
            placeholder="Type your message here..."
            value={text}
            onChangeText={value => setText(value)}
          />
          <Container flex={false}>
            <IonIcons
              name="md-send"
              size={moderateScale(24)}
              color={theme.Colors.blue}
            />
          </Container>
        </Container>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView>{renderChat()}</ScrollView>
      {renderChatTextInput()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default Chat;
