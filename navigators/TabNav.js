import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator()

function TabNav({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "HomeScreen") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline"
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
              key={iconName}
            />
          )
        },
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
          backgroundColor: "#fff",
          borderRadius: 20,
          marginBottom: 20,
          marginHorizontal: 10,
          position: "absolute",
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => null,
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNav
