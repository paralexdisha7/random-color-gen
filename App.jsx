import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const App = () => {
    const [randomBackground, setRandomBackground] = useState("#ffffff")

    const generateColor = () =>{
        const hexRange = "0123456789ABCDEF"
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)];
        }
        setRandomBackground(color)
    }
  return (
    <>
      <StatusBar backgroundColor={'#000'} />
      <View style={[styles.container,{backgroundColor:randomBackground}]}>
        <TouchableOpacity
        onPress={generateColor}
        >
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Tap Here</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.colorHEX} selectable={true}>{randomBackground}</Text>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    backgroundColor: '#5a0d3e',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  actionBtnTxt:{
    fontSize:24,
    textTransform:'uppercase',
    color:'#fff'
  },
  colorHEX:{
    marginTop:20,
    color:'#fff',
    fontSize:20
  }

});
