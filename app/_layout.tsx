import { Stack } from "expo-router"

const RootLayout = () => {

  return (
    <Stack>
        <Stack.Screen 
        name='index'
        options={{
            headerTitle: 'Home',
            headerShown: false,
            headerStyle:{
                backgroundColor: '#DDD'
            }
        }}
        />
        <Stack.Screen name='article/index'
        options={{
            headerTitle: 'Article',
            headerShown: true,
            headerStyle:{
                backgroundColor: '#CCD'
            }
        }}
        />
        <Stack.Screen name='article/[id]'
        options={{
            headerTitle: 'Article with ID',
            headerShown: false,
            headerStyle:{
                backgroundColor: '#DCC'
            }
        }}
        />
    </Stack>
  )
}

export default RootLayout