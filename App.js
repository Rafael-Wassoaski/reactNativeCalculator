/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import type { Node } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import CalculatorButton from "./src/app/components/CalculatorButton";

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const calculate = (equation) => {
  return eval(equation);
};

const createEquation = (actualEquation, newValue) => {
  if (actualEquation === "0") {
    return newValue;
  }

  return `${actualEquation}` + `${newValue}`;
};


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [result, setResult] = useState("0");

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{ ...backgroundStyle, flex: 1 }}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.sectionContainer}>
        <CalculatorButton buttonText = {"1"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>
        <CalculatorButton buttonText = {"2"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>
        <CalculatorButton buttonText = {"3"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>
        <CalculatorButton buttonText = {"+"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>


      </View>

      <View style={styles.sectionContainer}>

        <CalculatorButton buttonText = {"4"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>
        <CalculatorButton buttonText = {"5"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>
        <CalculatorButton buttonText = {"6"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>
        <CalculatorButton buttonText = {"-"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>


      </View>

      <View style={styles.sectionContainer}>
        <CalculatorButton buttonText = {"7"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>
        <CalculatorButton buttonText = {"8"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>
        <CalculatorButton buttonText = {"9"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>
        <CalculatorButton buttonText = {"*"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>

      </View>
      <View style={styles.sectionContainer}>
        <CalculatorButton buttonText = {"="} onPressFunction ={(value) => setResult(calculate(result))}/>
        <CalculatorButton buttonText = {"/"} onPressFunction ={(value) => setResult(createEquation(result, value))}/>
      </View>

      <View style={styles.sectionContainer}>
        <CalculatorButton buttonText = {"C"} onPressFunction ={(value) => setResult("0")}/>

      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  buttonStyle: {
    height: "30%",
    width: "25%",
    backgroundColor: "#646464",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
  },

  result: {
    textAlign: "center",
  },
});

export default App;
