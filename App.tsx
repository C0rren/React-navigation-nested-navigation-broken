import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {StrictMode} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
// Create a LoginContext with a default value

const Stack = createStackNavigator();
const FirstStack = createStackNavigator();
const SecondStack = createStackNavigator();

const DetailsScreenONE = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen ONE</Text>
      <Pressable
        onPress={() => navigation.navigate('HomeOne')}
        style={{
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>GO TO HOME ONE, SAME STACK</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('StackTwo', {screen: 'HomeTwo'})}
        style={{
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>GO TO HOME TWO, OTHER STACK</Text>
      </Pressable>
    </View>
  );
};

const DetailsScreenTWO = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen TWO</Text>
      <Pressable
        onPress={() => navigation.navigate('HomeTwo')}
        style={{
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>
          GO TO HOME TWO, SAME STACK - THIS WILL NOT WORK
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('StackOne', {screen: 'HomeOne'})}
        style={{
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>GO TO HOME ONE, OTHER STACK</Text>
      </Pressable>
    </View>
  );
};

const HomeScreenONE = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>HOME SCREEN ONE </Text>
        <Pressable
          onPress={() => navigation.navigate('DetailsOne')}
          style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white'}}>GO TO DETAILS ONE, SAME STACK</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('StackTwo', {screen: 'DetailsTwo'})
          }
          style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white'}}>GO TO DETAILS TWO, OTHER STACK</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const HomeScreenTWO = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>HOME SCREEN TWO</Text>
        <Pressable
          onPress={() => navigation.navigate('DetailsTwo')}
          style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white'}}>GO TO DETAILS TWO, SAME STACK</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('StackOne', {screen: 'DetailsOne'})
          }
          style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white'}}>GO TO DETAILS ONE, OTHER STACK</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const StackOneNavigator = () => {
  return (
    <FirstStack.Navigator>
      <FirstStack.Screen name="HomeOne" component={HomeScreenONE} />
      <FirstStack.Screen name="DetailsOne" component={DetailsScreenONE} />
    </FirstStack.Navigator>
  );
};

const StackTwoNavigator = () => {
  return (
    <SecondStack.Navigator>
      <SecondStack.Screen name="HomeTwo" component={HomeScreenTWO} />
      <SecondStack.Screen name="DetailsTwo" component={DetailsScreenTWO} />
    </SecondStack.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <StrictMode>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="StackOne" component={StackOneNavigator} />
          <Stack.Screen name="StackTwo" component={StackTwoNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </StrictMode>
  );
}

export default App;
