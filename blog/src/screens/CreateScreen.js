import React, {useState, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Context} from '../context/BlogContext';
import { TextInput } from 'react-native-gesture-handler';

const CreateScreen = ({navigation}) => {
    const {state} = useContext(Context);
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
            <Button 
                title="Add Blog Post"
                onPress={() => { 
                    addBlogPost(title, content);
                    navigation.navigate('Index');
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        marginLeft: 5,
        fontSize: 20,
        marginBottom: 5
    }
});

export default CreateScreen;