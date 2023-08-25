import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'; // Importe a biblioteca de autenticação do Firebase
import { GoogleSignin } from '@react-native-google-signin/google-signin'; // Importe a biblioteca de login do Google
import { useEffect } from 'react';


const EntrarScreen = () => {
  const navigation = useNavigation();
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);

      // Após o login bem-sucedido, navegue para a próxima tela (ou realize outras ações)
      // Por exemplo, vou redirecionar para 'HomeScreen'
      navigation.navigate('SavedScreen');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Usuario}>Entre com Google para personalizar seu roteiro:</Text>

      <TouchableOpacity style={styles.button} onPress={handleGoogleSignIn}>
        <Image
          source={require('../assets/Google1.jpg')}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.adminButton} // Removendo a classe extra 'styles.button'
        onPress={() => navigation.navigate('AdminScreen')}
      >
        <Text style={styles.buttonTextAdmin}> Administrador </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1EFFF',
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  
  input: {
    backgroundColor:'#E9F0FC',
    color: '#B6B6B6',
    width: '80%',
    height: 50,
    //borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius:5,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 8,
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    backgroundColor: '#147DEB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    //fontWeight: 'bold',
  },
  Usuario: {
    marginTop:120,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 150,
    textAlign: 'center',

  },
  Admin: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '##147DEB'
  },
  
  adminButton: {
    borderRadius:5,
    padding:8,
    position: 'absolute',
    bottom: 20,
    right: 15,
    backgroundColor: '#F1EFFF', // Personalize as cores conforme necessário
  },
  buttonTextAdmin: {
color: '#147DEB',
fontSize: 17,
textDecorationLine:'underline',
textAlign: 'right',
fontWeight: 'bold',

  },
  buttonImage: {
    width: 20,
    height: 20,
    marginLeft: 15, // Espaço entre o texto e a imagem
    marginRight: 10,
    width: 33,
    height:33,
  },
  
});

export default EntrarScreen;