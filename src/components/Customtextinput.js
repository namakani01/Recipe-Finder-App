import {View, Text, TextInput} from 'react-native';
import React from 'react';

const Customtextinput = ({
  style,
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      style={[style]}></TextInput>
  );
};

export default Customtextinput;
