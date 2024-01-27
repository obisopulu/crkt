import { View, Text } from "react-native"
import { Link, useLocalSearchParams } from "expo-router"

const UserPage = () => {
const {id} = useLocalSearchParams<{ id: string }>();

  return (
    <View>
        <Text>User Page with ID - {id}</Text>
      <Link href='/'>Home Page</Link>
    </View>
  )
}

export default UserPage