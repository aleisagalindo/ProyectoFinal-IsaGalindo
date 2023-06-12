import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import React, { useCallback, useReducer, useState, useEffect } from "react";
import { signUp } from "../store/actions/auth.action";
import Input from "../components/Input";


const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  console.log(action);
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    };
  }
  return state;
};

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      Alert.alert("A ocurrido un error", error, [{ text: "Ok" }]);
    }
  }, [error]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    //dispatch(signup(email, password))
    if (formState.formIsValid) {
      dispatch(
        signUp(formState.inputValues.email, formState.inputValues.password)
      );
    } else {
      Alert.alert("formulaio invalido", "Ingresa email y usuario valido", [
        { text: "ok" },
      ]);
    }
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      console.log(inputIdentifier, inputValue, inputValidity);
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <View className="flex h-full pt-[45]">
      <View style={styles.container}>
        <Pressable
          className="items-end mt-4 mr-4"
          onPress={() => navigation.navigate("Select Commission Screen")}
        >
          <Text style={styles.fontFamily} className="text-white">
            SKIP
          </Text>
        </Pressable>
        <Text
          style={styles.principalText}
          className="flex justify-start text-5xl mt-[120] ml-5"
        >
          Hello!
        </Text>
        <View className="mt-[40] ml-5">
          <Input
            id="email"
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            requiered
            email
            errorText={"Please enter a valid email"}
            onInputChange={onInputChangeHandler}
            initialValue=""
            placeholder=" Email"
            style={styles.fontFamily}
          />
          <Input
            id="password"
            label="Password"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            requiered
            password
            secureTextEntry
            errorText={"Please enter a valid password"}
            onInputChange={onInputChangeHandler}
            initialValue=""
            placeholder=" Password"
            style={styles.fontFamily}
          />
        </View>
        <View className="mt-[40]">
          <Pressable className="items-end mr-5">
            <Text style={styles.fontFamily} className="text-gray-400">
              Forgot Password?
            </Text>
          </Pressable>
          <Pressable className="mt-6 ml-5 mr-5 p-4 rounded-xl bg-white active:bg-gray-300">
            <Text style={styles.fontFamily} className="text-center">
              Login
            </Text>
          </Pressable>
          <Pressable
            className="mt-4 ml-5 mr-5 p-4 rounded-xl bg-pink-400 active:bg-pink-500"
            onPress={handleSignUp}
          >
            <Text style={styles.fontFamily} className="text-center text-white">
              Register
            </Text>
          </Pressable>
          <Pressable className="text-center active:text-white">
            <Text
              style={styles.fontFamily}
              className="text-gray-400 text-center mt-10 "
            >
              Sign Up with Google
            </Text>
          </Pressable>

          <Text
            style={styles.fontFamily}
            className="text-gray-400 text-center mt-4"
          >
            Sign Up with Facebook
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  principalText: {
    fontFamily: "PoppinsMedium",
    color: "white",
  },
  fontFamily: {
    fontFamily: "PoppinsSemiBold",
  },
});

export default LoginScreen;
