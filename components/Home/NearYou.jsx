import { View, Text, FlatList, Image } from "react-native"
import { carData } from "../../constants/cars"
import { Star } from "lucide-react-native"

const NearYou = () => {
  return (
    <>
      <FlatList
        data={carData}
        renderItem={({ item }) => {
          //   console.log(item)
          return (
            <View className="flex flex-col p-2 border border-gray-500 rounded-lg shadow-md w-68">
              <Image
                source={item.source}
                className="object-contain w-64 h-40 mx-auto rounded-lg"
              />
              <View className="py-2">
                <Text className="text-xl font-bold">{item.name}</Text>
              </View>
              <View className="flex flex-row justify-between">
                <View className="flex flex-row items-center gap-3">
                  <Star className="w-5 text-yellow-400" />
                  <Text>{item.reviewCount}+ Reviews</Text>
                </View>

                <View className="flex flex-row items-center">
                  <Text className="text-lg font-bold">{item.price}</Text>
                  <Text> / day</Text>
                </View>
              </View>
            </View>
          )
        }}
        keyExtractor={(item) => item.name}
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

export default NearYou
