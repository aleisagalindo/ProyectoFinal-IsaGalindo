import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommissionGroupSelectedScreen from "../screens/CommissionGroupSelectedScreen";

const Stack = createNativeStackNavigator();

export default CommissionNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Selected Commission Group Home" component={CommissionGroupSelectedScreen} />
        </Stack.Navigator>
    )
}