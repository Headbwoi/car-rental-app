import { View, Text, Image, Pressable } from "react-native"

const Welcome = ({ navigation }) => {
  return (
    <View className="relative flex-1">
      <Image
        source={require("../assets/images/welcome.webp")}
        className="object-scale-down w-full h-full"
      />

      <View className="absolute left-0 p-5 space-y-5 bottom-10">
        <Text className="text-4xl font-bold text-center text-white">
          Find and Rent Cars in easy steps
        </Text>

        <Pressable
          className={`h-14 w-full bg-blue-600 rounded-lg flex items-center justify-center`}
          onPress={() => {
            navigation.navigate("Nav")
          }}
        >
          <Text className="text-lg font-semibold text-white">Let's Go</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Welcome
