import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text} from 'react-native';
import {theme, constants} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Container, TextInputComponent} from '../../components';
import {userActions} from '../../redux/actions';
import {login} from '../../apis';
import Loader from '../../components/Loader';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInputHandler = inputText => {
    setEmail(inputText);
  };

  const passwordInputHandler = inputText => {
    setPassword(inputText);
  };

  const submit = () => {
    Keyboard.dismiss();
  };

  const renderTextInput = () => {
    return (
      <Container
        flex={false}
        style={{
          marginHorizontal: theme.Sizes.S14 * 4,
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
      </Container>
    );
  };

  const loginUser = async () => {
    if (email === '') {
      constants.showToast('Error', 'Please enter your email');
      return;
    }

    if (password === '') {
      constants.showToast('Error', 'Please enter your password');
      return;
    }

    setLoading(true);
    const data = {email: email, password: password};
    let result = await login(data);
    console.log('result', result);
    if (result.status === '200') {
      constants.showToast('Success', 'User logged in successfully', 'success');
      dispatch(userActions.setUserModel(result.user_data));
      navigation.navigate('Start');
      navigation.navigate('ServiceProviderDashboard');
    } else {
      constants.showToast('Error', result.message);
    }
    setLoading(false);
  };

  const renderButton = () => {
    return (
      <ButtonComponent
        disabled={loading}
        mode="contained"
        onPress={loginUser}
        style={{
          marginTop: theme.Sizes.S14,
          marginHorizontal: theme.Sizes.S14 * 4,
        }}>
        {loading ? (
          <Loader color={'white'} />
        ) : (
          <Text style={{fontSize: theme.Sizes.F18}}>Login</Text>
        )}
      </ButtonComponent>
    );
  };
  console.log('Loading', loading);

  const renderRegisterForgotPasswordButtons = () => {
    return (
      <Container
        flex={false}
        row
        center
        style={{
          marginHorizontal: theme.Sizes.S14 * 4,
          marginTop: theme.Sizes.S10,
        }}>
        <ButtonComponent
          mode="text"
          contentStyle={{
            height: theme.Sizes.S14 * 2,
          }}
          labelStyle={{
            fontSize: theme.Sizes.F12,
            marginVertical: theme.Sizes.S10 / 2.5,
            marginHorizontal: theme.Sizes.S10 / 2,
          }}
          onPress={() => navigation.navigate('Register')}>
          Register
        </ButtonComponent>

        <Container />

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
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password?
        </ButtonComponent>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderTextInput()}
      {renderButton()}
      {renderRegisterForgotPasswordButtons()}
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

export default Login;
