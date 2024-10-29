import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import TextButton from './components/TextButton';

export default function App() {
  const [peso, setPeso] = useState(0);
  const [estatura, setStatura] = useState(0);
  const [imc, setImc] = useState(null);
  const [estadoNutrional, setEstadoNutrional] = useState(null)

  function pesoInputHandler (enteredText) {
    setPeso(enteredText);
  }

  function EstaturaInputHandler (enteredText) {
    setStatura(enteredText);
  }

  function IndiceDeMasaCorporal(peso, estatura) {
    return peso / (estatura * estatura);
  }

  function DeterminaEstadoNutricional(IMC) {
    if (IMC <18.5) {
      return "Peso Bajo"
    }
    if (IMC <25.0) {
      return "Peso Normal"
    }
    if (IMC <30) {
      return "Sobrepeso"
    }
    if (IMC <40.0) {
      return "Obesidad"
    }
    return "OBESIDAD EXTREMA"
  }

  function onCalcularButtonTapped(){
    const bmi = IndiceDeMasaCorporal(peso, estatura);
    setImc(bmi.toFixed(4));
    setEstadoNutrional(DeterminaEstadoNutricional(bmi));
  }

  function onLimpiarButtonTapped(){
    setPeso(0);
    setStatura(0);
    setImc(null);
    setEstadoNutrional(null);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        placeholder='Peso de la persona en Kiligramos'
        onChangeText={pesoInputHandler}
        value={peso}/>

        <TextInput 
        style={styles.textInput}
        placeholder='Altura de la persona en metros'
        onChangeText={EstaturaInputHandler}
        value={estatura}/>
      </View>
      
      <View style={styles.comandsContainer}>
        <TextButton title='Calcular' onPress={onCalcularButtonTapped}/>
        <TextButton title='Limpiar' onPress={onLimpiarButtonTapped}/>

        {/* <View>
        <Pressable onPress={onCalcularButtonTapped}>
          <View style={styles.buttonCalcular}>
          <Text style={styles.textButton}>
            Calcular
          </Text>
          </View>
         
        </Pressable>
        </View>
        
        <View >
        <Pressable onPress={onLimpiarButtonTapped}>
          <View style={styles.buttonLimpiar}>
          <Text style={styles.textButton}>
            Limpiar
          </Text>
          </View>
        </Pressable>
        </View> */}
        

        {/* <Button title='Calcular' color={'lightgreen'} onPress={onCalcularButtonTapped}/>

        <Button title='Reinciar' color={'red'} onPress={onLimpiarButtonTapped}/> */}
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultText}>El IMC de la persona es:</Text>

        <Text style={styles.result}>{imc}</Text>

        <Text style={styles.resultText}>El estado nutricional de la persona es:</Text>

        <Text style={styles.result}>{estadoNutrional}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: '#fff',
    flexDirection: 'column',
    //gap: 50,
    alignItems: 'fill',
    justifyContent: 'top',
  },

  inputContainer:{
    flex: 0,
    borderColor: 'ligthgrey',
    borderWidth: 2,
    padding: 8,
  },

  comandsContainer:{
    flex: 0,
    // borderColor: 'ligthgrey',
    // borderWidth: 2,
    flexDirection: 'row',
    marginVertical: 24,
    justifyContent: 'center',
    gap: 48,
  },

  resultsContainer:{
    flex: 0,
    borderColor: 'ligthgrey',
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
  },

  textInput:{
    borderColor: 'lightgray',
    borderWidth: 2.5,
    margin: 4,
    fontSize: 18,
  },

  resultText:{
    fontSize: 18,
  },

  result:{
    fontSize: 24,
    fontWeight: 'bold',
    // textAlign: 'center',
    marginVertical: 16,
    alignSelf: 'center'
  },

  buttonCalcular: {
    borderColor: 'lightgreen',
    borderWidth: 2,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'lightgreen',
  },

  buttonLimpiar: {
    borderColor: 'red',
    borderWidth: 2,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'red',
  },

  textButton: {
    color: 'darkblue',
    fontSize: 18,
  },
});
