import React, { useState } from "react";
import { View,StyleSheet,Text,TouchableHighlight, FlatList, TextInput, ScrollView } from "react-native";

import {getallBooks,addBook,deleteallBook} from './realm'

function App(){
  const renderItem=({item})=>{
    return(
      <View style={{justifyContent:'space-between',marginTop:10,flexDirection:'row',padding:5}}>
            
                <Text style={{color:'blue',fontWeight:'bold',fontSize:20,width:50}}>{item.recordid}.</Text>
                <Text style={{color:'green',fontWeight:'bold',fontSize:20,marginLeft:10,width:100}}> {item.bookname}</Text>
                <Text style={{color:'black',fontWeight:'bold',fontSize:20,marginLeft:10,width:100}}> {item.authername}</Text>
               <Text style={{color:'red',fontWeight:'bold',fontSize:20,marginLeft:10,width:100}}> {item.details}</Text>
         
              </View>
    )
  }
  const[books,setBooks]=useState(getallBooks)
  const [counter,setCounter]=useState(books.length+1)

  const [name,setName]=useState('')
  const [details,setDetails]=useState('')
  const [auther,setAuther]=useState('')

   
  
  return(
    
      <View style={{alignItems:'center'}}>
       
       
      <TextInput style={styles.inputview}
      placeholder='Book name'
      placeholderTextColor={'black'}
      onChangeText={name=>setName(name)}>

      </TextInput>


      <TextInput style={styles.inputview}
      placeholder=' Author'
      placeholderTextColor={'black'}
      onChangeText={auther=>setAuther(auther)}>

      </TextInput>
      
      <TextInput style={styles.inputview}
      placeholder='Details'
      placeholderTextColor={'black'}
      onChangeText={details=>setDetails(details)}>

      </TextInput>

        <View style={{flexDirection:'row'}}>
      <TouchableHighlight style={styles.button}
        onPress={()=>{
          addBook(counter,name,details,auther)
          setBooks(getallBooks)
          setCounter(counter+1)

        }}>
        <Text style={{ color: 'white', fontWeight: 'bold',fontSize:18 }}>Add</Text>

      </TouchableHighlight>

      
      <TouchableHighlight style={styles.button}
      onPress={()=>{
        deleteallBook()
        setBooks(getallBooks)
        setCounter(1)
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold',fontSize:18}}>delete</Text>

      </TouchableHighlight>
      </View>

      <View style={{alignItems:'center'}}>
        <Text style={{fontSize:28,color:'black',marginTop:18,fontWeight:'bold'}}>BOOKS</Text>
        </View>
      
        <FlatList
        data={books}
         keyExtractor={item=>item.recordid}
         renderItem={renderItem}/>
           </View>
          
      
  )
}
const styles= StyleSheet.create({

  container:{
    alignItems:'center',
    justifyContent:'center'
  },
  button:{
    height: 45, 
    width: 110, 
    backgroundColor: 'green',
    margin:20,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderColor:'black'
  },
  inputview:{
    width:'85%',
    height:80,
    borderRadius:8,
    borderWidth:2,
    borderColor:'black',
    margin:10
  }
})
export default App;