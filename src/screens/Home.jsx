import {
  View,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Customtext from '../components/Customtext';
import Customtextinput from '../components/Customtextinput';
import Custombutton from '../components/Custombutton';
import Custombgimage from '../components/Custombgimage';
import Customimage from '../components/Customimage';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import Customflatlist from '../components/Customflatlist';
import * as Animatable from 'react-native-animatable';
import {horizontalScale, moderateScale, verticalScale} from '../styles/metrics';

const recipeImages = [
  require('../assest/images/tuna-Salad.jpg'),
  require('../assest/images/noodles.png'),
  require('../assest/images/travel.png'),
  require('../assest/images/donuts.png'),
];

const Home = props => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  // console.log('search', search);
  // console.log('>>', data);

  const Fetchrecipe = async () => {
    const options = {
      method: 'GET',
      url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
      params: {
        query: search,
      },
      headers: {
        'x-rapidapi-key': '77d7bd8196msh79a495daa9921acp1262d0jsnf6d7a798ae00',
        'x-rapidapi-host': 'recipe-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getImageForIndex = index => {
    if (index < recipeImages.length) {
      return recipeImages[index];
    }
    return require('../assest/images/donuts.png');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View
          style={{
            marginTop: verticalScale(15),
            marginLeft: horizontalScale(20),
          }}>
          <Customtext
            animation={'slideInRight'}
            duration={800}
            style={{
              color: '#FF4000',
              fontSize: moderateScale(20),
              fontWeight: 600,
            }}
            text="Hi Emilia"
          />
          <Customtext
            animation={'slideInRight'}
            duration={800}
            style={{
              color: '#FF4000',
              fontSize: moderateScale(13),
              fontWeight: 400,
            }}
            text="Welcome,for delicious recipes"></Customtext>
        </View>

        <View style={styles.textinputcontainer}>
          <Customtextinput
            value={search}
            onChangeText={text => setSearch(text)}
            placeholder={'Search Recipe Here'}
            placeholderTextColor={'#FF4000'}
            style={styles.textinputstyle}></Customtextinput>
          <Custombutton onPress={() => Fetchrecipe()}>
            <Icon
              style={styles.searchiconstyle}
              name="search1"
              size={20}
              color="#FF4000"></Icon>
          </Custombutton>
        </View>

        <Animatable.View
          animation={'slideInRight'}
          delay={800}
          style={styles.buttonconatiner}>
          <Custombutton style={styles.buttonstyle}>
            <Customimage
              tintColor={'white'}
              style={{
                height: verticalScale(20),
                width: horizontalScale(20),
              }}
              source={require('../assest/images/noodles.png')}></Customimage>

            <Customtext
              style={{
                color: 'white',
                marginLeft: horizontalScale(10),
                fontSize: moderateScale(14),
                fontWeight: 'bold',
              }}
              text="Italian"></Customtext>
          </Custombutton>

          <Custombutton style={styles.buttonstyle}>
            <Customimage
              tintColor={'white'}
              style={{height: verticalScale(20), width: horizontalScale(20)}}
              source={require('../assest/images/travel.png')}></Customimage>

            <Customtext
              style={{
                color: 'white',
                marginLeft: horizontalScale(10),
                fontSize: moderateScale(14),
                fontWeight: 'bold',
              }}
              text="Indian"></Customtext>
          </Custombutton>

          <Custombutton style={styles.buttonstyle}>
            <Customimage
              tintColor={'white'}
              style={{height: verticalScale(20), width: horizontalScale(20)}}
              source={require('../assest/images/donuts.png')}></Customimage>

            <Customtext
              style={{
                color: 'white',
                marginLeft: horizontalScale(10),
                fontSize: moderateScale(14),
                fontWeight: 'bold',
              }}
              text="Japan"></Customtext>
          </Custombutton>
        </Animatable.View>

        <Animatable.View
          animation={'zoomIn'}
          delay={800}
          style={styles.bgimageconatiner}>
          <Custombgimage
            resizeMode={'contain'}
            style={styles.bgimagestyle}
            imageStyle={{borderRadius: moderateScale(25)}}
            source={require('../assest/images/tuna-Salad.jpg')}>
            <LinearGradient
              start={{x: 1.1, y: 0.5}}
              end={{x: 0, y: 0.5}}
              colors={['#ffffff00', '#FF4000']}
              style={{
                height: verticalScale(136),
                backgroundColor: 'transparent',
                position: 'absolute',
                top: verticalScale(7),

                borderRadius: moderateScale(10),
              }}>
              <Customtext
                style={{
                  fontSize: moderateScale(20),
                  marginTop: verticalScale(40),
                  marginLeft: 20,
                  color: 'white',
                  fontWeight: 500,
                }}
                text={'Tuna Salad'}></Customtext>
              <Customtext
                style={{
                  fontSize: moderateScale(13),
                  marginTop: verticalScale(10),
                  marginLeft: horizontalScale(20),
                  color: 'white',
                  fontWeight: 500,
                }}
                text={
                  'Check Out New Recipe share by Sophia share'
                }></Customtext>
            </LinearGradient>
          </Custombgimage>
        </Animatable.View>

        <View
          style={{
            marginTop: verticalScale(20),
            marginLeft: horizontalScale(20),
          }}>
          <Customtext
            animation={'slideInRight'}
            style={{
              color: '#FF4000',
              fontSize: moderateScale(20),
              fontWeight: 600,
            }}
            text="Popular Recipes"></Customtext>
        </View>

        <Customflatlist
          data={data}
          renderItem={({item, index}) => (
            <Animatable.View animation={'fadeInUp'}>
              <Custombutton
                onPress={() =>
                  props.navigation.navigate('Recipe', {
                    item,
                    image: getImageForIndex(index),
                  })
                }
                style={{
                  height: verticalScale(215),
                  width: horizontalScale(150),
                  margin: 16,
                  // backgroundColor: 'red',
                  backgroundColor: 'white',
                  borderRadius: moderateScale(15),
                  elevation: 5,
                  borderColor: '#ddd',
                  shadowOffset: {height: 1, width: 1},
                  shadowRadius: 10,
                  shadowOpacity: 0.3,
                }}>
                <Customimage
                  style={{
                    height: verticalScale(150),
                    width: horizontalScale(150),
                    borderTopRightRadius: moderateScale(15),
                    borderTopLeftRadius: moderateScale(15),
                  }}
                  source={getImageForIndex(index)}></Customimage>

                <Customtext
                  style={{
                    fontSize: moderateScale(12),
                    marginTop: verticalScale(15),
                    textAlign: 'left',
                    marginLeft: horizontalScale(15),
                  }}
                  text={item.title}></Customtext>
              </Custombutton>
            </Animatable.View>
          )}></Customflatlist>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  textinputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 2,
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
    borderRadius: moderateScale(30),
    backgroundColor: 'white',
    elevation: 10,
    borderColor: '#ddd',
    shadowOffset: {height: 2, width: 0},
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },

  textinputstyle: {
    // borderWidth: 2,
    borderRadius: 20,
    paddingLeft: horizontalScale(15),
    height: verticalScale(45),
    width: '75%',
  },

  searchiconstyle: {
    marginRight: horizontalScale(20),
  },

  buttonconatiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: verticalScale(25),
    // backgroundColor: 'yellow',
  },

  buttonstyle: {
    backgroundColor: '#FF4000',
    flexDirection: 'row',
    alignItems: 'center',
    padding: horizontalScale(6),
    borderRadius: moderateScale(10),
  },
  bgimageconatiner: {
    // height: 150,
    // width: 350,
    marginTop: verticalScale(20),
    // borderRadius: 20,
    // backgroundColor: 'red',
    alignSelf: 'center',
  },

  bgimagestyle: {
    height: verticalScale(150),
    width: horizontalScale(350),
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default Home;
