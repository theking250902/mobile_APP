import { StyleSheet, Text, View,Image, StatusBar } from 'react-native'
import React from 'react'

const ProductDetail = () => {
  return (
    <View style={styles.container}>
       <StatusBar
       barStyle={'light-content'}
       translucent={true}
       backgroundColor={'transparent'}
       >
        
        </StatusBar> 
      <View>
            <Image source={require('../image/Left_Arrow.png')}></Image>
      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    container:{
        paddingStart:10,
        paddingEnd:10,
        backgroundColor:'#FFFFFF',
        flex:1
    },
    
})