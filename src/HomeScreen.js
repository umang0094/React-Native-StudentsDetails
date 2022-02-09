import React, { useContext } from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image} from 'react-native';

import { Context } from './Contex/StudentContext';

const Home = ({navigation}) =>{
    const {state} = useContext(Context)
    // console.log(state)
    return(
        <View>
            <View style = {styles.Button}>
                <Button title='Add Student' onPress={() =>navigation.navigate('Add')} />
            </View>
            
                <FlatList 
                    data={state}
                    keyExtractor={(item) => item.id}   
                    renderItem={({item}) =>{

                        return <TouchableOpacity onPress={() => navigation.navigate('List', {id : item.id})}>
                                    <View style = {styles.List}>
                                        <Image style ={styles.image} source={{uri:item.photo_uri}} />
                                        <Text style = {styles.text}>{item.name} </Text>
                                        <Text style = {styles.text}>{item.roll_no}</Text>
                                    </View>
                                </TouchableOpacity>
                            
                    }}
                    
                />
            
        </View>
    )
}

const styles = StyleSheet.create({
    Button:{
        margin: 20,
        marginHorizontal: 80,
    },
    List:{
        flex: 1,
        margin: 10,
        borderWidth: 5,
        borderColor: 'grey',
        borderRadius: 20,
        flexDirection: 'row',
        padding: 10,
        justifyContent:'space-between'
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 20,
        marginLeft: 5
    },
    text:{
        fontSize: 28
    }
})

export default Home