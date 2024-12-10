import {Text} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Customtext = ({text, style, animation, duration}) => {
  return (
    <Animatable.Text duration={duration} animation={animation} style={[style]}>
      {text}
    </Animatable.Text>
  );
};

export default Customtext;
