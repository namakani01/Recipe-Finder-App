import {FlatList} from 'react-native';
import React from 'react';

const Customflatlist = ({data, renderItem}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      renderItem={renderItem}></FlatList>
  );
};

export default Customflatlist;
