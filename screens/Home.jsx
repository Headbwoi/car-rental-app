import { View, Text, Image, ScrollView, StatusBar } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../components/Home/Header"
import Search from "../components/Home/Search"
import { useState } from "react"
import TopBrands from "../components/Home/TopBrands"
import NearYou from "../components/Home/NearYou"

const Home = () => {
  const [searchText, setSearchText] = useState("")

  return (
    <>
      <ScrollView className="" showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="white" />
        <SafeAreaView className="flex-1 bg-gray-300 ">
          <Header />

          <Text className="px-5 text-4xl font-semibold text-black py-7">
            Find your Favourite Vehicle.{" "}
          </Text>

          <View className="relative w-full h-full bg-white rounded-t-3xl mt-14">
            <View className="flex items-center">
              <Search searchText={searchText} setSearchText={setSearchText} />
            </View>

            <View className="flex flex-row justify-between px-5 pt-10 mb-5">
              <Text className="text-xl font-bold">Top Brands</Text>
              <Text className="text-blue-600">See All</Text>
            </View>

            {/* tob brands */}
            <View>
              <TopBrands />
            </View>

            <View className="flex flex-row justify-between px-5 pt-10 mb-5">
              <Text className="text-xl font-bold">Available Near you</Text>
              <Text className="text-blue-600">See All</Text>
            </View>

            {/* available near you */}
            <View className="pb-20">
              <NearYou />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

export default Home
