import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Container, TextInputComponent} from '../../components';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const emailInputHandler = inputText => {
    setEmail(inputText);
  };

  //   inputs
  const renderBody = () => {
    return (
      <Container middle>
        {/* textInput */}
        <Container
          flex={false}
          style={{
            marginHorizontal: theme.Sizes.S14 * 3,
          }}>
          <TextInputComponent
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={emailInputHandler}
            placeholder="please enter email"
          />
        </Container>

        {/* / button */}
        <Container flex={false} style={{marginHorizontal: theme.Sizes.S14 * 3}}>
          <ButtonComponent
            mode="contained"
            labelStyle={{
              fontSize: theme.Sizes.F16,
            }}
            onPress={() => {}}
            style={{
              marginTop: theme.Sizes.S14,
            }}>
            Reset Password
          </ButtonComponent>

          <ButtonComponent
            mode="contained"
            labelStyle={{
              fontSize: theme.Sizes.F16,
            }}
            onPress={() => navigation.goBack()}
            style={{
              marginTop: theme.Sizes.S14,
            }}>
            Go Back
          </ButtonComponent>
        </Container>
      </Container>
    );
  };

  return <SafeAreaView style={styles.container}>{renderBody()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
  },
});

export default ForgotPassword;
