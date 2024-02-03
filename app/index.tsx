import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Link, router } from "expo-router"
import WeatherWidget from "../components/WeatherWidget"
import ShadowText from "../components/ShadowText"
import MyText from "../components/MyText"
import Card from "../components/Card"
import { COLOR } from "../utils/constants";

const HomePage = () => {

  let cardData = {}
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
      <Card data={cardData} />
      <Card data={cardData} />
      <Link href='/article'>Article</Link>
      <Link href='/article/1'>Article with ID</Link>
      <Pressable onPress={() => router.push({
        pathname: '/article/[id]',
        params: { id: 2 }
      })}>
        <Text>Go to Article 2</Text>
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