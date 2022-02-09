import React,{useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button ,Image} from 'react-native';
import { Context } from './Contex/StudentContext';
// import * as ImagePicker from 'react-native-image-picker'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Add = ({navigation}) =>{

    const {addStudent} = useContext(Context)
    
    const [name, setName] = useState('')
    const [roll, setRoll] = useState('')
    const [photo, setPhoto] = useState('')

    // console.log(photo[0].uri)
    const handleChoosePhoto = () =>{
        const options = {};
        launchImageLibrary(options, response =>{
            // const uri = response.assets
            // console.log(uri.uri)
            if(response){
                setPhoto(response.assets)
            }
        })
    }

    return(
        <View>
            {
                photo.length ? <Image source={{uri: photo[0].uri}}  style= {styles.image} /> : null 
            }
            <View style = {styles.Button}>
                    <Button 
                        title = 'Choose Photo'
                        onPress={handleChoosePhoto}
                    />
            </View>
            <TextInput
                placeholder='Enter Your Name'
                style = {styles.textInput}
                value = {name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                placeholder='Enter Your Roll Number'
                style = {styles.textInput}
                value = {roll}
                onChangeText={(number) => setRoll(number)}
            />
            <View style = {styles.Button}>
                <Button
                    title='Save Information'
                    onPress={() => addStudent(name, roll, photo[0].uri, () => navigation.navigate('Home'))}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput:{
        margin: 20,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        marginHorizontal: 25
    },
    Button:{
        margin: 20,
        marginHorizontal: 80,
    },
    image:{
        width: 150,
        height: 150,
        marginTop: 20,
        alignSelf: 'center'
    }
})

export default Add;