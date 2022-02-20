import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

const Details: React.FC<{route: any}> = ({route}) => {
  const [item, setItem] = useState(route.params.item)
  return (
   <View style={{flex: 1, backgroundColor: "white", paddingHorizontal: 16}}>
     <View style={{paddingVertical: 20}}>
       <Text style={{textAlign: 'center', fontSize: 22, fontWeight: "bold", textTransform: "capitalize"}}>{item.title}</Text>
     </View>
     <ScrollView>
     <View>
       <Text>{item.data}</Text>
     </View>
     </ScrollView>
   </View>
  )
}

export default Details