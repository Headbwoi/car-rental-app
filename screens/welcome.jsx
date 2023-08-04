import { View, Text, Image, Pressable } from "react-native"

const Welcome = ({ navigation }) => {
  return (
    <View className="flex-1 relative">
      <Image
        source={require("../assets/images/welcome.webp")}
        className="w-full h-full object-scale-down"
      />

      <View className="absolute bottom-10 left-0 p-5 space-y-5">
        <Text className="text-white font-bold text-4xl text-center">
          Find and Rent Cars in easy steps
        </Text>

        <Pressable
          className={`h-14 w-full bg-blue-600 rounded-lg flex items-center justify-center`}
          onPress={() => {
            navigation.navigate("Nav")
          }}
        >
          <Text className="font-semibold text-white text-lg">Let's Go</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Welcome
