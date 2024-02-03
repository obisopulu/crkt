import React, { ReactNode, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { COLOR } from "../utils/constants";

interface MyTextProps {
  children: ReactNode;
  style?: string;
}

const MyText: React.FC<MyTextProps> = ({ children, style }) => {

  const [fontsLoaded] = useFonts({
    'interBlack': require('../assets/font/interBlack.ttf'),
    'interBold': require('../assets/font/interBold.ttf'),
    'interExtraBold': require('../assets/font/interExtraBold.ttf'),
    'interExtraLight': require('../assets/font/interExtraLight.ttf'),
    'interThin': require('../assets/font/interThin.ttf'),
    'interSemiBold': require('../assets/font/interSemiBold.ttf'),
    'interRegular': require('../assets/font/interRegular.ttf'),
    'interMedium': require('../assets/font/interMedium.ttf'),
    'interLight': require('../assets/font/interLight.ttf')
  })

  useEffect(() => {
    const prepare = async (): Promise<void> => {
      await SplashScreen.preventAutoHideAsync()
    }

    prepare()
  }, [])

  if(!fontsLoaded){
    return undefined
  }else{
    SplashScreen.hideAsync()
  }
  let content;
  
  switch (style) {
    case 'title':
      content = <Text style={styles.title}>{children}</Text>;
      break;
    case 'catchPhrase':
      content = <Text style={styles.catchPhrase}>{children}</Text>;
      break;
    case 'cardDate':
      content = <Text style={styles.cardDate}>{children}</Text>;
      break;
    case 'cardTitle':
      content = <Text style={styles.cardTitle}>{children}</Text>;
      break;
    default:
      content = <Text style={styles.text}>{children}</Text>;
      break;
  }
  
  return (
    <View>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'interBlack',
    color: COLOR.dark,
    fontSize: 48,
  },
  title: {
    marginTop: 50,
    fontFamily: 'interBlack',
    color: COLOR.dark,
    fontSize: 68,
  },
  catchPhrase: {
    fontFamily: 'interExtraLight',
    color: COLOR.dark,
    fontSize: 20,
  },
  cardDate: {
    fontFamily: 'interBold',
    color: COLOR.theme,
    fontSize: 64,
  },
  cardTitle: {
    padding: 20,
    fontFamily: 'interBold',
    color: 'white',
    fontSize: 32,
  },
});
export default MyText;