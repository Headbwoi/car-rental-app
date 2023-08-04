import { View, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../components/Home/Header"

const Home = () => {
  return (
    <View className="bg-gray-300 flex-1">
      <SafeAreaView>
        <Header />

        <Text className="text-4xl text-black font-semibold px-5 py-7">
          Find your Favourite Vehicle.{" "}
        </Text>
      </SafeAreaView>
    </View>
  )
}

export default Home
