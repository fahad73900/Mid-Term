import { useState } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      navigation.replace("Home");
    } else {
      alert("Please enter your email and password!");
    }
  };

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" }}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor={colors.gray}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.gray}
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    backgroundColor: "rgba(255,255,255,0.9)",
    marginHorizontal: 20,
    padding: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    color: colors.gray,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
