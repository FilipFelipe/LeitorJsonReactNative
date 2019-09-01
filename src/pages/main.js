import React, {Component} from 'react';
import api from '../services/api';
import Icon from 'react-native-vector-icons'
import Product from "./product"
import { createStackNavigator, createAppContainer, StackNavigator } from 'react-navigation';

import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  props,
  YellowBox
} from 'react-native';
import { VirtualTimeScheduler } from 'rxjs';
import { returnStatement } from '@babel/types';


export default class Main extends Component {
  
  static navigationOptions = {
     title: 'Guia de cuidados',
     color: "#DA552F"
  };

  state = {
    productIinfo: {},
    docs: [], // lista
    page:1,
  };

  componentDidMount(){
    this.loadProducts();
    
  }
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productIinfo } = response.data;
    this.setState({
      docs: [... this.state.docs, ...docs],
      productIinfo,
      page
    });
    console.log(productIinfo);
    console.log(docs);
    
  }
  _onPressButton() {
    
    alert('App está em construção                                                            Crédito: Filip Junio Felipe')
    
  }
  loadmore = () => {
    const { page, productIinfo} = this.state;

    if(page == productIinfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
    console.log(pageNumber);
  };


  renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      
      <TouchableOpacity style={ styles.productButton}
       
      onPress={() => {this.props.navigation.navigate('Product', { product: item})}}>
        <Text style={ styles.productButtonText}><Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />Acessar</Text>
      </TouchableOpacity>

    </View>
  )  

  render() {

    return (
     
      //Inicio
      
      <View >
        <FlatList
        contentContainerStyle={ styles.list}
        data={this.state.docs}
        keyExtractor={item => item._id}
        renderItem={this.renderItem}
        onEndReachedThreshold={0.1}
        onEndReached={() => this.loadmore()}
        />
      </View>
    );
  }
}
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);


const styles = StyleSheet.create ({
  container: {
    flex: 1, // ocupar a tela toda
    backgroundColor: "#FAFAFA", // cor do background
  },
  list: {
    padding: 20, // espaço das laterais
  },
  productContainer: {
    backgroundColor: "#FFF", // cor 
    borderWidth: 1, // tamanho da borda
    borderColor: "#DDD", // cor da borda
    borderRadius: 5, // borda arrendodada 
    padding: 20, // espacamento dentro do product
    marginBottom: 20 // espaço entre o proximo
  },
  productTitle: {
   fontSize: 18,
   fontWeight: 'bold',
   color: '#999',
   marginTop: 5, // espaco entre o titulo e o texto
   lineHeight: 24 // espacamento linha
  },
  productButton: {
    height: 42, // altura
    //width:30, largura
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: 'transparent', // transparent 
    justifyContent: 'center', // centralizar 
    alignItems: 'center', // centralizar 
    marginTop: 10, // espaco entre o titulo e o texto
  },
  buttonContainer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DA552F',
  },
});

