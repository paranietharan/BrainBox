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

const MyCourses = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const enrolledCourses = [
    {
      id: 1,
      title: 'Flutter App Development',
      instructor: 'Mike Johnson',
      progress: 60,
      totalLessons: 28,
      completedLessons: 17,
      image: 'https://storage.googleapis.com/cms-storage-bucket/70760bf1e88b184bb1bc.png',
      lastAccessed: '1 day ago'
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Courses</Text>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search your courses..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{enrolledCourses.length}</Text>
          <Text style={styles.statLabel}>Enrolled Courses</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Hours Learned</Text>
        </View>
      </View>

      <View style={styles.coursesContainer}>
        {enrolledCourses.map(course => (
          <TouchableOpacity key={course.id} style={styles.courseCard}>
            <Image source={{ uri: course.image }} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.instructorName}>by {course.instructor}</Text>
              
              <View style={styles.progressInfo}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: `${course.progress}%` }]} />
                </View>
                <Text style={styles.progressText}>{course.progress}% Complete</Text>
              </View>
              
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonText}>
                  {course.completedLessons}/{course.totalLessons} Lessons
                </Text>
                <Text style={styles.lastAccessed}>Last accessed {course.lastAccessed}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    padding: 12,
    borderRadius: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    color: '#666',
    marginTop: 5,
  },
  coursesContainer: {
    padding: 20,
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
  },
  courseImage: {
    width: '100%',
    height: 300,
  },
  courseInfo: {
    padding: 15,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  instructorName: {
    color: '#666',
    marginBottom: 15,
  },
  progressInfo: {
    marginBottom: 10,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#f1f3f5',
    borderRadius: 3,
    marginBottom: 5,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
  },
  lessonInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lessonText: {
    fontSize: 12,
    color: '#666',
  },
  lastAccessed: {
    fontSize: 12,
    color: '#666',
  },
});

export default MyCourses;