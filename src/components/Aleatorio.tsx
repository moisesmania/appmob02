import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Aleatorio() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [numero, setNumero] = useState<number | null>(null);

  const gerarNumero = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);
    if (!isNaN(minNum) && !isNaN(maxNum) && maxNum >= minNum) {
      const num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      setNumero(num);
    } else {
      setNumero(null);
    }
  };

  return (
    <View style={styles.container}>
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
      <Button title="Gerar número aleatório" onPress={gerarNumero} color="#004d00" />
      {numero !== null && (
        <Text style={styles.resultado}>Número gerado: {numero}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  resultado: {
    marginTop: 15,
    fontSize: 20,
    textAlign: 'center',
    color: '#082032',
  },
});
