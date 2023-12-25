import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  QRValidatorText: {
    fontWeight:'bold',
    marginTop: 20,
    textAlign: "center"
  },
  PremissionDeniedText: {
    fontWeight:'bold',
    marginTop: 20,
    textAlign: "center",
    margin:10
  },
  BarCodeBox:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'

  }
});

export default styles;