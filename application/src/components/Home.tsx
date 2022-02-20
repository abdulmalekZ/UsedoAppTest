import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, TouchableHighlight, FlatList } from 'react-native'
import { useDispatch } from 'react-redux';
import { getList, getMore } from '../actions';
import { useShallowEqualSelector } from '../modules/hooks';
import { List } from '../types';
import ListItem from './List/ListItem';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { data } = useShallowEqualSelector(({ list }) => ({
    data: list.list || [],
  }));

  useEffect(() => {
    dispatch(getList());
  }, []);

  const getMoreInfinite = (data: List[]) => {
    dispatch(getMore(data));
  };

  const keyExtractorList = (item: List, index: number) => {
    return index.toString();
  };

  const navigateItem = (item: List) => {
    navigation.navigate("Details" as never, {item} as never)
  }

  const renderData = (item: any) => {
    return (
        <ListItem navigate={navigateItem} item={item.item} />
    );
  };

  const loadMore = () => {
    if(data.length < 100) 
      getMoreInfinite(data)
  }

  return (
    <View style={{flex: 1, paddingHorizontal: 16, backgroundColor: "#f0f0f0"}}>
      <FlatList
          data={data}
          keyExtractor={keyExtractorList}
          renderItem={renderData}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
        />
    </View>
  )
}

export default Home