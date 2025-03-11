import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import Loading from "../../../kernel/components/Loading";
import { Button } from "@rneui/base";
export default function LearningComponent(){
    const [count, setCount] = useState(1);
    return(
        <View style={{flex:1}}>
            <Text>Learning</Text>
            <Loading
             message="Espere un momento"
             color="red"
             size={32}
             count={count}
             isVisible={false}
            />
            <Button title="Incrementar" onPress={()=>{
                setCount(count+1);
            }}/>
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