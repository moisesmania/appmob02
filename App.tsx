import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [numero, setNumero] = useState<number | null>(null);

  const gerarNumero = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);

    if (!isNaN(minVal) && !isNaN(maxVal) && minVal <= maxVal) {
      const num = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
      setNumero(num);
    } else {
      setNumero(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gerador de Número Aleatório</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor mínimo"
        keyboardType="numeric"
        value={min}
        onChangeText={setMin}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor máximo"
        keyboardType="numeric"
        value={max}
        onChangeText={setMax}
      />

      <Button title="Gerar Número" onPress={gerarNumero} />

      {numero !== null && (
        <Text style={styles.resultado}>Número gerado: {numero}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  resultado: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
    color: 'green',
  },
});
