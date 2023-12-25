import styles from './qr_validate.style'
//import md5 from "react-native-md5";
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Crypto from 'expo-crypto';

import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useEffect, useState } from 'react';

const QRValidate = () => {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");

  const askForCameraPermission = () =>{
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == 'granted')
    })()
  }

  useEffect(() => {
    (async () => {
      const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        'GitHub stars are neat 🌟'
      );
      console.log('Digest: ', digest);
    })();
  }, []);

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({type,data}) =>{
    setScanned(true);
    setText(data);
    console.log('Type' + type + '\n' + 'data' + data )
  }

  if(hasPermission === null){
    return(
    <View>
      <Text style={styles.QRValidatorText}>Validate QR Code</Text>
    </View>
    )
  }

  if(hasPermission === false){
    return (
    <View>
      <Text style={styles.QRValidatorText}>No access to camera</Text>
      <Button title={'Allow Camera'} onPress={() => askForCameraPermission()}/>
    </View>
    )
  }
  return (
    <View style={{alignItems:'center'}}>
      <Text style={styles.QRValidatorText}>Validate QR Code</Text>
      <View style={styles.BarCodeBox}>
      <BarCodeScanner
      onBarCodeScanned={scanned ? undefined :handleBarCodeScanned }
      style={{height:400,width:400}}
      >
      </BarCodeScanner>
      </View>
      <Text>
      {text}
      </Text>
    </View>
  )
}

export default QRValidate