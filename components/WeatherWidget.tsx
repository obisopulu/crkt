import { View, StyleSheet } from 'react-native';
import WeatherSunny from "../assets/icons/WeatherSunny";
import WeatherSnow from "../assets/icons/WeatherSnow";
import WeatherCloudy from "../assets/icons/WeatherCloudy";
import WeatherPartlyCloudy from "../assets/icons/WeatherPartlyCloudy";
import WeatherRain from "../assets/icons/WeatherRain";
import WeatherFog from "../assets/icons/WeatherFog";

interface WeatherWidgetProps {
  weather: string
}

const WeatherWidget = ({ weather }: WeatherWidgetProps) => {
  let content;
  switch (weather) {
    case 'fog':
      content = <WeatherSunny/>
      break;
    case 'snow':
      content = <WeatherSnow/>
      break;
    case 'cloudy':
      content = <WeatherCloudy/>
      break;
    case 'partly cloudy':
      content = <WeatherPartlyCloudy/>
      break;
    case 'rain':
      content = <WeatherRain/>
      break;
    case 'fog':
      content = <WeatherFog/>
      break;
    default:
      content = <WeatherCloudy/>
      break;
  }
  return (
    <View style={styles.background}>
      {content}
    </View>
  );
};
  

  const styles = StyleSheet.create({
    background: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: '100%',
      marginRight: 30,
    },
  });

export default WeatherWidget;