import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useCourseStore } from '../store/courseStore';

export default function HomeScreen() {
  const { clickCount, incrementCount } = useCourseStore(); // Zustand state and actions
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://openlibrary.org/subjects/science.json');
      const data = await response.json();
      const formattedBooks = data.works.map((work) => ({
        id: work.key,
        title: work.title,
        authors: work.authors ? work.authors.map((author) => author.name).join(', ') : 'Unknown',
        coverId: work.cover_id,
      }));
      setBooks(formattedBooks);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCardPress = () => {
    incrementCount(); // Increment the click count
  };

  const renderBookCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={handleCardPress}>
      {item.coverId && (
        <Image
          source={{
            uri: `https://covers.openlibrary.org/b/id/${item.coverId}-M.jpg`,
          }}
          style={styles.cardImage}
        />
      )}
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.authors}>Authors: {item.authors}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderBookCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          console.log('Total clicks:', clickCount);
        }}
      >
        <Text style={styles.buttonText}>Clicks: {clickCount}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 90,
    marginRight: 15,
    borderRadius: 4,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  authors: {
    fontSize: 14,
    color: '#555',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
