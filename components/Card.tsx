import { View, StyleSheet, Image, Pressable } from 'react-native';
import { router } from "expo-router"
import MyText from "./MyText"

interface CardProps {
  data: object
}

const Card = ({ data }: CardProps) => {
  return (
    <View style={styles.background}>
      <Pressable onPress={() => router.push({
        pathname: '/article/[id]',
        params: { id: 2 }
      })}>
        <View style={styles.top}>
          <View style={styles.date}>
            <MyText style='cardDate'>
              27. 1
            </MyText>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/images/img_musk.jpg')} style={styles.image} />
          </View>
        </View>
        <MyText style='cardTitle'>
          Elon Musk claims X has less antisemitic content than peers ...
        </MyText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    borderRadius: 20,
    width: '90%',
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 20,
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.5)'
  },
  top: {
    height: 150,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  date: {
    borderTopLeftRadius: 20,
    width: '55%',
    padding: 20,
  },
  imageContainer: {
    borderTopRightRadius: 20,
    width: '45%',
  },
  image: {
    borderTopRightRadius: 20,
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
});

export default Card;