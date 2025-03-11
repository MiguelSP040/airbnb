import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Image ,Input, Button } from "@rneui/base";
import {isEmpty, isEqual} from "lodash";
import { Icon } from "@rneui/base";
export default function CreateAccount(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({email:"",password:""});
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const handleCreate = () =>{
        if(isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)){
            setError({
                email: "El correo electronico es requerido",
                password: "La contraseña es requerida",
                confirmPassword: "La confirmacion de la contraseña es requerida"
            })

        } else if(password !== confirmPassword){
            setError({
                email: "",
                password: "",
                confirmPassword: "Las contraseñas no coinciden"
            })
        } else{
            console.log("Crear cuenta");
            console.log(email, password, confirmPassword);
            setError({
                email: "",
                password: "",
                confirmPassword: ""
            })
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
                <Input
                    placeholder="Confirmar contraseña"
                    label="Confirmar contraseña"
                    secureTextEntry={showPassword}
                    inputContainerStyle={{width:'100%'}}
                    onChange={({nativeEvent: {text}})=>setConfirmPassword(text)}
                    errorMessage={error.confirmPassword}
                    rightIcon={
                        <Icon
                            onPress={()=>setshowConfirmPassword(!showConfirmPassword)}
                            type="material-community"
                            name = {showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                        />
                    }
                />
                <Button
                    title={"Crear cuenta"}
                    onPress={handleCreate}
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