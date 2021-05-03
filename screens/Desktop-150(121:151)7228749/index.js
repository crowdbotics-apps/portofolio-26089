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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e9f/ba27/beb93ff1e3e903f9653b2d4fe4b3cc63"
        }}
        style={styles.ImageBackground_121_165}
      />
      <View style={styles.View_121_266}>
        <View style={styles.View_121_267}>
          <View style={styles.View_121_268} />
        </View>
        <View style={styles.View_121_269}>
          <Text style={styles.Text_121_269}>Desain Detail BCA Redesign</Text>
        </View>
      </View>
      <View style={styles.View_121_270}>
        <Text style={styles.Text_121_270}>Muhammad Rizqi</Text>
      </View>
      <View style={styles.View_121_271}>
        <View style={styles.View_121_272}>
          <Text style={styles.Text_121_272}>Home</Text>
        </View>
        <View style={styles.View_121_273}>
          <Text style={styles.Text_121_273}>Project</Text>
        </View>
        <View style={styles.View_121_274}>
          <Text style={styles.Text_121_274}>About</Text>
        </View>
        <View style={styles.View_121_275}>
          <Text style={styles.Text_121_275}>Kontak</Text>
        </View>
      </View>
      <View style={styles.View_121_276}>
        <View style={styles.View_121_277}>
          <Text style={styles.Text_121_277}>BCA Redesign</Text>
        </View>
        <View style={styles.View_121_278}>
          <Text style={styles.Text_121_278}>
            Di portofolio kaliini saya me redesain tampilan bca mobile menjadi
            lebih simple{" "}
          </Text>
        </View>
        <View style={styles.View_121_279}>
          <Text style={styles.Text_121_279}>Dapoer Paramount</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2cb/811e/2068eae7dad9a06a45b3583bf91dab4a"
        }}
        style={styles.ImageBackground_121_280}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edfe/b74a/3e38c7efd3ff0b18f3d102836caa7b02"
        }}
        style={styles.ImageBackground_121_281}
      />
      <View style={styles.View_121_1261}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e188/8597/3f233d4aa446e24357afb394263dd712"
          }}
          style={styles.ImageBackground_I121_1261_121_1207}
        />
        <View style={styles.View_I121_1261_121_1210}>
          <Text style={styles.Text_I121_1261_121_1210}>Kembali</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_121_165: {
    width: wp("6.490233144297417%"),
    minWidth: wp("6.490233144297417%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9533711405166982%"),
    top: hp("2.185792349726776%")
  },
  View_121_266: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("154.6448087431694%"),
    minHeight: hp("154.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("150.40983606557376%")
  },
  View_121_267: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("154.6448087431694%"),
    minHeight: hp("154.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_268: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("154.6448087431694%"),
    minHeight: hp("154.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 239, 215, 1)"
  },
  View_121_269: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    minHeight: hp("7.264255044238816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.662885948330183%"),
    top: hp("4.190913966444697%")
  },
  Text_121_269: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_121_270: {
    width: wp("13.547574039067422%"),
    minWidth: wp("13.547574039067422%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.081915563957152%"),
    top: hp("5.737704918032787%")
  },
  Text_121_270: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_271: {
    width: wp("27.410207939508506%"),
    minWidth: wp("27.410207939508506%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.88594833018274%"),
    top: hp("4.2349726775956285%")
  },
  View_121_272: {
    width: wp("4.59987397605545%"),
    minWidth: wp("4.59987397605545%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_121_272: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_273: {
    width: wp("5.356017643352237%"),
    minWidth: wp("5.356017643352237%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.750472589792054%"),
    top: hp("0%")
  },
  Text_121_273: {
    color: "rgba(41, 140, 232, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_274: {
    width: wp("4.662885948330183%"),
    minWidth: wp("4.662885948330183%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.185885318210453%"),
    top: hp("0%")
  },
  Text_121_274: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_275: {
    width: wp("5.482041587901701%"),
    minWidth: wp("5.482041587901701%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.928166351606805%"),
    top: hp("0%")
  },
  Text_121_275: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_276: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("60.245901639344254%"),
    minHeight: hp("60.245901639344254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.835538752362949%"),
    top: hp("29.6448087431694%")
  },
  View_121_277: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_121_277: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_121_278: {
    width: wp("25.456836798991812%"),
    minWidth: wp("25.456836798991812%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.3408947700063%"),
    top: hp("30.19125683060109%")
  },
  Text_121_278: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_121_279: {
    width: wp("17.20226843100189%"),
    minWidth: wp("17.20226843100189%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.303717706364212%"),
    top: hp("39.75409836065574%")
  },
  Text_121_279: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 48,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_121_280: {
    width: wp("50.40957781978575%"),
    minWidth: wp("50.40957781978575%"),
    height: hp("81.9672131147541%"),
    minHeight: hp("81.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9533711405166982%"),
    top: hp("42.48633879781421%"),
    resizeMode: "cover"
  },
  ImageBackground_121_281: {
    width: wp("32.07309388783869%"),
    minWidth: wp("32.07309388783869%"),
    height: hp("131.4207650273224%"),
    minHeight: hp("131.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.215500945179585%"),
    top: hp("159.8360655737705%"),
    resizeMode: "cover"
  },
  View_121_1261: {
    width: wp("9.829867674858223%"),
    minWidth: wp("9.829867674858223%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.221802142407057%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I121_1261_121_1207: {
    flexGrow: 1,
    width: wp("2.520478890989288%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I121_1261_121_1210: {
    flexGrow: 1,
    width: wp("6.427221172022684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4026465028355384%"),
    top: hp("0.5464480874316955%")
  },
  Text_I121_1261_121_1210: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 2233 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
