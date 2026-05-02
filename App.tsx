import { ConvexProvider, ConvexReactClient } from "convex/react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, Text } from "react-native"; // For a fallback UI

import TodoScreen from "./screens/TodoScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { Id } from "./convex/_generated/dataModel";

// 1. Cleanest possible client initialization
const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!);

const Stack = createNativeStackNavigator();

export default function App() {
  const [userId, setUserId] = useState<Id<"users"> | null>(null);

  // Define the login handler
  const handleLogin = (id: Id<"users">) => setUserId(id);

  return (
    <ConvexProvider client={convex}>
      <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{ 
                headerShown: false // Explicit boolean
            }}
        >
          {userId ? (
            // Authenticated Stack
            <Stack.Screen name="Todo">
                {/* Use a simple render prop here */}
                {(props) => <TodoScreen {...props} userId={userId} />}
            </Stack.Screen>
          ) : (
            // Unauthenticated Stack
            <>
              <Stack.Screen name="Login">
                {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
              </Stack.Screen>
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ConvexProvider>
  );
}