import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealRecipeScreen from './screens/MealRecipeScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={CategoriesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='MealsCategories'
          screenOptions={{
            headerStyle: { backgroundColor: '#440000ff' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#323330' },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={MyDrawer}
            options={{
              title: 'All Categories',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTintColor: 'white',
            }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealRecipe" component={MealRecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
});
