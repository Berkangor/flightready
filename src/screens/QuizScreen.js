import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import questions from '../data/questions.json';

export default function QuizScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const current = questions[index];

  const handleAnswer = (option) => {
    if (selected !== null) return;

    setSelected(option);
    setShowExplanation(true);
    if (option === current.answer) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      navigation.navigate('Result', { score, total: questions.length });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{current.question}</Text>

      {current.options.map((option, i) => {
        const isCorrect = option === current.answer;
        const isSelected = selected === option;

        let backgroundColor = '#eee';
        if (selected !== null) {
          if (isSelected && isCorrect) backgroundColor = '#4caf50';
          else if (isSelected && !isCorrect) backgroundColor = '#f44336';
          else if (isCorrect) backgroundColor = '#4caf50';
        }

        return (
          <TouchableOpacity
            key={i}
            style={[styles.option, { backgroundColor }]}
            onPress={() => handleAnswer(option)}
            disabled={selected !== null}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        );
      })}

      {showExplanation && (
        <View style={styles.explanationBox}>
          <Text style={styles.explanationTitle}>
            {selected === current.answer ? '✅ Doğru' : '❌ Yanlış'}
          </Text>
          <Text style={styles.explanationText}>{current.explanation}</Text>

          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>
              {index + 1 < questions.length ? 'Sonraki Soru' : 'Sonuçları Gör'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  question: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  option: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  optionText: { fontSize: 16 },
  explanationBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#eef6ff',
    borderRadius: 10,
  },
  explanationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  explanationText: {
    fontSize: 16,
    marginBottom: 15,
  },
  nextButton: {
    backgroundColor: '#00aaff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
