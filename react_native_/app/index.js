import { View, TextInput, Button, Text, StyleSheet, FlatList} from 'react-native';
import React, { useState } from 'react';

const Home = () => {
    const [ todo, setTodo ] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    console.log(newTodo,'todo');

    const addTodo = () =>{
        if(newTodo.trim() !== ''){
            setTodo([...todo, {text: newTodo, key: Date.now().toString()}]);
            setNewTodo('')
        }
    }
    const deleteTodo = (key) => {
        setTodo(todo.filter((item) => item.key !== key ))
    }

    return (
        <View>
            <TextInput
            defaultValue={newTodo}
            onChangeText = {(newtext) => {setNewTodo(newtext)}}
            placeholder="your text here"
             />
             <Button
             onPress={addTodo}
             title="Add todo"
              />
              <FlatList
              data={todo}
              renderItem={({item}) => (
                  <View>
                    <View>
                      <Text>{item.text}</Text>
                    </View>
                    <Button onPress={() => deleteTodo(item.key)} 
                    title="Delete" />
                  </View>
              )
             }
               />
        </View>
    )
}

export default Home;