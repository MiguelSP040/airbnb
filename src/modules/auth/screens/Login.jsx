import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Image ,Input, Button } from "@rneui/base";
import {isEmpty} from "lodash";
import { Icon } from "@rneui/base";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/utils/firebaseConnection";
export default function Login(props){
    console.log(props);
    const {navigation} = props;
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({email:"",password:""});
    const [showPassword, setShowPassword] = useState(true);
    const handleLogin = () =>{
        if(isEmpty(email) || isEmpty(password)){
            setError({
                email: "El correo electronico es requerido",
                password: "La contraseña es requerida"
            })

        }else{
            setError({
                email: "",
                password: ""});
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(email, password);
            // ...
            })
            .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                  });
        }
    }
    return(
        <View style={styles.container}>
            <Image
                source= {{uri:"https://imgs.search.brave.com/P_M3pBpsfn9XIrRyZUJ-Q-dW6_8QuhP2IQ4vRAUqzns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvYWly/Ym5iLTItbG9nby1w/bmctdHJhbnNwYXJl/bnQucG5n"}}
                style={{width:100, height:100}}
            />

            <View stye={{margin:10}}>
                <Input
                    placeholder="Correo electronico"
                    label="Correo electronico"
                    keyboardType="email-address"
                    inputContainerStyle={{width:'100%'}}
                    onChange={({nativeEvent: {text}})=>setEmail(text)}
                    errorMessage={error.email}

                />
                <Input
                    placeholder="Contraseña"
                    label="Constraseña"
                    secureTextEntry={showPassword}
                    inputContainerStyle={{width:'100%'}}
                    onChange={({nativeEvent: {text}})=>setPassword(text)}
                    errorMessage={error.password}
                    rightIcon={
                        <Icon
                            onPress={()=>setShowPassword(!showPassword)}
                            type="material-community"
                            name = {showPassword ? "eye-outline" : "eye-off-outline"}
                        />
                    }
                />
                <Button
                    title={"Iniciar sesion"}
                    onPress={handleLogin}
                />
                <Button type="clear" title={"Crear cuenta"}
                    onPress={()=>navigation.navigate("CreateAccountStack")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})