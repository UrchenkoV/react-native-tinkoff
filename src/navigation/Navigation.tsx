import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ServicesScreen from "../screens/ServicesScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import SupportScreen from "../screens/SupportScreen";
import MoreScreen from "../screens/MoreScreen";
import AuthScreen from "../screens/AuthScreen";

import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import Footer from "../components/Footer";

const Stack = createStackNavigator();

export default function Navigation() {
  const { user } = useAuth();
  const ref = useNavigationContainerRef();
  const [routName, setRouteName] = React.useState<string | undefined>(
    undefined
  );

  React.useEffect(() => {
    const timeout = setTimeout(
      () => setRouteName(ref.getCurrentRoute()?.name),
      100
    );

    return () => clearTimeout(timeout);
  }, []);

  React.useEffect(() => {
    const listener = ref.addListener("state", () =>
      setRouteName(ref.getCurrentRoute()?.name)
    );

    return () => {
      ref.removeListener("state", listener);
    };
  }, []);

  return (
    <>
      <NavigationContainer ref={ref}>
        <Stack.Navigator
          screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
          {user ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Services" component={ServicesScreen} />
              <Stack.Screen name="Payments" component={PaymentsScreen} />
              <Stack.Screen name="Support" component={SupportScreen} />
              <Stack.Screen name="More" component={MoreScreen} />
            </>
          ) : (
            <Stack.Screen name="Auth" component={AuthScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>

      {user && routName && (
        <Footer navigate={ref.navigate} currentRoute={routName} />
      )}
    </>
  );
}
