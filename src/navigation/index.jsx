import { View, Text } from 'react-native'
import React, { useState } from 'react'
import PlatformNavigator from './PlatformNavigator';
import AuthNavigator from './AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const index = () => {
const userId = useSelector(state => state.auth.userId)

  return (
    <NavigationContainer>
        {userId ? <PlatformNavigator/> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default index