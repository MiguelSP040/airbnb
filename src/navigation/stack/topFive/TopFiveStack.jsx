import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopFive from '../../../modules/topFive/screens/TopFive';
const Stack = createStackNavigator();
export default function TopFiveStack() {

  return (
    <Stack.Navigator>
        <Stack.Screen name="TopFiveStack" component={TopFive} options={{title:"Top 5"}}/>
    </Stack.Navigator>
  )

  //Tiene muchas vistas
  //navigation -> stack -> screen
  //No tiene muchas vistas (solo una)
  //navigation -> screen
}