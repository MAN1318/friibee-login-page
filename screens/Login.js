import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';

const Login = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View  style={styles.container}>
                <Image 
                    source={require('../assets/friibee_back_white1.png')} 
                    resizeMode="center" 
                    style={styles.image} />
                {/* <Text style={styles.textTitle}>Welcome back!</Text> */}
                {/* <Text style={styles.textBody}>Log into your existing account</Text> */}
                <View style={{marginTop: 5}} />
                <Inputs name="EMAIL or USERNAME" icon="user" />
                <Inputs name="PASSWORD" icon="lock" pass={true} />
                <View style={{width: '90%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>Forgot Username or Password?</Text>
                </View>
                <Submit title="LOG IN" color="#F26530" />
                <Text style={styles.textBody}>or connect using</Text>
                <View style={{flexDirection: 'row'}}>
                    <Account color="#ec482f" icon="google"  />
                    <Account color="#3b5c8f" icon="facebook" />
                    <Account color="gray" icon="apple"  />
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={styles.textBody}>Don't have an account? </Text>
                    <Text style={[styles.textBody, {color: '#D2573C'}]} onPress={() => props.navigation.navigate('SignUp')}> Sign Up</Text>
                </View>
            </View>
        </ScrollView>      
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    image: {
        width: 200,
        height: 200,
        marginTop:25,
        
    },
    textTitle: {
        fontFamily: 'Nunito',
        fontSize: 40,
        marginTop: -10,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    textBody: {
        fontFamily: 'Nunito',
        fontSize: 16
    }
});

export default Login