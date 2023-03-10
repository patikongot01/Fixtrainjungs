//import * as React from "react";
import React, {createContext,useContext, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  Button,
  TouchableOpacity,
 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { setGenericPassword } from 'react-native-keychain';
import { Keychain } from 'react-native-keychain';

const LoginAdmin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPressDetail = (email, password) => {
     createUser(email, password);
     createToken(email, password).then(async response => {
       if (response.status === 200) {
         //navigation.navigate("HomeAdmin");
         navigation.navigate('AddStatus', {email: email, password: password})
         navigation.navigate('HomeAdmin', { email: email, password: password });
         const accessToken = response.json().access_token;
        storeAccessToken(accessToken);
     
       } else if (response.status === 401) {
         // Invalid credentials
         console.log("Invalid credentials");
       } else {
         // Other error
         console.log("Login failed:", response.status, response.statusText);
       }
     });

  };
  const storeAccessToken = async (accessToken) => {
    try {
      await Keychain.setGenericPassword('access_token', accessToken);
    } catch (error) {
      console.error(error);
    }
  };
  


  
  const createUser = (email, password) => {
    axios.post('https://shark-app-wblp9.ondigitalocean.app/api/users', {
      email: email,
      idStation: 0,
      stationName: 'string',
      hashed_password: password,
    }, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };
  
  
  const createToken = (email, password) => {
    return axios.post('https://shark-app-wblp9.ondigitalocean.app/api/token', `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-API-ID': 'email',
        'X-API-Password': 'password',
      },
    });
  };
  
  return (
    <View style={styles.loginAdmin}>
      <StatusBar barStyle="default" />
      <View style={styles.background} />
      <View style={styles.logo}>
        <View style={styles.tRAINJUNG1}>
          <Image
            style={styles.train21}
            resizeMode="cover"
            source={require("../assets/train-2-1.png")}
          />
          <Text style={styles.tRAINJUNG}>TRAINJUNG</Text>
        </View>
      </View>
      <Text style={styles.login}>Login</Text>

      <View style={styles.password2}>
        <View style={styles.rectangleView} />
        <Text style={styles.password0}>Password</Text>
        <TextInput
          style={styles.password1}
          placeholder="Password"
          value={password}
          onChangeText={text =>setPassword(text)}
          secureTextEntry
          keyboardType="default"
          placeholderTextColor="#b4b4b4"
          maxLength={6}

        />
      </View>
      <View style={styles.userID1}>
  <View style={styles.rectangleView1}>
    <Text style={styles.userID}>User ID</Text>
    <TextInput
      style={styles.userIdEMailRailwaycot}
      placeholder="User id/ e-mail @railway.co.th"
      value={email}
      onChangeText={text => setEmail(text)}
      keyboardType="default"
      placeholderTextColor="#b4b4b4"
    />
  </View>
</View>
      <Text style={styles.forgotPassword}>Forgot password ?</Text>
      <Text style={styles.checkRegistrationStatus}>
        Check registration status
      </Text>
     
      <Pressable
  style={styles.buttonLogin}
  //onPress={() => navigation.navigate("HomeAdmin")} 
  onPress={() => onPressDetail(email, password)}>
  <Pressable style={styles.backgroundButton} />
  <Text style={styles.login1}>Login</Text>
</Pressable>

    </View>
  );
};


const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 174,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(255, 138, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 400,
    height: 626,
  },
  train21: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 88,
    height: 88,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  tRAINJUNG: {
    position: "absolute",
    top: 88,
    left: 2,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 85,
    height: 34,
  },
  tRAINJUNG1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 88,
    height: 122,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    top: 47,
    left: 136,
    width: 88,
    height: 122,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    position: "absolute",
    top: 198,
    left: 28,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 40,
  },
  rectangleView: {
    position: "absolute",
    top: 17,
    left: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255, 233, 207, 0.25)",
    borderStyle: "solid",
    borderColor: "rgba(255, 138, 0, 0.25)",
    borderWidth: 1,
    width: 300,
    height: 40,
  },
  password0: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#ff8a00",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 55,
    height: 30,
  },
  password1: {
    position: "absolute",
    top: 15,
    left: 5,
  },
  password2: {
    position: "absolute",
    top: 314,
    left: 29,
    width: 301,
    height: 50,
  },
  rectangleView1: {
    position: "absolute",
    top: 17,
    left: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255, 233, 207, 0.25)",
    borderStyle: "solid",
    borderColor: "rgba(247, 142, 72, 0.25)",
    borderWidth: 1,
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  userID: {
    position: "absolute",
    top: -20,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#ff8a00",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 15,
  },
  userIdEMailRailwaycot: {
    position: "absolute",
    top: -5,
    left: 5,
    
  },
  userID1: {
    position: "absolute",
    top: 252,
    left: 29,
    width: 301,
    height: 57,
  },
  forgotPassword: {
    position: "absolute",
    top: 378,
    left: 224,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "rgba(247, 142, 72, 0.8)",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 107,
    height: 15,
  },
  checkRegistrationStatus: {
    position: "absolute",
    top: 484,
    left: 107,
    fontSize: 12,
    textDecoration: "underline",
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "rgba(247, 142, 72, 0.8)",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 145,
    height: 15,
  },
  backgroundButton: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ff8a00",
    width: 300,
    height: 40,
  },
  login1: {
    position: "absolute",
    top: 11,
    left: 116,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
    width: 66,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogin: {
    position: "absolute",
    top: 417,
    left: 30,
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  loginAdmin: {
    position: "relative",
    backgroundColor: "#ff8a00",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});



export default LoginAdmin ;

