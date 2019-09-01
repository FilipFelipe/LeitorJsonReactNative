import React from 'react';
import { View, Button, Text,StyleSheet } from 'react-native';
import {WebView } from 'react-native-webview';

const Product = ({navigation}) => (
 
    <WebView source={ {uri: navigation.state.params.product.url}}/>
  //<Text style={styles.textobarra}>({navigation.state.params.product.title})  </Text>

);
Product.navigationOptions = ({navigation}) =>({
    headerLayoutPreset: 'center',
    title: navigation.state.params.product.title,
    alignItems: 'center',
    justifyContent: 'center',
    color: "#DA552F"
});
const styles = StyleSheet.create ({
    textobarra: {
        
    },
    
  });
  
  


export default Product;