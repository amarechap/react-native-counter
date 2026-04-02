import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  // 1. Initialize State: 'count' holds the number, 'setCount' updates it
  const [count, setCount] = useState(0);

  // Function to handle Increment
  const increment = () => {
    setCount(count + 1);
  };

  // Function to handle Decrement (prevents negative numbers)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Function to handle Reset
  const reset = () => {
    setCount(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Counter App</Text>
      </View>

      <View style={styles.counterBox}>
        {/* Display the current count */}
        <Text style={styles.countText}>{count}</Text>
        
        {/* 2. Conditional Rendering: Milestone Message appears at 10 */}
        {count >= 10 && (
          <Text style={styles.milestoneText}>🎉 Milestone reached! (10+)</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        {/* 3. Event Handlers: using onPress to trigger functions */}
        <TouchableOpacity style={[styles.button, styles.decrementBtn]} onPress={decrement}>
          <Text style={styles.buttonLabel}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.incrementBtn]} onPress={increment}>
          <Text style={styles.buttonLabel}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.resetBtn} onPress={reset}>
        <Text style={styles.resetText}>Reset Counter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// 4. Stylesheet for UI Design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  counterBox: {
    alignItems: 'center',
    marginBottom: 40,
  },
  countText: {
    fontSize: 100,
    fontWeight: '200',
    color: '#2196F3',
  },
  milestoneText: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: '600',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  incrementBtn: {
    backgroundColor: '#4CAF50',
  },
  decrementBtn: {
    backgroundColor: '#F44336',
  },
  buttonLabel: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '300',
  },
  resetBtn: {
    marginTop: 50,
  },
  resetText: {
    fontSize: 16,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
