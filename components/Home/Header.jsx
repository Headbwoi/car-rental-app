import { View, Text, Image } from "react-native"
import React from "react"
import { ChevronDown, MapPin } from "lucide-react-native"

const Header = () => {
  return (
    <View className="px-5 pt-3 flex flow-row justify-between  ">
      <View className="flex flex-row justify-between">
        <View className="flex items-center flex-row gap-5">
          {/* icon */}
          <View className="bg-white h-12 w-12 flex items-center justify-center rounded-lg">
            <MapPin className="text-gray-600" />
          </View>

          {/* names */}
          <View>
            <Text className="text-gray-500">Your Location </Text>

            <View className="flex flex-row items-center gap-2">
              <Text className="text-gray-700 font-semibold text-lg">
                Jessica Nwa
              </Text>
              <ChevronDown className="text-gray-700" width={16} />
            </View>
          </View>
        </View>

        <Image
          source={require("../../assets/images/profile.jpg")}
          className="w-11 h-11 rounded-lg flex"
        />
      </View>
    </View>
  )
}

export default Header
