import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { score, total } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Result</Text>
      <Text style={{ fontSize: 18 }}>You scored {score} out of {total}</Text>
      <Button title="Try Again" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}