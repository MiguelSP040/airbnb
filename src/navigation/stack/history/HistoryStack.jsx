import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import History from '../../../modules/history/screens/History';
const Stack = createStackNavigator();
export default function HistoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HistoryStack" component={History} options={{title:"Historial"}}/>
    </Stack.Navigator>
  )
}