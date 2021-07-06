import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text} from 'react-native';
import {theme, constants} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Container, TextInputComponent} from '../../components';
import {register} from '../../apis';
import Loader from '../../components/Loader';

const Register = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailInputHandler = inputText => {
    setEmail(inputText);
  };

  const passwordInputHandler = inputText => {
    setPassword(inputText);
  };

  const confirmPasswordInputHandler = inputText => {
    setConfirmPassword(inputText);
  };

  const submit = () => {
    Keyboard.dismiss();
  };
  //   inputs
  const renderTextInputs = () => {
    return (
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

        <TextInputComponent
          label="Password"
          mode="outlined"
          value={password}
          onChangeText={passwordInputHandler}
          placeholder="please enter password"
          onSubmitEditing={submit}
          secureTextEntry
          style={{
            marginTop: theme.Sizes.S14,
          }}
        />

        <TextInputComponent
          label="Confirm Password"
          mode="outlined"
          value={confirmPassword}
          onChangeText={confirmPasswordInputHandler}
          placeholder="please enter confirm password"
          onSubmitEditing={submit}
          secureTextEntry
          style={{
            marginTop: theme.Sizes.S14,
          }}
        />
      </Container>
    );
  };

  const registerUser = async () => {
    if (email === '') {
      constants.showToast('Error', 'Please enter email');
      return;
    }

    if (password === '') {
      constants.showToast('Error', 'Please enter password');
      return;
    }

    if (confirmPassword === '') {
      constants.showToast('Error', 'Please Enter Confirm Password');
      return;
    }

    if (password !== confirmPassword) {
      constants.showToast(
        'Error',
        "Password didn't matched please enter correct password",
      );
      return;
    }

    if (constants.isEmailInvalid(email)) {
      constants.showToast('Error', 'Please enter a valid email');
      return;
    }

    setLoading(true);
    const data = {email: email, password: password};

    let result = await register(data);

    if (result.status === '200') {
      constants.showToast('Success', result.message, 'success');
      navigation.goBack();
    } else {
      constants.showToast(
        'Error',
        result.errors.email[0] ? result.errors.email[0] : result.message,
      );
    }

    setLoading(false);
  };

  //   Button
  const renderButton = () => {
    return (
      <ButtonComponent
        mode="contained"
        uppercase={false}
        onPress={registerUser}
        style={{
          marginTop: theme.Sizes.S14,
          marginHorizontal: theme.Sizes.S14 * 3,
        }}>
        {loading ? (
          <Loader color={'white'} />
        ) : (
          <Text style={{fontSize: theme.Sizes.F18}}>Register</Text>
        )}
      </ButtonComponent>
    );
  };

  // Login Button
  const renderLoginButton = () => {
    return (
      <Container
        flex={false}
        row
        center
        middle
        style={{
          marginTop: theme.Sizes.S10 / 2,
        }}>
        <Text
          style={{
            ...theme.Fonts.fontBold,
            fontSize: theme.Sizes.F14,
            color: theme.Colors.black,
          }}>
          Already have an account?
        </Text>

        <ButtonComponent
          mode="text"
          uppercase={false}
          contentStyle={{
            height: theme.Sizes.S14 * 2,
          }}
          labelStyle={{
            fontSize: theme.Sizes.F12,
            marginVertical: theme.Sizes.S10 / 2.5,
            marginHorizontal: theme.Sizes.S10 / 2,
          }}
          onPress={() => navigation.navigate('Login')}>
          Login
        </ButtonComponent>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderTextInputs()}
      {renderButton()}
      {renderLoginButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.white,
    justifyContent: 'center',
  },
});

export default Register;
