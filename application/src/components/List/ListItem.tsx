import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { List } from '../../types'

const ListItem: React.FC<{item:List; navigate: any}> = ({item, navigate}) => {
    console.log(item);
  return (
   <TouchableOpacity onPress={() => navigate(item)}>
       <View style={{backgroundColor: "white", borderRadius: 10, marginVertical: 10, padding: 10, minHeight: 60, justifyContent: 'center'}}>
           <Text style={{color: "#000", fontSize: 16}}>{item.title}</Text>
       </View>
   </TouchableOpacity>
  )
}

export default ListItem