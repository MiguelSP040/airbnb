import { StyleSheet, Text, View, FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import {db} from "../../../config/utils/firebaseConnection";
import Loading from "../../../kernel/components/Loading";
import ListHouses from '../../../kernel/components/ListHouses';

export default function Home(props) {
  const {navigation} = props;
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //Funcion anonima autoejecutable asincrona 
    (async() =>{
      try {
        const querySnapshot = await getDocs(collection(db, "place"));
        const houseArray = [];
          querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          houseArray.push(doc.data());
        });
        setHouses(houseArray);
      } catch (error) {
        console.log("Error gettin documents: ", error);
        
      }finally{
        setLoading(false);
      }

    })();
  }, []);
  if(loading){
    return(
      <Loading isVisible={true} size= {64} color='#4abfa4' title='Cargando los inmuebles'/>
    );
  } else{
    return (
      <View style={styles.container}>
        <FlatList
          data={houses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ListHouses
              images={item.images}
              name={item.name}
              description={item.description}
              price={item.price}
              rating={item.rating}
              count={item.count}
              navigation={navigation}
            />
          )}
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

      },
})