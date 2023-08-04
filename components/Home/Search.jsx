import { SearchIcon } from "lucide-react-native"
import { View, Text, TextInput } from "react-native"

const Search = ({ searchText, setSearchText }) => {
  return (
    <View className="absolute h-14 bg-white rounded-full shadow-2xl shadow-gray-950 -top-10 w-[85%]  ">
      <View className="relative w-full h-full pl-14">
        <SearchIcon className="absolute text-gray-600 top-4 left-5" />
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search vehicle"
          className="w-full h-full font-semibold text-black placeholder:text-gray-500 caret-blue-500"
        />
      </View>
    </View>
  )
}

export default Search
