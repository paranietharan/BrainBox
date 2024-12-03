import React from 'react'
import { Stack } from 'expo-router'

const _Layout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ title: "Auth", headerShown: false }} />
    </Stack>
  )
}

export default _Layout