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
      <View style={styles.View_66_5}>
        <View style={styles.View_8_340}>
          <View style={styles.View_8_341} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9247/57fb/d7d75c0cb7f126fa026b2fc62aebdfcd"
            }}
            style={styles.ImageBackground_8_342}
          />
        </View>
        <View style={styles.View_32_7}>
          <Text style={styles.Text_32_7}>
            Membuat banner iklan dapoer paramount yang mengutamakan fokus pada
            pembukaan toko dan menekankan desain pada promo
          </Text>
        </View>
        <View style={styles.View_8_343}>
          <Text style={styles.Text_8_343}>Desain banner </Text>
        </View>
      </View>
      <View style={styles.View_66_4}>
        <View style={styles.View_8_338}>
          <View style={styles.View_8_339} />
        </View>
        <View style={styles.View_32_6}>
          <Text style={styles.Text_32_6}>
            Membuatkan design yang sesuai dengan keinginan client dengan tema
            yang simple dan menjelaskan produk.
          </Text>
        </View>
        <View style={styles.View_8_345}>
          <Text style={styles.Text_8_345}>Desain Es teler </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65dd/176b/3840e338a04dd6238adc2d5d33ac17ef"
          }}
          style={styles.ImageBackground_8_348}
        />
      </View>
      <View style={styles.View_8_330}>
        <Text style={styles.Text_8_330}>Muhammad Rizqi</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e9f/ba27/beb93ff1e3e903f9653b2d4fe4b3cc63"
        }}
        style={styles.ImageBackground_8_331}
      />
      <View style={styles.View_8_332}>
        <View style={styles.View_8_333}>
          <Text style={styles.Text_8_333}>Home</Text>
        </View>
        <View style={styles.View_8_334}>
          <Text style={styles.Text_8_334}>Project</Text>
        </View>
        <View style={styles.View_8_335}>
          <Text style={styles.Text_8_335}>About</Text>
        </View>
        <View style={styles.View_8_336}>
          <Text style={styles.Text_8_336}>Kontak</Text>
        </View>
      </View>
      <View style={styles.View_66_3}>
        <View style={styles.View_8_344}>
          <Text style={styles.Text_8_344}>Dapoer Paramount</Text>
        </View>
        <View style={styles.View_8_346}>
          <Text style={styles.Text_8_346}>
            Dapoer Paramount merupakan tempat makan food and beverage yang
            berlokasi di solo mereka menjual makanan seperti soto mie,maupun es
            teler
          </Text>
        </View>
        <View style={styles.View_8_372} />
        <View style={styles.View_8_373}>
          <Text style={styles.Text_8_373}>Dapoer Paramount</Text>
        </View>
      </View>
      <View style={styles.View_66_6}>
        <View style={styles.View_8_337}>
          <View style={styles.View_8_375}>
            <View style={styles.View_8_376} />
          </View>
        </View>
        <View style={styles.View_32_8}>
          <Text style={styles.Text_32_8}>
            Membuat design packaging yang minimalis yang dapat di realisasikan{" "}
          </Text>
        </View>
        <View style={styles.View_8_379}>
          <Text style={styles.Text_8_379}>Desain Packaging</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eadf/b14e/cbc4de35df75890ea7ab007a8b26a79e"
          }}
          style={styles.ImageBackground_8_378}
        />
      </View>
      <View style={styles.View_121_1246}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e188/8597/3f233d4aa446e24357afb394263dd712"
          }}
          style={styles.ImageBackground_I121_1246_121_1207}
        />
        <View style={styles.View_I121_1246_121_1210}>
          <Text style={styles.Text_I121_1246_121_1210}>Kembali</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_66_5: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("201.50273224043715%"),
    minHeight: hp("201.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.459987397605545%"),
    top: hp("327.73224043715845%")
  },
  View_8_340: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("201.50273224043715%"),
    minHeight: hp("201.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_341: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("201.50273224043715%"),
    minHeight: hp("201.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 239, 215, 1)"
  },
  ImageBackground_8_342: {
    width: wp("45.87271581600504%"),
    minWidth: wp("45.87271581600504%"),
    height: hp("140.5737704918033%"),
    minHeight: hp("140.5737704918033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("30.464480874316962%"),
    resizeMode: "cover"
  },
  View_32_7: {
    width: wp("87.96471329552615%"),
    minWidth: wp("87.96471329552615%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("179.3715846994536%")
  },
  Text_32_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_8_343: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.413358538122242%"),
    top: hp("11.33879781420768%")
  },
  Text_8_343: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_66_4: {
    width: wp("99.4328922495274%"),
    minWidth: wp("99.4328922495274%"),
    height: hp("151.22950819672133%"),
    minHeight: hp("151.22950819672133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5671077504725899%"),
    top: hp("150.40983606557376%")
  },
  View_8_338: {
    width: wp("99.4328922495274%"),
    minWidth: wp("99.4328922495274%"),
    height: hp("151.22950819672133%"),
    minHeight: hp("151.22950819672133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_339: {
    width: wp("99.4328922495274%"),
    minWidth: wp("99.4328922495274%"),
    height: hp("151.22950819672133%"),
    minHeight: hp("151.22950819672133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 239, 215, 1)"
  },
  View_32_6: {
    width: wp("59.73534971644613%"),
    minWidth: wp("59.73534971644613%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.3994959042218%"),
    top: hp("136.47540983606558%")
  },
  Text_32_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_8_345: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.095778197857594%"),
    top: hp("4.098360655737736%")
  },
  Text_8_345: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_8_348: {
    width: wp("53.62318840579711%"),
    minWidth: wp("53.62318840579711%"),
    height: hp("116.25683060109289%"),
    minHeight: hp("116.25683060109289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.588531821045997%"),
    top: hp("15.846994535519116%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_8_330: {
    width: wp("13.547574039067422%"),
    minWidth: wp("13.547574039067422%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.081915563957152%"),
    top: hp("5.737704918032787%")
  },
  Text_8_330: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_331: {
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
  View_8_332: {
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
  View_8_333: {
    width: wp("4.59987397605545%"),
    minWidth: wp("4.59987397605545%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_8_333: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_334: {
    width: wp("5.356017643352237%"),
    minWidth: wp("5.356017643352237%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.750472589792054%"),
    top: hp("0%")
  },
  Text_8_334: {
    color: "rgba(41, 140, 232, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_335: {
    width: wp("4.662885948330183%"),
    minWidth: wp("4.662885948330183%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.185885318210453%"),
    top: hp("0%")
  },
  Text_8_335: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_336: {
    width: wp("5.482041587901701%"),
    minWidth: wp("5.482041587901701%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.928166351606805%"),
    top: hp("0%")
  },
  Text_8_336: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_66_3: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("88.25136612021858%"),
    minHeight: hp("88.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.835538752362949%"),
    top: hp("29.6448087431694%")
  },
  View_8_344: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_8_344: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_8_346: {
    width: wp("25.456836798991812%"),
    minWidth: wp("25.456836798991812%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.3408947700063%"),
    top: hp("30.19125683060109%")
  },
  Text_8_346: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_8_372: {
    width: wp("44.99054820415879%"),
    minWidth: wp("44.99054820415879%"),
    height: hp("68.98907103825137%"),
    minHeight: hp("68.98907103825137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37807183364839325%"),
    top: hp("19.26229508196721%"),
    backgroundColor: "rgba(163, 182, 160, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_8_373: {
    width: wp("17.20226843100189%"),
    minWidth: wp("17.20226843100189%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.303717706364212%"),
    top: hp("39.75409836065574%")
  },
  Text_8_373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 48,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_66_6: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("201.50273224043715%"),
    minHeight: hp("201.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.459987397605545%"),
    top: hp("536.0655737704918%")
  },
  View_8_337: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("201.50273224043715%"),
    minHeight: hp("201.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_375: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("201.50273224043715%"),
    minHeight: hp("201.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_376: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("201.50273224043715%"),
    minHeight: hp("201.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 239, 215, 1)"
  },
  View_32_8: {
    width: wp("47.13295526149969%"),
    minWidth: wp("47.13295526149969%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.897920604914937%"),
    top: hp("158.74316939890707%")
  },
  Text_32_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_8_379: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("14.75409836065569%")
  },
  Text_8_379: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_8_378: {
    width: wp("69.18714555765595%"),
    minWidth: wp("69.18714555765595%"),
    height: hp("112.43169398907105%"),
    minHeight: hp("112.43169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.897920604914937%"),
    top: hp("38.25136612021856%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_121_1246: {
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
  ImageBackground_I121_1246_121_1207: {
    flexGrow: 1,
    width: wp("2.520478890989288%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I121_1246_121_1210: {
    flexGrow: 1,
    width: wp("6.427221172022684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4026465028355384%"),
    top: hp("0.5464480874316955%")
  },
  Text_I121_1246_121_1210: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 5523 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
