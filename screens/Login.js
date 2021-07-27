import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';

const Login = props => {
    return (
        <ScrollView style={{backgroundColor:'#F26530' }}  >
            <View  style={styles.topcontainer}>
                <Image 
                    source={require('../assets/friibee.png')} 
                    resizeMode="center" 
                    style={styles.image} />
            </View>
            <View  style={styles.bottomcontainer}>
                
                {/* <Text style={styles.textTitle}>Welcome back!</Text> */}
                {/* <Text style={styles.textBody}>Log into your existing account</Text> */}
                <View style={{marginTop: 15}} />
                <Inputs name="EMAIL or USERNAME" icon="user" />
                <Inputs name="PASSWORD" icon="lock" pass={true} />
                <Submit title="LOG IN" color="#F26530" />
                
                <View style={{width: '90%', marginTop: 10, marginBottom: 10, flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                    <Text style={[styles.textBody, {alignSelf: 'flex-start'}, {fontSize: 14}]}>Remember me</Text>
                    </View>
                    <View>
                    <Text style={[styles.textBody, {color: '#F26530'} , {alignSelf: 'flex-end'}, {fontSize: 14}]}>Forgot Password?</Text>
                     </View>
                </View>
                
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 20}}>
                 <View style={{flex: 1, height: 1}} />
                 <View style={{flex: 2, height: 1, backgroundColor: 'black'}} />
                 <View>
                 <Text style={styles.textBody}>   or   </Text>
                </View>
                <View style={{flex: 2, height: 1, backgroundColor: 'black'}} />
                <View style={{flex: 1, height: 1}} />
                </View>
                
                <View style={{flexDirection: 'row', marginBottom:10}}>
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
    topcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        backgroundColor:'#F26530', 
    },
    bottomcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        backgroundColor: 'white',
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