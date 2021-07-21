import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';

import Input from '../components/Inputs';
import Submit from '../components/Submit';

const SignUp = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}> 
                <Image source={require('../assets/friibee_back_white1.png')} resizeMode="center" style={styles.image} />
                <Text style={styles.textTitle}>Let's Get Started!</Text>
                <Text style={styles.textBody}>Create an account to get access to all features</Text>
                <Input name="USERNAME" icon="user" />
                <Input name="EMAIL" icon="envelope" />
                <Input name="PHONE" icon="phone" />
                <Input name="PASSWORD" icon="lock" pass={true} />
                <Input name="CONFIRM PASSWORD" icon="lock" pass={true} />
                <Submit color="#F26530" title="CREATE NEW ACCOUNT" />
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textBody}>Already a member? </Text>
                    <Text style={[styles.textBody, {color: '#972910'}]} onPress={() => props.navigation.navigate('Home')}> Sign In</Text>

                </View>
            </View>
            
        </ScrollView>    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
    },
    textTitle: {
        fontSize: 40,
        fontFamily: 'Foundation',
        //marginVertical: 10,
    },
    textBody: {
        fontSize: 16,
        fontFamily: 'Foundation',
        marginBottom: 15,
    }
});

export default SignUp;