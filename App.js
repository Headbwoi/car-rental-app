import { StatusBar } from "expo-status-bar"

import { NavigationContainer } from "@react-navigation/native"
import { StackNav } from "./navigators/StackNav"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNav />
    </NavigationContainer>
  )
}
