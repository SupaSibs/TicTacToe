import React, { Component } from "react";
import Square from "./components/Square.jsx";
import Board  from "./components/Board.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import {Button, Text, TextInput, View, FlatList, StyleSheet, AppRegistry} from "react-native";
import axios from "axios";

//style

const styles = StyleSheet.create({
  container: {
  fontSize: 14,
  fontFamily: "sans-serif",
  margin: 20
  },

  FlatList: {
  paddingLeft: 30,
  },

  status: {
  marginBottom: 10,
  },

  square: {
  backgroundColor: "white",
  borderStyle: "solid",
  borderColor: "#999",
  borderWidth: 1,
  fontSize: 24,
  fontWeight: "bold",
  lineHeight: 34,
  marginRight: -1,
  marginTop: -1,
  padding: 0,
  textAlign: "center",
  width: 34,
  },

  game: {
  display: "flex",
  flexDirection: "row",
  },

  gameInfo: {
  marginLeft: 20,
  }
  });



	
AppRegistry.registerComponent('main', () => App)


//App export class for game functionallity and rendering the base
export default class Game extends React.Component {
constructor(props) {
super(props);
this.state = {
history: [
{
squares: Array(9).fill(null)
}
],
stepNumber: 0,
xIsNext: true
};
}

//Handles a click
handleClick(i) {
const history = this.state.history.slice(0, this.state.stepNumber + 1);
const current = history[history.length - 1];
const squares = current.squares.slice();
if (Board.calculateWinner(squares) || squares[i]) {
return;
}
squares[i] = this.state.xIsNext ? "X" : "O";
this.setState({
history: history.concat([
{
squares: squares
}
]),
stepNumber: history.length,
xIsNext: !this.state.xIsNext
})
}
jumpTo(step) {
this.setState({
stepNumber: step,
xIsNext: (step % 2) === 0,
});	
}

render() {
const history = this.state.history;
const current = history[this.state.stepNumber]
const winner = calculateWinner(current.squares);

const moves = history.map((step, move) => {
const desc = move ?
"Go to move #" + move :
"Go to game start";


return (
<Button key={move} onPress={() => this.jumpTo(move)} title={desc} />
)
})

let status;
status = winner ? "Winner: " + winner : "Next player: " + (this.state.xIsNext ? "X" : "O")

return (
<View style={styles.game}>
<View >
<Board squares={current.squares}  onPress={(i) => this.handleClick(i)} />
</View>
<View style={styles.gameInfo}>
<Text>{status}</Text>
<FlatList
data={[
{key: "keys"}
]} />
</View>

<Login/>
<Text>Don't have an account? Sign up now!</Text>
<Signup/>
</View>
);
}
}

function calculateWinner(squares) {
const lines = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]
for (let i = 0; i < lines.length; i++) {
const [a,b,c] = lines[i]
if (squares[a] === squares[b] && squares[a] === squares[c]) {
return squares[a];
}
}
return null;
}

function submitSignup() {
axios.post("/")
.then(res => res)
.catch(err => { console.error(err);
return err; } )
}