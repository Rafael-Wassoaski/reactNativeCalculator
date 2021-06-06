import React, {Component} from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonStyle from "../styles/ButtonStyle";

export default class CalculatorButton extends Component{
  render(){
    return(
      <TouchableOpacity
        onPress={() => {
          this.props.onPressFunction(this.props.buttonText);
        }}
        style={ButtonStyle.button}>
        <Text style={ButtonStyle.sectionTitle}>{this.props.buttonText}</Text>
      </TouchableOpacity>
      )
  }
}
