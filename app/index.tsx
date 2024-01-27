import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Link, router } from "expo-router"
import WeatherWidget from "../components/WeatherWidget"
import ShadowText from "../components/ShadowText"
import MyText from "../components/MyText"
import { COLOR } from "../utils/constants";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ShadowText />
      <WeatherWidget weather='snow' />
      <MyText style='title'>
        CRICKET
      </MyText>
      <MyText style='catchPhrase'>
        Pocket-sized intel
      </MyText>
      <Link href='/users'>Users</Link>
      <Link href='/users/1'>User with ID</Link>
      <Pressable onPress={() => router.push({
        pathname: '/users/[id]',
        params: { id: 2 }
      })}>
        <Text>Go to User 2</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLOR.theme,
    paddingTop: 70,
  },
});

export default HomePage