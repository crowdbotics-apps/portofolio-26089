import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1_3}>
        <Text style={styles.Text_1_3}>Muhammad Rizqi</Text>
      </View>
      <View style={styles.View_1_528}>
        <View style={styles.View_1_9}>
          <Text style={styles.Text_1_9}>Home</Text>
        </View>
        <View style={styles.View_1_10}>
          <Text style={styles.Text_1_10}>Project</Text>
        </View>
        <View style={styles.View_1_11}>
          <Text style={styles.Text_1_11}>About</Text>
        </View>
        <View style={styles.View_1_51}>
          <Text style={styles.Text_1_51}>Kontak</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac6/f982/7ab47279f1db3846af4adeea201a5666"
        }}
        style={styles.ImageBackground_1_24}
      />
      <View style={styles.View_1_29}>
        <View style={styles.View_1_25} />
        <View style={styles.View_1_26}>
          <Text style={styles.Text_1_26}>Download CV</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ac/6755/59001881b051735d00f14ccc10f2a6a4"
        }}
        style={styles.ImageBackground_1_44}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e39/7df1/e7c4f8e1c3e423771ae45868b35c934f"
        }}
        style={styles.ImageBackground_1_47}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e232/e2c5/d3de5834380787d98d430a77386dd41b"
        }}
        style={styles.ImageBackground_1_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12f0/d0d8/5471ad3556ec9ad559c680588c6edeb8"
        }}
        style={styles.ImageBackground_10_606}
      />
      <View style={styles.View_1_53} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/899f/1670/566bd37e6b89a9107dce7c4bde7e65a5"
        }}
        style={styles.ImageBackground_1_54}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e9f/ba27/beb93ff1e3e903f9653b2d4fe4b3cc63"
        }}
        style={styles.ImageBackground_1_56}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7511/ffd3/d9e550017f3f7826ce4a55c28a92f70f"
        }}
        style={styles.ImageBackground_1_32}
      />
      <View style={styles.View_1_41}>
        <Text style={styles.Text_1_41}>
          Hallo ,Nama Saya Muhammad Rizqi Saya Adalah seorang Ui/Ux Designer
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_1_120}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_1_126}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_1_121}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_1_127}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_1_124}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_1_128}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_1_125}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_1_129}
      />
      <View style={styles.View_34_135}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7606/9907/9499742cea5bccb6863a782e58a079bc"
          }}
          style={styles.ImageBackground_34_127}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe1c/0498/3a08d6b7a85f637672e19dc1de6bfec1"
          }}
          style={styles.ImageBackground_34_128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcd2/4dc1/a552fcaaa162a1d11e1d2fc1382a2776"
          }}
          style={styles.ImageBackground_34_136}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a60/7879/98e940fc53317283410e9d94797949ad"
          }}
          style={styles.ImageBackground_34_134}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_3: {
    width: wp("14.930555555555555%"),
    minWidth: wp("14.930555555555555%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("5.737704918032787%")
  },
  Text_1_3: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_528: {
    width: wp("30.208333333333332%"),
    minWidth: wp("30.208333333333332%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.30555555555556%"),
    top: hp("4.2349726775956285%")
  },
  View_1_9: {
    width: wp("5.069444444444445%"),
    minWidth: wp("5.069444444444445%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_9: {
    color: "rgba(41, 140, 232, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_10: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.541666666666671%"),
    top: hp("0%")
  },
  Text_1_10: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_11: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.736111111111114%"),
    top: hp("0%")
  },
  Text_1_11: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_51: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.16666666666667%"),
    top: hp("0%")
  },
  Text_1_51: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_24: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.53307888677211%"),
    minHeight: hp("51.53307888677211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96.58469945355192%")
  },
  View_1_29: {
    width: wp("14.652777777777779%"),
    minWidth: wp("14.652777777777779%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("57.513661202185794%")
  },
  View_1_25: {
    width: wp("14.652777777777779%"),
    minWidth: wp("14.652777777777779%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(41, 140, 232, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_26: {
    width: wp("11.527777777777779%"),
    minWidth: wp("11.527777777777779%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444446%"),
    top: hp("1.639344262295083%")
  },
  Text_1_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_44: {
    width: wp("3.958333333333333%"),
    height: hp("7.786885245901639%"),
    top: hp("57.786885245901644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.180555555555557%")
  },
  ImageBackground_1_47: {
    width: wp("3.958333333333333%"),
    height: hp("7.786885245901639%"),
    top: hp("57.786885245901644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.52777777777778%")
  },
  ImageBackground_1_49: {
    width: wp("3.958333333333333%"),
    height: hp("7.786885245901639%"),
    top: hp("57.650273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.875%")
  },
  ImageBackground_10_606: {
    width: wp("3.3333333333333335%"),
    height: hp("6.557377049180328%"),
    top: hp("58.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.22222222222222%")
  },
  View_1_53: {
    width: wp("20.416666666666668%"),
    minWidth: wp("20.416666666666668%"),
    height: hp("51.09289617486339%"),
    minHeight: hp("51.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.56944444444444%"),
    top: hp("33.87978142076503%"),
    backgroundColor: "rgba(41, 140, 232, 1)"
  },
  ImageBackground_1_54: {
    width: wp("23.541666666666668%"),
    minWidth: wp("23.541666666666668%"),
    height: hp("35.10928961748634%"),
    minHeight: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.49999999999999%"),
    top: hp("40.7103825136612%"),
    resizeMode: "cover"
  },
  ImageBackground_1_56: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777777%"),
    top: hp("2.185792349726776%")
  },
  ImageBackground_1_32: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.532786885245901%"),
    minHeight: hp("5.532786885245901%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.652777777777778%"),
    top: hp("39.61748633879781%"),
    resizeMode: "cover"
  },
  View_1_41: {
    width: wp("40.625%"),
    minWidth: wp("40.625%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.930555555555555%"),
    top: hp("37.84153005464481%")
  },
  Text_1_41: {
    color: "rgba(16, 18, 20, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_120: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.93055555555556%"),
    top: hp("40.7103825136612%")
  },
  ImageBackground_1_126: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.93055555555556%"),
    top: hp("46.17486338797814%")
  },
  ImageBackground_1_121: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.05555555555556%"),
    top: hp("40.7103825136612%")
  },
  ImageBackground_1_127: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.05555555555556%"),
    top: hp("46.17486338797814%")
  },
  ImageBackground_1_124: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.18055555555556%"),
    top: hp("40.7103825136612%")
  },
  ImageBackground_1_128: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.18055555555556%"),
    top: hp("46.17486338797814%")
  },
  ImageBackground_1_125: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99.30555555555556%"),
    top: hp("40.7103825136612%")
  },
  ImageBackground_1_129: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99.30555555555556%"),
    top: hp("46.17486338797814%")
  },
  View_34_135: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.533062210499914%"),
    minHeight: hp("51.533062210499914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("210%"),
    top: hp("148.11778250939207%")
  },
  ImageBackground_34_127: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.533062210499914%"),
    minHeight: hp("51.533062210499914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_34_128: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.533062210499914%"),
    minHeight: hp("51.533062210499914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_34_136: {
    width: wp("115.6162601047092%"),
    minWidth: wp("115.6162601047092%"),
    height: hp("120.65146190872609%"),
    minHeight: hp("120.65146190872609%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-16.77464803059894%"),
    top: hp("-34.34983550525101%")
  },
  ImageBackground_34_134: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.533062210499914%"),
    minHeight: hp("51.533062210499914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2: { height: 1024 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
