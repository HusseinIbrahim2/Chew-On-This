import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealRecipeScreen from './screens/MealRecipeScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#440000ff' },
        headerTintColor: '#ffffff',
        sceneContainerStyle: { backgroundColor: '#323330' },
      }}>
      <Drawer.Screen
        name="AllCategories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#f9f5f5',
        }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
        headerStyle: { backgroundColor: '#440000ff' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#323330' }
         }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={MyDrawer}
            options={{
              headerShown : false
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealRecipe" component={MealRecipeScreen} options={{ title: 'Meal Recipe' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
});
