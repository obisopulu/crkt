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
        <Stack.Screen name='users/index'
        options={{
            headerTitle: 'Users',
            headerShown: true,
            headerStyle:{
                backgroundColor: '#CCD'
            }
        }}
        />
        <Stack.Screen name='users/[id]'
        options={{
            headerTitle: 'User with ID',
            headerShown: true,
            headerStyle:{
                backgroundColor: '#DCC'
            }
        }}
        />
    </Stack>
  )
}

export default RootLayout