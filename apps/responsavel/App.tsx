import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// App "responsavel" — Fase 1 (setup). Telas reais entram na Fase 8 do roadmap
// (docs/especificacao-tecnica.md, seção 9), depois de schema, backend e
// domínio estarem prontos.
export default function App() {
  return (
    <View style={styles.container}>
      <Text>App responsavel — setup inicial (Fase 1)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
