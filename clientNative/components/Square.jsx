import React, {Component} from "react";
import {Button} from "react-native";
import styles from "./../styles"
//Square function component
export default function Square(props) {
return (
<Button style={styles.square} onPress={props.onClick} title={props.value} />
)
}


