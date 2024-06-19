import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container  :{
    // flex : 1,
    alignItems : 'center',
    paddingTop : 80
    // justifyContent : 'center',
    // backgroundColor : 'red'
  },
  logo: {
    // width: 100,
    height: 150,
    maxWidth  : '60%',
    resizeMode : 'contain',
  },
  buttons  :{
    marginTop : 80
  },
  button : {
    marginBottom : 20
  },
  menu : {
    borderRadius : 30,
    backgroundColor : '#dafaf7',
    paddingVertical : 20,
    paddingHorizontal : 35,

  },
  singlePlayer : {
    fontSize  :18,
    color  : '#221a36',

  }
})
export default styles;
