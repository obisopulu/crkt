import { View, Text } from "react-native"
import { Link } from "expo-router"

const UsersPage = () => {
  return (
    <View>
        <Text>Users Page</Text>
        <Link href='/'>Home Page</Link>
    </View>
  )
}

export default UsersPage