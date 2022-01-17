import React, {Component} from "react"
import {Button, Text, TextInput, View, FlatList, StyleSheet, AppRegistry, TextInput} from "react-native"
import styles from "./../styles"

export default function Signup() {
return (
<View style={styles.inputForm}>
<TextInput style={styles.Input} placeholder="Username"/>
<TextInput style={styles.Input} placeholder="Email"/>
<TextInput style={styles.Input} placeholder="Password"/>
<Button onPress={submitSignup} style={styles.submitLogin} title="Sign Up"/>
</View>
)
}
