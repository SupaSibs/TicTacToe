import React, { Component } from "react"
import styles from "./styles"
import Login from "./components/Login"
import Board from "./components/Board"
import Signup from "./components/Signup"
import {Button, Text, InputText, View, FlatList, StyleSheet, AppRegistry} from "react-native";



	
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
<Signup />
<Text>Or if you have an account:</Text>
<Login />
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

