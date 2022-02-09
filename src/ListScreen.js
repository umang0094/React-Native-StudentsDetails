import React,{useContext} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import { Context } from './Contex/StudentContext';

const List = ({route:{params}}) =>{
    const {id} = params
    const {state} = useContext(Context)
    const student = state.find(student => student.id == id)
    return(
        <View>
            <Image 
                style = {styles.image}
                source={{uri: student.photo_uri}} />
            <Text style = {styles.Text}>Name = {student.name}</Text>
            <Text style = {styles.Text}>Roll-No ={student.roll_no}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 150,
        marginTop: 20,
        alignSelf: 'center'
    },
    Text:{
        fontSize: 28,
        textAlign: 'center',
        margin: 20
    }
})

export default List;