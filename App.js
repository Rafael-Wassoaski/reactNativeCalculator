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
        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, 1));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"1"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, 2));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"2"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, 3));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"3"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, "+"));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"+"}</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, 4));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"4"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, 5));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"5"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, 6));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"6"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, "-"));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"-"}</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, 7));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"7"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, 8));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"8"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, 9));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"9"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, "*"));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"*"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          onPress={() => {
            setResult(calculate(result));
          }}
          style={{ ...styles.buttonStyle, width: "75%" }}>
          <Text style={styles.sectionTitle}>{"="}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setResult(createEquation(result, "/"));
          }}
          style={{ ...styles.buttonStyle }}>
          <Text style={styles.sectionTitle}>{"/"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          onPress={() => {
            setResult("0");
          }}
          style={{ ...styles.buttonStyle, width: "100%" }}>
          <Text style={styles.sectionTitle}>{"C"}</Text>
        </TouchableOpacity>
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
