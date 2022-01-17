import React, { Component} from "react";
import {View} from "react-native"
import Square from "./Square"
import styles from "./../styles"
//Board export class component
export default class Board extends React.Component {
  renderSquare(i) {
  return (
  <Square
  value={this.props.squares[i]}
  onPress={() => this.props.onClick(i)}
  />
  );
  }
  //Renders the board
  render() {
  return (
  <View>
  <View style={styles.boardRow}>
  {this.renderSquare(0)}
  {this.renderSquare(1)}
  {this.renderSquare(2)}
  </View>
  <View style={styles.boardRow}>
  {this.renderSquare(3)}
  {this.renderSquare(4)}
  {this.renderSquare(5)}
  </View>
  <View style={styles.boardRow}>
  {this.renderSquare(6)}
  {this.renderSquare(7)}
  {this.renderSquare(8)}
  </View>
  </View>
  )
  }
  }
