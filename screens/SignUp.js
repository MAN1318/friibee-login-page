import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';

import Input from '../components/Inputs';
import Submit from '../components/Submit';

const SignUp = props => {
    return (
        <View style={{backgroundColor: '#F26530', flex: 1}}>
             <View  style={styles.topcontainer}>
                <Image 
                    source={require('../assets/friibee.png')} 
                    resizeMode="center" 
                    style={styles.image} />
            </View>
            <View style={styles.bottomcontainer}> 
                {/* <Text style={styles.textTitle}>Let's Get Started!</Text>
                <Text style={styles.textBody}>Create an account to get access to all features</Text> */}
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
            
        </View>    
    );
};

const styles = StyleSheet.create({
    topcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor:'#F26530', 
    },
    bottomcontainer: {
        flex: 3,
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 0,
        paddingTop: 15,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        backgroundColor: 'white',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
    },
    textTitle: {
        fontSize: 40,
        fontFamily: 'Nunito',
        //marginVertical: 10,
    },
    textBody: {
        fontSize: 16,
        fontFamily: 'Nunito',
        marginBottom: 15,
    }
});

export default SignUp;