import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  min: number;
  max: number;
};

const AleatorioComProps = ({ min, max }: Props) => {
  const gerarNumero = () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [numero, setNumero] = useState(gerarNumero());

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Número aleatório entre {min} e {max}: {numero}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setNumero(gerarNumero())}
      >
        <Text style={styles.buttonText}>Gerar Novo Número</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: '#334756',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00ff99',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#082032',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AleatorioComProps;
