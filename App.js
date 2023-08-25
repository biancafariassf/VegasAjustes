import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import StackNavigator from './StackNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  GoogleSignin.configure({
    webClientId: '368636805346-1hnchau5rpfhf80lfh72vosrfm24dnn6.apps.googleusercontent.com',
  });

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  async function signOut() {
    await auth().signOut();
    await GoogleSignin.signOut();
    setUser(null);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <StatusBar style="light" />
      {user ? (
        <View>
          <Text style={{ fontSize: 30, color: 'white' }}>Welcome {user.email}</Text>
          <Button title="Sign Out" onPress={signOut} />
        </View>
      ) : (
        <StackNavigator />
      )}
    </View>
  );
}

export default App;
