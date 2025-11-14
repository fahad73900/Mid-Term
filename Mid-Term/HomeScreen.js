import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import colors from "../constants/colors";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" }}
        style={styles.hero}
        blurRadius={2}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Welcome to Abasyn University</Text>
          <Text style={styles.heroSubtitle}>
            Inspiring Minds • Shaping Futures
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Programs")}
        >
          <Text style={styles.cardTitle}>Programs & Departments</Text>
          <Text style={styles.cardSubtitle}>View undergraduate & graduate programs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Admissions")}
        >
          <Text style={styles.cardTitle}>Admissions</Text>
          <Text style={styles.cardSubtitle}>Apply online or check admission criteria</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("News")}
        >
          <Text style={styles.cardTitle}>News & Events</Text>
          <Text style={styles.cardSubtitle}>Stay updated with campus happenings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Contact Us: Ring Road (Charsadda Link), Peshawar • +92-091-2582996 & 2582835
        </Text>
        <Text style={styles.footerText}>
          Email: registrar@abasyn.edu.pk
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  hero: {
    height: 220,
    justifyContent: "center",
  },
  heroOverlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 28,
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    color: colors.primary,
    marginBottom: 12,
    fontWeight: "600",
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    color: colors.text,
    fontWeight: "600",
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    color: colors.gray,
  },
  footer: {
    padding: 20,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: colors.gray,
    textAlign: "center",
    marginBottom: 4,
  },
});
