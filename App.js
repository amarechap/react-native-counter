import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * Counter App Component
 * Features: Increment, Decrement (min 0), Reset, and Milestone at 10.
 */
export default function App() {
  // useState stores the current counter value
  const [count, setCount] = useState(0);

  // Function to add 1 to the counter
  const increment = () => setCount(count + 1);
  
  // Function to subtract 1 (Prevents counter from going below 0)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Function to reset the counter back to 0
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      
      <View style={styles.countBox}>
        <Text style={styles.countText}>{count}</Text>
      </View>

      {/* Conditional Messages (Requirements) */}
      {count === 10 && <Text style={styles.milestone}>🎉 You reached 10!</Text>}
      {count === 0 && <Text style={styles.info}>Counter is at zero.</Text>}

      <View style={styles.buttonRow}>
        {/* Decrement Button */}
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>

        {/* Reset Button */}
        <TouchableOpacity style={[styles.button, styles.resetBtn]} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        {/* Increment Button */}
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.footer}>Built with React Native & Expo</Text>
    </View>
  );
}

// StyleSheet for layout and styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1c1e21',
    marginBottom: 20,
  },
  countBox: {
    backgroundColor: '#ffffff',
    padding: 60,
    borderRadius: 30,
    marginBottom: 20,
    elevation: 8, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  countText: {
    fontSize: 90,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 20,
    marginHorizontal: 8,
    borderRadius: 12,
    minWidth: 70,
    alignItems: 'center',
  },
  resetBtn: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  milestone: {
    color: '#4CD964',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    color: '#8e8e93',
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    color: '#aeaeb2',
  }
});
