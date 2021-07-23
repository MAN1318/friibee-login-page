import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

class Inputs extends Component {
    state = {isFocused: false};

    onFocusChange = () => {
        this.setState({isFocused: true})
    }

    render() {
        return(
            <View style={[styles.container, {borderColor: this.state.isFocused ? '#F26530': '#F26530'}]}>
                <Input 
                    placeholder={this.props.name}
                    onFocus={this.onFocusChange}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    secureTextEntry={this.props.pass}
                    leftIcon= {
                        <Icon 
                            name={this.props.icon}
                            size={22}
                            color={this.state.isFocused ? '#F26530' : '#F26530'}
                        />
                    }
                />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        borderRadius: 100,
        marginVertical: 5,
        // borderWidth: 3.5,
        backgroundColor:"#F2653029",
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        // elevation: 0.1,
        shadowRadius: 5,
        shadowOffset: {
        height: 1,
         width: 1
        }
    },
    inputContainer: {
        borderBottomWidth: 0
    },
    inputText: {
        fontFamily: 'Gilroy',
        color: 'black',
        // fontWeight: 'bold',
        marginLeft: 5,
        
    }
});

export default Inputs;