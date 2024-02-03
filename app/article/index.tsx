import { View, Text } from "react-native"
import { Link } from "expo-router"

const ArticlePage = () => {
  return (
    <View>
        <Text>Article Page</Text>
        <Link href='/'>Home Page</Link>
    </View>
  )
}

export default ArticlePage