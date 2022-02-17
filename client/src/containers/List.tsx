import React from 'react';
import { useDispatch } from 'react-redux';
import { useMount } from 'react-use';
import {
  Grid
} from 'styled-minimal';

import { useShallowEqualSelector } from 'modules/hooks';
import { spacer } from 'modules/theme';

import { getList, getMore } from 'actions';

import Loader from 'components/Loader';
import { List } from 'types/common';
import InfiniteScroll from 'react-infinite-scroll-component';
import ListItem from './ListItem';

function ListContainer() {
  const dispatch = useDispatch();
  const { data } = useShallowEqualSelector(({ list }) => ({
    data: list.list || []
  }));

  useMount(() => {
    dispatch(getList());
  })

  const getMoreInfinite = (data: List[]) => {
      dispatch(getMore(data))
  }

  let output;

    if (data.length) {
      output = (
        <div className="listContainer">
          <InfiniteScroll
          dataLength={data.length} //This is important field to render the next data
          next={() => getMoreInfinite(data)}
          hasMore={data.length < 100}
          loader={<h4>Loading...</h4>}
        >
          {data.map((item: List) => (
            <ListItem key={item.id} item={item}/>
          ))}
        </InfiniteScroll>
        </div>
      );
    } else {
      output = <h3>Nothing found</h3>;
    }

  return (
    <div key="ListContainer">
      {output}
    </div>
  );
}

export default ListContainer;
