import React, {Component} from "react"
import {Button, Text, TextInput, View, FlatList, StyleSheet, AppRegistry, TextInput} from "react-native";

export default function Login() {
return (
<View style={styles.inputForm}>
<TextInput style={styles.Input} placeholder="Username/Email"/>
<TextInput style={styles.Input} placeholder="Password"/>
<Button onPress={submitLogin} style={styles.submitLogin} title="Log In"/>
</View>
)
}