
import QRCode from 'react-native-qrcode-svg';
import styles from './qr_generate.style'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

//let hex_md5v = md5.hex_md5("admin");
//console.log("hex_md5:", hex_md5v);
const QRGenerate = () => {

  return (
    <View>
      <Text style={styles.QrGenerator}>Generate QR Code</Text>
      <View style={{alignItems:'center'}}>
        <QRCode
          value='this is a tesfhjkhjkfhjwkehfjkwehkjwefhkwjefhjkwefhwkfjhwkjefhwkjefhjkwefhwjkefhkwjefhjkwefhkwjefhwkejfhwjkefhwkjefht'
          size={300}
        />
      </View>
    </View>
  )
}

export default QRGenerate