import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator()

export default  AuthNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Welcome Screen"
        >
        <Stack.Screen
        name="Welcome Screen"
        component={WelcomeScreen}
        options={{
            title: null,
            headerShown: false,
        }}
        />
        <Stack.Screen
        name="Login Screen"
        component={LoginScreen}
        options={{
            title: null,
            headerShown: false,
        }}
        />
        </Stack.Navigator>
        )
    }