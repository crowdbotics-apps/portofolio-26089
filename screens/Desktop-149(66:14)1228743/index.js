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
      <View style={styles.View_66_15}>
        <Text style={styles.Text_66_15}>Muhammad Rizqi</Text>
      </View>
      <View style={styles.View_66_16}>
        <View style={styles.View_66_17}>
          <Text style={styles.Text_66_17}>Home</Text>
        </View>
        <View style={styles.View_66_18}>
          <Text style={styles.Text_66_18}>Project</Text>
        </View>
        <View style={styles.View_66_19}>
          <Text style={styles.Text_66_19}>About</Text>
        </View>
        <View style={styles.View_66_20}>
          <Text style={styles.Text_66_20}>Kontak</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac6/f982/7ab47279f1db3846af4adeea201a5666"
        }}
        style={styles.ImageBackground_66_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e9f/ba27/beb93ff1e3e903f9653b2d4fe4b3cc63"
        }}
        style={styles.ImageBackground_66_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_66_36}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_66_37}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_66_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_66_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_66_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_66_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_66_42}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18ca/b615/0f86e0279860c2df198b29a3d28b1032"
        }}
        style={styles.ImageBackground_66_43}
      />
      <View style={styles.View_66_44}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7606/9907/9499742cea5bccb6863a782e58a079bc"
          }}
          style={styles.ImageBackground_66_45}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe1c/0498/3a08d6b7a85f637672e19dc1de6bfec1"
          }}
          style={styles.ImageBackground_66_46}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcd2/4dc1/a552fcaaa162a1d11e1d2fc1382a2776"
          }}
          style={styles.ImageBackground_66_47}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a60/7879/98e940fc53317283410e9d94797949ad"
          }}
          style={styles.ImageBackground_66_53}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_66_15: {
    width: wp("14.930555555555555%"),
    minWidth: wp("14.930555555555555%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("5.737704918032787%")
  },
  Text_66_15: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_66_16: {
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
  View_66_17: {
    width: wp("5.069444444444445%"),
    minWidth: wp("5.069444444444445%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_66_17: {
    color: "rgba(41, 140, 232, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_66_18: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.541666666666671%"),
    top: hp("0%")
  },
  Text_66_18: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_66_19: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.736111111111114%"),
    top: hp("0%")
  },
  Text_66_19: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_66_20: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.16666666666667%"),
    top: hp("0%")
  },
  Text_66_20: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_66_21: {
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
  ImageBackground_66_33: {
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
  ImageBackground_66_36: {
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
  ImageBackground_66_37: {
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
  ImageBackground_66_38: {
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
  ImageBackground_66_39: {
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
  ImageBackground_66_40: {
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
  ImageBackground_66_41: {
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
  ImageBackground_66_42: {
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
  ImageBackground_66_43: {
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
  View_66_44: {
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
  ImageBackground_66_45: {
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
  ImageBackground_66_46: {
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
  ImageBackground_66_47: {
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
  ImageBackground_66_53: {
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
