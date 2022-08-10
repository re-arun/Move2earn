import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

import { IMAGEPATH } from "../../Icon/Icon";
import LinearGradient from "react-native-linear-gradient";


import { SwiperFlatList } from "react-native-swiper-flatlist";

import CircularProgress from "react-native-circular-progress-indicator";



const { height, width } = Dimensions.get("screen");


const Gender = (props) => {
  const [check, setCheck] = useState("First");
  const [checked, setChecked] = useState('');
  var gender = ['Male', 'Female'];
  /**function for change  weight */
  const [Counter, setCounter] = useState(64);
  const IncrementCounter = () => setCounter(Counter + 1);
  const DecrementCounter = () => setCounter(Counter - 1);
  const Func = () => {
    if (Counter <= 0) {
      DecrementCounter = () => setCounter(1);
    }
  };

  const [Counter1, setCounter1] = useState(5);
  const IncrementCounter2 = () => setCounter1(Counter1 + 9);
  const IncrementCounter1 = () => setCounter1(Counter1 + 1);
  const DecrementCounter1 = () => setCounter1(Counter1 - 1);
  const DecrementCounter2 = () => setCounter1(Counter1 - 9);
  const Func1 = () => {
    if (Counter1 <= 0) {
      IncrementCounter2();
      DecrementCounter();
    }
  };
  const Func2 = () => {
    if (Counter1 >= 9) {
      DecrementCounter2();
      IncrementCounter();
    }
  };

  /***function for change height */
  const [Counter9, setCounter9] = useState(64);
  const IncrementCounter9 = () => setCounter9(Counter9 + 1);
  const DecrementCounter9 = () => setCounter9(Counter9 - 1);
  const Func9 = () => {
    if (Counter9 <= 0) {
      DecrementCounter9 = () => setCounter9(1);
    }
  };

  const [Counter8, setCounter8] = useState(5);
  const IncrementCounter7 = () => setCounter8(Counter8 + 9);
  const IncrementCounter8 = () => setCounter8(Counter8 + 1);
  const DecrementCounter8 = () => setCounter8(Counter8 - 1);
  const DecrementCounter7 = () => setCounter8(Counter8 - 9);
  const Func8 = () => {
    if (Counter8 <= 0) {
      IncrementCounter7();
      DecrementCounter9();
    }
  };
  const Func10 = () => {
    if (Counter8 >= 9) {
      DecrementCounter7();
      IncrementCounter9();
    }
  };
  return (
    <SafeAreaView>
      <ImageBackground
        source={IMAGEPATH.SPLASH_BACKGROUND}
        style={{ height: height , width: width}}
      >

      
       
  
       
        
                         
      
        <View>
          {check == "First" ? (
           
            <SafeAreaView>
    <View>
      <ImageBackground
        style={styles.ImageBackground}
        source={IMAGEPATH.SPLASH_BACKGROUND}>
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.fakeVIew3}></View>
        <View style={styles.backView}>
          <TouchableOpacity>
            <Image source={IMAGEPATH.BACK_ICON} />
          </TouchableOpacity>
        </View>
        <View style={{height: height * 1,  top:20}}>
          <View
            style={styles.StepContainer}>
            <View style={{ }}>
              <Image source={IMAGEPATH.STEP_ELIPS} />
              <Image
                source={IMAGEPATH.STEP_DONE}
                style={{position: 'absolute', alignSelf: 'center', top: 10}}
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Image source={IMAGEPATH.STEPS_REC} style={{width: 120}} />
            </View>
            <View style={{}}>
              <Image source={IMAGEPATH.EMPTY_ELIPS} />
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  top: 5,
                  color: 'white',
                }}>
                2
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Image source={IMAGEPATH.STEP_E_REc} style={{width: 120}} />
            </View>
            <View style={{}}>
              <Image source={IMAGEPATH.EMPTY_ELIPS} />
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  top: 5,
                  color: 'white',
                }}>
                3
              </Text>
            </View>
          </View>
          <View style={{height: height * 0.89}}>
            <View style={styles.ProgressViewMain}>
              <View style={styles.fakeVIew1}></View>
              <View style={styles.headingTextView}>
                <Text style={styles.textColor}>What’s your gender?</Text>
              </View>
              <View style={styles.paraTextView}>
                <Text style={styles.textColor1}>
                  Calories & stride length calculation need it
                </Text>
              </View>
              <View>
                <View
                  style={{
                    alignSelf: 'center',
                    height: height * 0.3,
                    width: width * 0.95,
                    // alignSelf:'center',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    //  backgroundColor:'white'
                  }}>
                  <View style={styles.btn}>
                    <View
                      style={{
                        flexDirection: 'row',
                        //  justifyContent:"space-between",
                        height: height * 0.28,
                        width: width * 0.95,
                        //  backgroundColor:'red',
                        //justifyContent:'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          setChecked(checked === 'female' ? 'male' : 'female')
                        }
                        style={styles.btn1}>
                        <View style={styles.image}>
                          <ImageBackground
                            style={styles.img}
                            source={
                              checked === 'male'
                                ? IMAGEPATH.NOTSELECTED_BG
                                : IMAGEPATH.SELECTED_BG
                            }>
                            <Image
                              style={{
                                height: height * 0.18,
                                width: width * 0.18,
                              }}
                              source={IMAGEPATH.MALE_ICON}
                            />
                            <View
                              style={{
                                height: height * 0.03,
                                width: width * 0.1,
                                alignSelf: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Text
                                style={{
                                  color: '#FFFFFF',
                                  fontSize: 14,
                                  fontWeight: '400',
                                }}>
                                Male
                              </Text>
                            </View>
                          </ImageBackground>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() =>
                          setChecked(checked === 'male' ? 'female' : 'male')
                        }
                        style={styles.btn1}>
                        <View style={styles.image}>
                          <ImageBackground
                            style={styles.img}
                            source={
                              checked === 'female'
                                ? IMAGEPATH.NOTSELECTED_BG
                                : IMAGEPATH.SELECTED_BG
                            }>
                            <Image
                              style={{
                                height: height * 0.18,
                                width: width * 0.18,
                              }}
                              source={IMAGEPATH.FEMALE_ICON}
                            />

                            <View
                              style={{
                                height: height * 0.03,
                                width: width * 0.14,
                                alignSelf: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Text
                                style={{
                                  color: '#FFFFFF',
                                  fontSize: 14,
                                  fontWeight: '400',
                                }}>
                                Female
                              </Text>
                            </View>
                          </ImageBackground>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* <Text>{gender[checked]}</Text> */}
                </View>
              </View>
              <View style={styles.fakeVIew3}></View>
              <View style={styles.loginButtonVIew}>
                <TouchableOpacity
                  style={styles.loginButtonVIew1}
                  onPress={() => setCheck("Second")}>
                  <ImageBackground
                    style={styles.borderStyle}
                    source={IMAGEPATH.BORDER_COLOR}>
                    <View style={styles.loginTextView}>
                      <Text style={styles.loginTextStyle}>Next</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    </SafeAreaView>
             
           
          ) : check == "Second" ? (
            <SafeAreaView>
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.ImageBackground}
        source={IMAGEPATH.SPLASH_BACKGROUND}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <View style={styles.fakeVIew3}></View>
        <View style={styles.backView}>
          <TouchableOpacity>
            <Image source={IMAGEPATH.BACK_ICON} />
          </TouchableOpacity>
        </View>
        <View style={{height: height * 1 ,top:20}}>
          <View
            style={styles.StepContainer}>
            <View >
              <Image source={IMAGEPATH.STEP_ELIPS} />
              <Image
                source={IMAGEPATH.STEP_DONE}
                style={{position: 'absolute', alignSelf: 'center', top: 10}}
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Image source={IMAGEPATH.STEPS_REC} style={{width: 120}} />
            </View>
            <TouchableOpacity onPress={() => setCheck("First")}>
              <View style={{}}>
                <Image source={IMAGEPATH.STEP_ELIPS} />
                <Image
                  source={IMAGEPATH.STEP_DONE}
                  style={{position: 'absolute', alignSelf: 'center', top: 10}}
                />
              </View>
            </TouchableOpacity>
            <View style={{alignSelf: 'center'}}>
              <Image source={IMAGEPATH.STEP_E_REc} style={{width: 120}} />
            </View>
            <View style={{}}>
              <Image source={IMAGEPATH.EMPTY_ELIPS} />
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  top: 5,
                  color: 'white',
                }}>
                3
              </Text>
            </View>
          </View>

          <View style={{height: height * 0.89}}>
            <View style={styles.ProgressViewMain}>
              <View style={styles.fakeVIew1}></View>
              <View style={styles.headingTextView1}>
                <Text style={styles.textColor}>How much do you weight?</Text>
              </View>
              <View style={styles.paraTextView}>
                <Text style={styles.textColor1}>
                  Please choose your weight.
                </Text>
              </View>
              <View style={styles.bgView}>
                <ImageBackground
                  style={{
                    height: height * 0.25,
                    width: width * 0.9,
                    alignSelf: 'center',
                    // justifyContent:"center",
                    // alignItems:'center'
                  }}
                  source={IMAGEPATH.HEIGHT_BG}>
                  <View style={styles.buttonmainView}>
                    <View style={styles.firstButton}>
                      <TouchableOpacity
                        onPress={() => {
                          IncrementCounter(), Func();
                        }}>
                        <Image source={IMAGEPATH.UP_Arrow} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.firstButton}>
                      <TouchableOpacity
                        onPress={() => {
                          IncrementCounter1(), Func2();
                        }}>
                        <Image source={IMAGEPATH.UP_Arrow} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.heightMainView}>
                    <View style={styles.FIrstNUmber1}></View>
                    <View style={styles.FIrstNUmber}>
                      <Text style={styles.textStyle}>{Counter}</Text>
                    </View>
                    <View style={styles.FIrstNUmber2}>
                      <Text style={styles.textStyle}>.</Text>
                    </View>
                    <View style={styles.FIrstNUmber}>
                      <Text style={styles.textStyle3}>{Counter1}</Text>
                    </View>
                    <View style={styles.FIrstNUmber1}>
                      <Text style={styles.textStyle1}>KG</Text>
                    </View>
                  </View>
                  <View style={styles.buttonmainView1}>
                    <View style={styles.firstButton}>
                      <TouchableOpacity onPress={() => DecrementCounter()}>
                        <Image source={IMAGEPATH.DOWN_Arrow} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.firstButton}>
                      <TouchableOpacity
                        onPress={() => {
                          DecrementCounter1(), Func1();
                        }}>
                        <Image source={IMAGEPATH.DOWN_Arrow} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.fakeVIew2}></View>
              <View style={styles.loginButtonVIew}>
                <TouchableOpacity
                  style={styles.loginButtonVIew1}
                  onPress={() => setCheck("Third")}>
                  <ImageBackground
                    style={styles.borderStyle}
                    source={IMAGEPATH.BORDER_COLOR}>
                    <View style={styles.loginTextView}>
                      <Text style={styles.loginTextStyle}>Next</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    </SafeAreaView>
          ) :   (
            <SafeAreaView>
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.ImageBackground}
        source={IMAGEPATH.SPLASH_BACKGROUND}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <View style={styles.fakeVIew3}></View>
        <View style={styles.backView}>
          <TouchableOpacity>
            <Image source={IMAGEPATH.BACK_ICON} />
          </TouchableOpacity>
        </View>
        <View style={{height: height * 1, top:20}}>
          <View
            style={styles.StepContainer}>
            <View style={{}}>
              <Image source={IMAGEPATH.STEP_ELIPS} />
              <Image
                source={IMAGEPATH.STEP_DONE}
                style={{position: 'absolute', alignSelf: 'center', top: 10}}
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Image source={IMAGEPATH.STEPS_REC} style={{width: 120}} />
            </View>
            <View style={{}}>
              <Image source={IMAGEPATH.STEP_ELIPS} />
              <Image
                source={IMAGEPATH.STEP_DONE}
                style={{position: 'absolute', alignSelf: 'center', top: 10}}
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Image source={IMAGEPATH.STEP_E_REc} style={{width: 120}} />
            </View>
            <TouchableOpacity onPress={() => setCheck("Second")}>
              <View style={{}}>
                <Image source={IMAGEPATH.STEP_ELIPS} />
                <Image
                  source={IMAGEPATH.STEP_DONE}
                  style={{position: 'absolute', alignSelf: 'center', top: 10}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height: height * 0.89}}>
            <View style={styles.ProgressViewMain}>
              <View style={styles.fakeVIew1}></View>

              <View style={styles.headingTextView1}>
                <Text style={styles.textColor}>How much do you height?</Text>
              </View>
              <View style={styles.paraTextView}>
                <Text style={styles.textColor1}>
                  Please choose your height.
                </Text>
              </View>
              <View style={styles.bgView}>
                <ImageBackground
                  style={{
                    height: height * 0.25,
                    width: width * 0.9,
                    alignSelf: 'center',
                    // justifyContent:"center",
                    // alignItems:'center'
                  }}
                  source={IMAGEPATH.HEIGHT_BG}>
                  <View style={styles.buttonmainView}>
                    <View style={styles.firstButton}>
                      <TouchableOpacity
                        onPress={() => {
                          IncrementCounter9(), Func9();
                        }}>
                        <Image source={IMAGEPATH.UP_Arrow} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.firstButton}>
                      <TouchableOpacity
                        onPress={() => {
                          IncrementCounter8(), Func10();
                        }}>
                        <Image source={IMAGEPATH.UP_Arrow} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.heightMainView}>
                    <View style={styles.FIrstNUmber1}></View>
                    <View style={styles.FIrstNUmber}>
                      <Text style={styles.textStyle}>{Counter9}</Text>
                    </View>
                    <View style={styles.FIrstNUmber2}>
                      <Text style={styles.textStyle}>.</Text>
                    </View>
                    <View style={styles.FIrstNUmber}>
                      <Text style={styles.textStyle3}>{Counter8}</Text>
                    </View>
                    <View style={styles.FIrstNUmber1}>
                      <Text style={styles.textStyle1}>CM</Text>
                    </View>
                  </View>
                  <View style={styles.buttonmainView1}>
                    <View style={styles.firstButton}>
                      <TouchableOpacity onPress={() => DecrementCounter9()}>
                        <Image source={IMAGEPATH.DOWN_Arrow} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.firstButton}>
                      <TouchableOpacity
                        onPress={() => {
                          DecrementCounter8(), Func8();
                        }}>
                        <Image source={IMAGEPATH.DOWN_Arrow} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.fakeVIew2}></View>
              <View style={styles.loginButtonVIew}>
                <TouchableOpacity
                  style={styles.loginButtonVIew1}
                  onPress={() => props.navigation.navigate("Home")}>
                  <ImageBackground
                    style={styles.borderStyle}
                    source={IMAGEPATH.BORDER_COLOR}>
                    <View style={styles.loginTextView}>
                      <Text style={styles.loginTextStyle}>Submit</Text>
                    </View>
                    <View></View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    </SafeAreaView>
          )}
        </View>
   
        <ImageBackground source={IMAGEPATH.BOTTOMTAB} style={{height:height*0.1, width:width*1, }} >
        <View style={{ flexDirection: "row", justifyContent: "space-around"  }}>
          <View style={{ height: height * 0.15, width: width * 0.2 , justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={() => setCheck("First")}>
              <Image  source={IMAGEPATH.BI1}/>
            </TouchableOpacity>
            {check == "First" ? (
              <View style={styles.bar}>
             
              </View>
            ) : (
              <View style={styles.bar}></View>
            )}
          </View>
          <View style={{ height: height * 0.15, width: width * 0.2 ,justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={() => setCheck("Second")}>
            <Image source={IMAGEPATH.BI2C} />
            <Image  source={IMAGEPATH.BI2} style={{position:"absolute", alignSelf:'center', top:20,}}/>
            </TouchableOpacity>
            {check == "Second" ? (
              <View style={styles.bar}>
              
              </View>
            ) : (
              <View style={styles.bar}></View>
            )}
          </View>
          <View style={{ height: height * 0.15, width: width * 0.2 ,justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={() => setCheck("Third")}>
            <Image  source={IMAGEPATH.BI3}/>
            </TouchableOpacity>

            <View style={styles.bar}>
              {check == "Third" ? (
                <View style={styles.bar}>
              
              </View>
              ) : null}
            </View>
          </View>
        </View>
</ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Gender;
const styles = StyleSheet.create({
  textStyle: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '400',
    // textAlign:"center"
  },
  textStyle3: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '400',
    textAlign: 'center',
  },
  textStyle1: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    
  },
  FIrstNUmber: {
    height: height * 0.07,
    width: width * 0.15,
    // borderWidth: 1,
    alignSelf: 'center',
  },
  FIrstNUmber1: {
    height: height * 0.05,
    width: width * 0.1,
    // borderWidth: 1,
    alignSelf: 'center',
  },
  FIrstNUmber2: {
    height: height * 0.07,
    width: width * 0.03,
    // borderWidth: 1,
    alignSelf: 'center',
  },
  heightMainView: {
    height: height * 0.08,
    // borderWidth: 1,
    width: width * 0.6,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bgView: {
    height: height * 0.25,
    //  borderWidth:1,
    width: width * 0.7,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  firstButton: {
    height: height * 0.03,
    // borderWidth:1,
    width: width * 0.15,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonmainView: {
    height: height * 0.09,
    // borderWidth:1,
    width: width * 0.45,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  buttonmainView1: {
    height: height * 0.08,
    // borderWidth:1,
    width: width * 0.45,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  borderStyle: {
    //resizeMode: 'contain',
    height: 69,
    width: 330,
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
  loginTextView: {
    height: height * 0.04,
    width: width * 0.4,
    // borderWidth: 1,
    alignSelf: 'center',
    // justifyContent:'center'
  },
  loginTextStyle: {
    fontSize: 20,
    color: '#FFFFFF',
    // fontFamily: 'Sen-regular',
    textAlign: 'center',
    fontWeight: '700',
  },
  loginButtonVIew: {
    height: height * 0.1,
    width: width * 0.88,
    //  borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loginButtonVIew1: {
    height: height * 0.08,
    width: width * 0.85,
    //  borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  img1: {
    height: height * 0.39,
    width: width * 0.45,

    justifyContent: 'center',
    alignSelf: 'center',

    // borderRadius: 15,
    // borderWidth: 0.49,
    borderColor: 'grey',
    //  resizeMode: 'contain',
    alignItems: 'center',
  },
  img: {
    height: height * 0.35,
    width: width * 0.43,
    justifyContent: 'center',
     alignSelf:'center',
    // borderRadius: 15,
    // borderWidth: 0.49,
    borderColor: 'grey',
    alignItems: 'center',
    // backgroundColor:'green',
       resizeMode: 'contain'
  },
  btn1: {
    height: height * 0.25,
    width: width * 0.46,
    alignContent: 'center',
    // alignSelf:'center',
    justifyContent: 'center',
    //borderRadius: 95
  },
  btn2: {
    // flexDirection: 'row',
    alignItems: 'center',
    //  backgroundColor: 'black',
    height: height * 0.25,
    width: width * 0.46,
    alignSelf: 'center',
    // justifyContent: 'center'
  },
  image: {
    // backgroundColor:'yellow',
    height: height * 0.29,
    width: width * 0.3,
    justifyContent: 'center',
    //borderWidth:2,
    borderColor: 'grey',
    resizeMode: 'contain',
    alignItems:'center',
    alignSelf: 'center',
    // alignItems:"flex-end"
  },
  image1: {
    // backgroundColor:'green',
    height: height * 0.25,
    width: width * 0.4,
    justifyContent: 'center',
    //borderWidth:2,
    borderColor: 'grey',
    // resizeMode: 'contain',
    alignSelf: 'center',
  },
  btn: {
    flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor:'blue',
    height: height * 0.07,
    width: width * 0.99,
    // alignSelf:'center',
    // justifyContent:'center'
    justifyContent: 'space-evenly',
  },
  headingTextView: {
    // borderWidth: 1,
    borderColor: 'white',
    height: height * 0.08,
    width: width * 0.7,
    alignSelf: 'center',
  },
  headingTextView1: {
    // borderWidth: 1,
    borderColor: 'white',
    height: height * 0.08,
    width: width * 0.92,
    alignSelf: 'center',
  },
  paraTextView: {
    //  borderWidth: 1,
    borderColor: 'white',
    height: height * 0.06,
    width: width * 0.75,
    alignSelf: 'center',
  },
  textColor1: {
    color: '#FFFFFF',
    fontSize: 14.5,
    fontWeight: '400',
    fontFamily: 'sen-Regular',
    // lineHeight:23,
    textAlign: 'center',
  },
  textColor: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'sairasemicondensed-Regular',
    textAlign: 'center',
  },
  ProgressViewMain: {
    alignSelf: 'center',
    height: height * 0.65,
    width: width * 0.99,
    // borderWidth: 1,
    borderColor: 'white',
  },
  mainContainer: {
    height: '100%',
    width: '100%',
    // justifyContent:'center'
  },
  ImageBackground: {
    height: '100%',
    width: '100%',
  },
  fakeVIew3: {
    height: height * 0.04,
    // backgroundColor:'red'
  },
  fakeVIew2: {
    height: height * 0.09,
    // backgroundColor:'green'
  },
  backView: {
    height: height * 0.04,
    width: width * 0.15,
    // borderWidth:1,
    borderColor: 'white',
    alignItems: 'center',
  },
  fakeVIew1: {
    height: height * 0.12,
    // backgroundColor:'cyan',
  },
  StepContainer:{
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    width: width * 0.9,
    justifyContent: 'center',
    alignSelf:'center',
  },
});

