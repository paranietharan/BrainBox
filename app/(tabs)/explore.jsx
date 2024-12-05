import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, name: 'Development', icon: '💻', courses: '150+' },
    { id: 2, name: 'Business', icon: '💼', courses: '200+' },
    { id: 3, name: 'Design', icon: '🎨', courses: '120+' },
    { id: 4, name: 'Marketing', icon: '📊', courses: '180+' },
  ];

  const trendingCourses = [
    {
      id: 1,
      title: 'React Native Masterclass',
      instructor: 'John Doe',
      rating: 4.8,
      students: '2.5k',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'React Native Masterclass',
      instructor: 'John Doe',
      rating: 4.8,
      students: '2.5k',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'React Native Masterclass',
      instructor: 'John Doe',
      rating: 4.8,
      students: '2.5k',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'React Native Masterclass',
      instructor: 'John Doe',
      rating: 4.8,
      students: '2.5k',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <Text style={styles.headerSubtitle}>Discover your next skill</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search courses..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(category => (
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryCourses}>{category.courses} courses</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending Courses</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.trendingScrollView}
        >
          {trendingCourses.map(course => (
            <TouchableOpacity
              key={course.id}
              style={[styles.courseCard, styles.horizontalCard]}
            >
              <Image source={{ uri: course.image }} style={styles.courseImage} />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle} numberOfLines={2}>{course.title}</Text>
                <Text style={styles.courseInstructor}>{course.instructor}</Text>
                <View style={styles.courseStats}>
                  <Text style={styles.courseRating}>⭐ {course.rating}</Text>
                  <Text style={styles.courseStudents}>👥 {course.students}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2b2d42',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#8d99ae',
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  section: {
    padding: 20,
    margin: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2b2d42',
    marginBottom: 15,
  },
  categoryCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginRight: 15,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 20,
  },
  categoryIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2b2d42',
  },
  categoryCourses: {
    fontSize: 14,
    color: '#8d99ae',
    marginTop: 5,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  courseImage: {
    width: '100%',
    height: 150,
  },
  courseInfo: {
    padding: 15,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2b2d42',
    marginBottom: 5,
  },
  courseInstructor: {
    fontSize: 14,
    color: '#8d99ae',
    marginBottom: 10,
  },
  courseStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseRating: {
    fontSize: 14,
    color: '#ffd700',
  },
  courseStudents: {
    fontSize: 14,
    color: '#8d99ae',
  },
});

export default Explore;