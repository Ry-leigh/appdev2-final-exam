import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      {/* 1. Header Section */}
      <View style={styles.header}>
        <Image
          source={require("./../assets/signup.webp")}
          style={styles.image}
        />
      </View>

      {/* 2. Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="John Doe" />

        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} placeholder="john@gmail.com" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="********" />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-google" size={30} color="#DB4437" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-apple" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-facebook" size={30} color="#4267B2" />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.linkText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7D7AFF',
    paddingTop: 40,
  },
  header: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  image: {
    width: '80%',
    height: '70%',
  },
  formContainer: {
    flex: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 30,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 15,
    fontSize: 16,
  },
  forgotText: {
    textAlign: 'right',
    marginTop: 10,
    color: '#666',
  },
  loginButton: {
    backgroundColor: '#FFCC00',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialIcon: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  linkText: {
    color: '#FFCC00',
    fontWeight: 'bold',
  },
});