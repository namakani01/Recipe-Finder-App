import {View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import Custombutton from '../components/Custombutton';
import Custombgimage from '../components/Custombgimage';
import Backarrow from 'react-native-vector-icons/AntDesign';
import Play from 'react-native-vector-icons/MaterialIcons';
import Customtext from '../components/Customtext';
import Star from 'react-native-vector-icons/Foundation';
import Comment from 'react-native-vector-icons/MaterialCommunityIcons';
import Time from 'react-native-vector-icons/MaterialIcons';

import {horizontalScale, moderateScale, verticalScale} from '../styles/metrics';
import {SafeAreaView} from 'react-native-safe-area-context';

const Recipe = props => {
  // console.log('>>', props.route.params);
  // const [data, setData] = useState(props.route.params.data);
  // console.log('data', data);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Custombgimage
        resizeMode={'cover'}
        style={{
          flex: 1,
          justifyContent: 'space-between',
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
        }}
        imageStyle={{opacity: 0.7, backgroundColor: '#ffffff00'}}
        source={props.route.params.image}>
        <SafeAreaView>
          <View
            style={{
              width: '92%',
              // backgroundColor: 'red',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Custombutton
              onPress={() => props.navigation.goBack()}
              style={{
                height: verticalScale(43),
                width: horizontalScale(43),
                borderRadius: moderateScale(45),
                backgroundColor: '#ddd',
                alignItems: 'center',
                // backgroundColor: 'yellow',
              }}>
              <Backarrow
                style={{padding: verticalScale(10), alignItems: 'center'}}
                name="arrowleft"
                size={23}
                color="black"
              />
            </Custombutton>

            <Custombutton
              style={{
                height: verticalScale(43),
                width: horizontalScale(43),
                borderRadius: moderateScale(45),
                backgroundColor: '#ddd',
                alignItems: 'center',
                // backgroundColor: 'yellow',
              }}>
              <Play
                style={{padding: verticalScale(10)}}
                name="play-circle-outline"
                size={25}></Play>
            </Custombutton>
          </View>
        </SafeAreaView>

        <View
          style={{
            // marginTop: verticalScale(300),
            height: verticalScale(450),
            width: '92%',
            borderTopRightRadius: moderateScale(50),

            backgroundColor: '#FF4000',
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              borderTopRightRadius: moderateScale(50),
              // paddingBottom:50,
              marginBottom: 15,
            }}>
            <View
              style={{
                marginTop: verticalScale(12),
                marginLeft: horizontalScale(5),
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Star name="star" size={19} color={'white'}></Star>
                <Customtext
                  style={{
                    fontSize: moderateScale(14),
                    color: 'white',
                    marginLeft: horizontalScale(6),
                  }}
                  text={'4.5'}></Customtext>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Comment name="comment" size={19} color={'white'}></Comment>
                <Customtext
                  style={{
                    fontSize: moderateScale(14),
                    color: 'white',
                    marginLeft: horizontalScale(6),
                  }}
                  text={'604'}></Customtext>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Time name="access-time" size={19} color={'white'}></Time>
                <Customtext
                  style={{
                    fontSize: moderateScale(14),
                    marginLeft: horizontalScale(6),
                    color: 'white',
                  }}
                  text={'8min 40Sec'}></Customtext>
              </View>
            </View>

            <View
              style={{
                marginTop: verticalScale(25),
                marginLeft: horizontalScale(15),
              }}>
              <Customtext
                style={{color: 'white', fontSize: moderateScale(14)}}
                text={'Recipe : '}></Customtext>
              <Customtext
                animation={'slideInRight'}
                style={{
                  marginTop: verticalScale(3),
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: moderateScale(19.5),
                }}
                text={props.route.params.item.title}></Customtext>
            </View>

            <View
              style={{
                marginTop: verticalScale(15),
                marginLeft: horizontalScale(15),
                // backgroundColor: 'yellow',
                width: horizontalScale(325),
              }}>
              <Customtext
                style={{color: 'white', fontSize: moderateScale(14)}}
                text={'Ingredients : '}></Customtext>
              <Customtext
                style={{
                  textAlign: 'left',
                  color: 'white',
                  // fontWeight : 500,
                  marginTop: verticalScale(10),
                }}
                text={props.route.params.item.ingredients}></Customtext>
            </View>

            <View
              style={{
                marginTop: verticalScale(15),
                marginLeft: horizontalScale(15),
                // backgroundColor: 'yellow',
                width: horizontalScale(325),
              }}>
              <Customtext
                style={{color: 'white', fontSize: moderateScale(14)}}
                text={'Instructions : '}></Customtext>
              <Customtext
                style={{
                  textAlign: 'left',
                  color: 'white',
                  marginTop: verticalScale(10),
                }}
                text={props.route.params.item.instructions}></Customtext>
            </View>
          </ScrollView>
        </View>
      </Custombgimage>
    </View>
  );
};

export default Recipe;
