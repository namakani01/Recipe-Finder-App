import {Image} from 'react-native';
import React from 'react';

const Customimage = ({source, tintColor, style}) => {
  return (
    <Image
      resizeMode="cover"
      tintColor={tintColor}
      style={[style]}
      source={source}></Image>
  );
};

export default Customimage;
