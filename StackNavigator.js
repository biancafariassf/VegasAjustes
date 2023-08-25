import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import SavedScreen from './screens/SavedScreen';
import AudioScreen from './screens/AudioScreen';
import Carousel from './components/Carousel'; // Importe o componente Carousel
import HotelScreen from './screens/HotelScreen';
import ComercioScreen from './screens/ComercioScreen';
import ZonaPerigoScreen from './screens/ZonaPerigoScreen';
import ConverterScreen from './screens/ConverterScreen';
import PlacaScreen from './screens/PlacaScreen';
import HotelCrud from './screens/HotelCrud';
import PontoturisticoCrud from './screens/PontoturisticoCrud';
import TransporteCrud from './screens/TransporteCrud';
import PlacasCrud from './screens/PlacasCrud';
import ComercioCrud from './screens/ComercioCrud';
import PacotesCrud from './screens/PacotesCrud';
import ZonaPerigoCrud from './screens/ZonaPerigoCrud';
import PacotesScreen from './screens/PacotesScreen';
import AdminScreen from './screens/AdminScreen';

import TransporteScreen from './screens/TransporteScreen';
import PontoTuristicoScreen from './screens/PontoTuristicoScreen';
//import Inicializar from './Inicializar';
import EntrarScreen from './screens/EntrarScreen';
import OpcoesScreen from './screens/OpcoesScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('TabBar');
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Inicio.png')} style={styles.logo} />
    </View>
  );
}

// Componente que representa a TabBar
function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#B4C1FC' },
        tabBarLabelStyle: { color: 'white' },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        headerShown: false, 
      }}
    >
      {/* Defina as abas aqui */}
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (focused ? <Ionicons name="airplane-sharp" size={24} color="#3865E0" /> : <Ionicons name="airplane-outline" size={24} color="#3865E0" />),
        }}
      />
      <Tab.Screen
        name="Roteiro"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Roteiro',
          tabBarIcon: ({ focused }) => (focused ? <MaterialCommunityIcons name="bag-suitcase" size={24} color="#3865E0" /> : <MaterialCommunityIcons name="bag-suitcase-outline" size={24} color="#3865E0" />),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={EntrarScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (focused ? <Ionicons name="person" size={24} color="#3865E0" /> : <Ionicons name="person-outline" size={24} color="#3865E0" />),
        }}
      />
    </Tab.Navigator>
  );
}

// Componente que representa o StackNavigator para a aba 
function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AudioScreen" component={AudioScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HotelScreen" component={HotelScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PacotesScreen" component={PacotesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ComercioScreen" component={ComercioScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ZonaPerigoScreen" component={ZonaPerigoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ConverterScreen" component={ConverterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PlacaScreen" component={PlacaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AdminScreen" component={AdminScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TransporteScreen" component={TransporteScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PontoTuristicoScreen" component={PontoTuristicoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EntrarScreen" component={EntrarScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OpcoesScreen" component={OpcoesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SavedScreen" component={SavedScreen} options={{ headerShown: false }} />
      
     
      <Stack.Screen name="HotelCrud" component={HotelCrud} />
        <Stack.Screen name="PontoturisticoCrud" component={PontoturisticoCrud} />
        <Stack.Screen name="TransporteCrud" component={TransporteCrud} />
        <Stack.Screen name="PlacasCrud" component={PlacasCrud} />
        <Stack.Screen name="ComercioCrud" component={ComercioCrud} />
        <Stack.Screen name="PacotesCrud" component={PacotesCrud} />
        <Stack.Screen name="ZonaPerigoCrud" component={ZonaPerigoCrud} />

    </Stack.Navigator>
  );
}
function Inicio() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Inicio;