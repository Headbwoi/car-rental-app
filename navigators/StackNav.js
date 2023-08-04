import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Welcome from "../screens/welcome"
import Profile from "../screens/Profile"
import Nav from "../screens/Nav"
const Stack = createNativeStackNavigator()

export function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Nav"
        component={Nav}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  )
}
