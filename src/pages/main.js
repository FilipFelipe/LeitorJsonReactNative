import React, {Component} from 'react';
import api from '../services/api';
import Icon from 'react-native-vector-icons'
import Product from "./product"
import { createStackNavigator, createAppContainer, StackNavigator, createDrawerNavigator } from 'react-navigation';

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
  
 

  state = {
    productIinfo: {},
    Salas: [], // lista
    page:1,
  };

  componentDidMount(){

    this.loadProducts();
   
  }
  
  loadProducts = async (page = 1) => {
    const response = await api.get(`/temp?page=${page}`);

    const { Salas, ...productIinfo } = response.data;
    this.setState({
      Salas: [... this.state.Salas, ...Salas],
      productIinfo,
      page
    });

    
  }
  _onPressButton() {
    
    alert('App está em construção                                                            Crédito: Filip Junio Felipe')
    
  }
  loadmore = () => {
    const { page, productIinfo} = this.state;

    if(page == productIinfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  
  };
  carregar = () => {
    this.loadProducts();
  }

  renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <View style={styles.tematitulo}>
      <Text style={styles.Titulo}>{item.Titulo}</Text></View>
      <Text style={styles.Status}>Status : {item.Status}</Text>
      <Text style={styles.Temperatura}>Temperatura : {item.Temperatura} °C</Text>
      <Text style={styles.Porta}>Porta : {item.Porta}</Text>
      <Text style={styles.Evaporadora}>Evaporadora : {item.Evaporadora}</Text>
      <Text style={styles.Condensadora}>Condensadora : {item.Condensadora}</Text>
      
    </View>
  
  ) 


  render() {

    return (
      
       
      <View >
        <FlatList
        contentContainerStyle={ styles.list}
        data={this.state.Salas}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
        //onEndReachedThreshold={0.1}
        //onEndReached={() => this.loadmore()}
        />
        <View style={styles.temarodape}>
        <Text style={styles.rodape}>Aplicativo desenvolvido por IFSP - Campus Birigui</Text>
      </View>
      </View> 
       
    );
  
  }
  
}

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
  'Warning: '
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
    padding: 18, // espacamento dentro do product
    marginBottom: 20 // espaço entre o proximo
  },
  Titulo: {
   justifyContent: 'center',
   alignItems: 'center', 
   fontSize: 23,
   fontWeight: 'bold',
   //color: '#999',
   marginTop: 5, // espaco entre o titulo e o texto
   lineHeight: 24 // espacamento linha
  },

  Porta: {
    fontSize: 16,
    //fontWeight: 'bold',
   
  },
  Temperatura: {
    fontSize: 16,
    //fontWeight: 'bold',
   
  },
  Evaporadora: {
    fontSize: 16,
    //fontWeight: 'bold',
   
  },
  Status: {
    fontSize: 16,
    //fontWeight: 'bold',
   
  },
  rodape: {
    fontSize: 16,
    fontWeight: 'bold',
   
  },
  Condensadora: {
    fontSize: 16,
    //fontWeight: 'bold',
   
  },
  temarodape:{
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: "#FFF", // cor 
    borderWidth: 2, // tamanho da borda
    borderColor: "#00CED1", // cor da borda
    //borderRadius: 2, // borda arrendodada 
    backgroundColor: "#00CED1",
    //padding: 2, // espacamento dentro do product

  },
  tematitulo:{
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: "#FFF", // cor 
    borderWidth: 2, // tamanho da borda
    //borderColor: "#00CED1", // cor da borda
    borderRadius: 5, // borda arrendodada 
    //backgroundColor: "#00CED1",
    //padding: 2, // espacamento dentro do product
    borderColor: "#DDD", // cor da borda
  },

});

