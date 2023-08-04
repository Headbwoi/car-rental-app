import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import { HomeIcon, UserCircle2 } from "lucide-react-native"

const Tab = createBottomTabNavigator()

const Icons = {
  home: <HomeIcon />,
  profile: <UserCircle2 />,
}

function TabNav({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "HomeScreen") {
            // iconName = focused ? "home" : "home"
            iconName = "home"
          } else if (route.name === "Profile") {
            iconName = "profile"
          }

          // You can return any component that you like here!
          return Icons[iconName]
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
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
