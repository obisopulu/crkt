import React, { ReactNode } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { COLOR } from "../utils/constants";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

interface MyTextProps {
  children: ReactNode;
  style?: string;
}

const MyText: React.FC<MyTextProps> = ({ children, style }) => {

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
    fontFamily: 'Inter',
    fontWeight: '900',
    color: COLOR.dark,
    fontSize: 48,
  },
  title: {
    fontWeight: '900',
    color: COLOR.dark,
    fontSize: 48,
  },
  catchPhrase: {
    fontWeight: '100',
    color: COLOR.dark,
    fontSize: 18,
  },
  cardDate: {
    fontWeight: '900',
    color: COLOR.dark,
    fontSize: 48,
  },
  cardTitle: {
    fontWeight: '900',
    color: COLOR.dark,
    fontSize: 48,
  },
});
export default MyText;