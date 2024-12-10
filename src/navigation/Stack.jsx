import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Recipe from '../screens/Recipe';
import BottomTab from './Bottomtab';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={BottomTab} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
};

export default MyStack;
