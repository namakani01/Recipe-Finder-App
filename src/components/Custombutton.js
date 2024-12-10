import {TouchableOpacity} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Custombutton = ({style, onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style]}>
      {children}
    </TouchableOpacity>
  );
};

export default Custombutton;
