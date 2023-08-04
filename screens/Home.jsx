import { View, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../components/Home/Header"
import Search from "../components/Home/Search"
import { useState } from "react"

const Home = () => {
  const [searchText, setSearchText] = useState("")

  return (
    <View className="flex-1 bg-gray-300 ">
      <SafeAreaView>
        <Header />

        <Text className="px-5 text-4xl font-semibold text-black py-7">
          Find your Favourite Vehicle.{" "}
        </Text>

        <View className="relative w-full h-full bg-white rounded-t-3xl mt-14">
          <View className="flex items-center">
            <Search searchText={searchText} setSearchText={setSearchText} />
          </View>

          <View className="flex flex-row justify-between px-5 pt-10">
            <Text className="text-xl font-bold">Top Brands</Text>
            <Text className="text-blue-600">See All</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home
