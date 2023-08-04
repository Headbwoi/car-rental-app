import { View, Text, Pressable } from "react-native"
import React, { useState } from "react"
import { HomeIcon, UserCircle2 } from "lucide-react-native"
import { useNavigation } from "@react-navigation/native"

const CustomNav = () => {
  const [activeTab, setActiveTab] = useState(0)
  const navigation = useNavigation()

  return (
    <View className="absolute z-50 flex items-center w-full px-5 bottom-5">
      <View className="flex flex-row items-center justify-between w-full px-5 bg-white h-14 rounded-2xl">
        {/* <Text>CustomNav</Text> */}

        <Pressable
          onPress={() => {
            navigation.navigate("Home")
            setActiveTab(0)
          }}
        >
          <HomeIcon
            className={`${activeTab == 0 ? "text-red-500" : "text-gray-600"}`}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("Profile")
            setActiveTab(1)
          }}
        >
          <UserCircle2
            className={`${activeTab == 1 ? "text-red-500" : "text-gray-600"}`}
          />
        </Pressable>
      </View>
    </View>
  )
}

export default CustomNav
