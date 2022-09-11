import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='default' />
      <NavigationContainer  >
        <Stack.Navigator>
          <Stack.Screen
           name="MealsCategories"
            component={CategoriesScreen}
             options={{
              title:'All Categories',
              headerStyle:{
                backgroundColor:'#7a0821'
              },
              headerTitleStyle:{
                fontWeight:'bold',
              },
              headerTintColor: 'white',
              }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
});
