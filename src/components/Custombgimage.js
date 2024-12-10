import {ImageBackground} from 'react-native';
import React from 'react';

const Custombgimage = ({
  style,
  source,
  imageStyle,
  children,
  children1,
  resizeMode,
}) => {
  return (
    <ImageBackground
      resizeMode={resizeMode}
      source={source}
      style={style}
      imageStyle={imageStyle}>
      {children}
      {children1}
    </ImageBackground>
  );
};

export default Custombgimage;
