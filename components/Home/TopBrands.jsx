import { View, FlatList, Image } from "react-native"
import React from "react"

let logos = [
  require("../../assets/logo/bmw-logo.png"),
  require("../../assets/logo/cadillac-logo.png"),
  require("../../assets/logo/chevrolet-logo.png"),
  require("../../assets/logo/ferrari-logo.png"),
  require("../../assets/logo/ford-logo.png"),
  require("../../assets/logo/hyundai-logo.png"),
  require("../../assets/logo/kia-logo.png"),
  require("../../assets/logo/lamborghini-logo.png"),
  require("../../assets/logo/nissan-logo.png"),
  require("../../assets/logo/peugeot-logo.png"),
  require("../../assets/logo/suzuki-logo.png"),
  require("../../assets/logo/tesla-logo.png"),
  require("../../assets/logo/toyota-logo.png"),
]

const TopBrands = () => {
  return (
    <>
      <FlatList
        data={logos}
        renderItem={({ item }) => (
          <View className="flex items-center justify-center w-20 h-20 border border-gray-500 rounded-lg shadow-md">
            <Image source={item} className="object-scale-down w-14 h-14" />
          </View>
        )}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 10,
          gap: 15,
          paddingBottom: 10,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
}

export default TopBrands
