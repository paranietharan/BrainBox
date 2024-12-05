import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.username}>John Doe</Text>
          <Text style={styles.subtitle}>Ready to continue learning?</Text>
        </View>
        <View style={styles.streakCard}>
          <Text style={styles.streakNumber}>🔥 7</Text>
          <Text style={styles.streakText}>Day Streak</Text>
        </View>
      </View>

      {/* Daily Goals */}
      <View style={styles.goalsSection}>
        <Text style={styles.sectionTitle}>Today's Goals</Text>
        <View style={styles.goalCard}>
          <View style={styles.goalProgress}>
            <View style={[styles.progressRing, { borderColor: '#4CAF50' }]}>
              <Text style={styles.progressText}>75%</Text>
            </View>
          </View>
          <View style={styles.goalInfo}>
            <Text style={styles.goalTitle}>Daily Learning Goal</Text>
            <Text style={styles.goalSubtitle}>45 mins left to reach 1 hour</Text>
          </View>
        </View>
      </View>

      {/* Learning Paths */}
      <View style={styles.pathsSection}>
        <Text style={styles.sectionTitle}>Your Learning Paths</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Frontend', 'Backend', 'Mobile Dev'].map((path, index) => (
            <TouchableOpacity key={index} style={styles.pathCard}>
              <View style={[styles.pathIcon, { backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1'][index] }]}>
                <Ionicons name={['layers', 'server', 'phone-portrait'].includes[index]} size={24} color="#fff" />
              </View>
              <Text style={styles.pathName}>{path}</Text>
              <Text style={styles.pathProgress}>In Progress</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Quick Tools */}
      <View style={styles.toolsSection}>
        <Text style={styles.sectionTitle}>Quick Tools</Text>
        <View style={styles.toolsGrid}>
          {[
            { name: 'Practice', icon: 'barbell' },
            { name: 'Flashcards', icon: 'card' },
            { name: 'Notes', icon: 'document-text' },
            { name: 'Community', icon: 'people' }
          ].map((tool, index) => (
            <TouchableOpacity key={index} style={styles.toolCard}>
              <Ionicons name={tool.icon} size={24} color="#007AFF" />
              <Text style={styles.toolName}>{tool.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  welcomeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2b2d42',
  },
  subtitle: {
    color: '#666',
    marginTop: 5,
  },
  streakCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF3E0',
    padding: 15,
    borderRadius: 12,
  },
  streakNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  streakText: {
    fontSize: 12,
    color: '#666',
  },
  goalsSection: {
    padding: 20,
  },
  goalCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  goalProgress: {
    marginRight: 15,
  },
  progressRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pathsSection: {
    padding: 20,
  },
  pathCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginRight: 15,
    width: width * 0.4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 5,
  },
  pathIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  pathName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pathProgress: {
    fontSize: 12,
    color: '#666',
  },
  toolsSection: {
    padding: 20,
  },
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  toolCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  toolName: {
    marginTop: 8,
    fontSize: 14,
    color: '#2b2d42',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2b2d42',
  },
});

export default HomeScreen;