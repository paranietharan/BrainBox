import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Redirect, router } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image 
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to EduApp</Text>
      <Text style={styles.subtitle}>
        Your gateway to personalized learning experiences.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/sign-in")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>


      {/* for dev purposes. to go to home page */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
        <Text style={styles.buttonText}>Dev</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});