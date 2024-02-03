import { View, Text } from "react-native"
import { Link, useLocalSearchParams } from "expo-router"

const ArticlePage = () => {
const {id} = useLocalSearchParams<{ id: string }>();

  return (
    <View>
        <Text>Article Page with ID - {id} - hbbj djfsdjkb fjkhdhs fhuiegui fsdjibf jksdbjfb sdjkbfjsdb jjsd fjsd</Text>
      <Link href='/'>Home Page xxx</Link>
    </View>
  )
}

export default ArticlePage