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
      <View style={styles.View_36_565}>
        <Text style={styles.Text_36_565}>Muhammad Rizqi</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e9f/ba27/beb93ff1e3e903f9653b2d4fe4b3cc63"
        }}
        style={styles.ImageBackground_36_566}
      />
      <View style={styles.View_36_567}>
        <View style={styles.View_36_568}>
          <Text style={styles.Text_36_568}>Home</Text>
        </View>
        <View style={styles.View_36_569}>
          <Text style={styles.Text_36_569}>Project</Text>
        </View>
        <View style={styles.View_36_570}>
          <Text style={styles.Text_36_570}>About</Text>
        </View>
        <View style={styles.View_36_571}>
          <Text style={styles.Text_36_571}>Kontak</Text>
        </View>
      </View>
      <View style={styles.View_36_758}>
        <View style={styles.View_36_759} />
      </View>
      <View style={styles.View_66_11}>
        <View style={styles.View_36_573}>
          <View style={styles.View_36_574} />
          <View style={styles.View_36_635}>
            <Text style={styles.Text_36_635}>
              Talent Search E-semka versi mobile Talent Search nikerja memiliki
              fungsi mencarikan kandidat sesuai dengan keahlian yang dicari oleh
              pencari kandidat
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eabb/8c59/996a277c8b1f4dde7a04556697ee3c13"
          }}
          style={styles.ImageBackground_34_146}
        />
      </View>
      <View style={styles.View_66_12}>
        <View style={styles.View_36_636}>
          <View style={styles.View_36_637} />
          <View style={styles.View_36_696}>
            <Text style={styles.Text_36_696}>
              Fitur Lowongan e-semka Kandidat dapat mencari lowongan yang
              tersedia disni
            </Text>
          </View>
        </View>
        <View style={styles.View_36_763}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2a6/3506/3b4ca7dfa018df1abe9e39de917edbff"
            }}
            style={styles.ImageBackground_36_766}
          />
        </View>
      </View>
      <View style={styles.View_66_13}>
        <View style={styles.View_36_572}>
          <View style={styles.View_36_697}>
            <View style={styles.View_36_698} />
          </View>
          <View style={styles.View_36_757}>
            <Text style={styles.Text_36_757}>
              Fitur interview e-semka Fitur ini dibuat agar para kandidat dapat
              melamar suatu pekerjaan tanpa harus datang ke perusahaan tsb.
            </Text>
          </View>
        </View>
        <View style={styles.View_36_767}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/159b/28a5/a18922acf1747b4637a18b40f99da286"
            }}
            style={styles.ImageBackground_36_770}
          />
        </View>
      </View>
      <View style={styles.View_66_10}>
        <View style={styles.View_36_760}>
          <Text style={styles.Text_36_760}>E-semka</Text>
        </View>
        <View style={styles.View_36_762}>
          <Text style={styles.Text_36_762}>
            E-semka adalah suatu aplikasi yang dibuat karena kesadaran siswa smk
            yang merasa sulit mencari pekerjaan dan sadar akan data bps yang
            menunjukan siswa smk adalah penyumbang pengangguran di indonesia
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3014/9210/9174b9e6df2d4bc7b579984df7b737ea"
          }}
          style={styles.ImageBackground_36_773}
        />
      </View>
      <View style={styles.View_121_1256}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e188/8597/3f233d4aa446e24357afb394263dd712"
          }}
          style={styles.ImageBackground_I121_1256_121_1207}
        />
        <View style={styles.View_I121_1256_121_1210}>
          <Text style={styles.Text_I121_1256_121_1210}>Kembali</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_36_565: {
    width: wp("13.547574039067422%"),
    minWidth: wp("13.547574039067422%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.081915563957152%"),
    top: hp("5.737704918032787%")
  },
  Text_36_565: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_36_566: {
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
  View_36_567: {
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
  View_36_568: {
    width: wp("4.59987397605545%"),
    minWidth: wp("4.59987397605545%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_36_568: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_569: {
    width: wp("5.356017643352237%"),
    minWidth: wp("5.356017643352237%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.750472589792054%"),
    top: hp("0%")
  },
  Text_36_569: {
    color: "rgba(41, 140, 232, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_570: {
    width: wp("4.662885948330183%"),
    minWidth: wp("4.662885948330183%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.185885318210453%"),
    top: hp("0%")
  },
  Text_36_570: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_571: {
    width: wp("5.482041587901701%"),
    minWidth: wp("5.482041587901701%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.928166351606805%"),
    top: hp("0%")
  },
  Text_36_571: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_758: {
    width: wp("90.67422810333964%"),
    minWidth: wp("90.67422810333964%"),
    height: hp("132.10382513661202%"),
    minHeight: hp("132.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.725897920604915%"),
    top: hp("544.398973808914%")
  },
  View_36_759: {
    width: wp("90.67422810333964%"),
    minWidth: wp("90.67422810333964%"),
    height: hp("132.10382513661202%"),
    minHeight: hp("132.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_66_11: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("175.27322404371583%"),
    minHeight: hp("175.27322404371583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.459987397605545%"),
    top: hp("148.224043715847%")
  },
  View_36_573: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("175.27322404371583%"),
    minHeight: hp("175.27322404371583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_574: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("175.27322404371583%"),
    minHeight: hp("175.27322404371583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 243, 243, 1)"
  },
  View_36_635: {
    width: wp("66.79269061121613%"),
    minWidth: wp("66.79269061121613%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("151.0928961748634%")
  },
  Text_36_635: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  ImageBackground_34_146: {
    width: wp("31.379962192816635%"),
    minWidth: wp("31.379962192816635%"),
    height: hp("134.8360655737705%"),
    minHeight: hp("134.8360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.571518588531816%"),
    top: hp("7.240437158469945%")
  },
  View_66_12: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("190.84699453551912%"),
    minHeight: hp("190.84699453551912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.459987397605545%"),
    top: hp("334.1530054644809%")
  },
  View_36_636: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("190.84699453551912%"),
    minHeight: hp("190.84699453551912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_637: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("190.84699453551912%"),
    minHeight: hp("190.84699453551912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 243, 243, 1)"
  },
  View_36_696: {
    width: wp("36.42091997479521%"),
    minWidth: wp("36.42091997479521%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.06805293005671%"),
    top: hp("162.2950819672131%")
  },
  Text_36_696: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_36_763: {
    width: wp("31.379962192816635%"),
    minWidth: wp("31.379962192816635%"),
    height: hp("134.8360655737705%"),
    minHeight: hp("134.8360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.571518588531816%"),
    top: hp("6.147540983606575%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_36_766: {
    width: wp("31.379962192816635%"),
    minWidth: wp("31.379962192816635%"),
    height: hp("134.8360655737705%"),
    minHeight: hp("134.8360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_66_13: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("170.4918032786885%"),
    minHeight: hp("170.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.459987397605545%"),
    top: hp("535.655737704918%")
  },
  View_36_572: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("170.4918032786885%"),
    minHeight: hp("170.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_697: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("170.4918032786885%"),
    minHeight: hp("170.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_698: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("170.4918032786885%"),
    minHeight: hp("170.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 243, 243, 1)"
  },
  View_36_757: {
    width: wp("71.45557655954632%"),
    minWidth: wp("71.45557655954632%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("147.40437158469945%")
  },
  Text_36_757: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_36_767: {
    width: wp("31.379962192816635%"),
    minWidth: wp("31.379962192816635%"),
    height: hp("137.70491803278688%"),
    minHeight: hp("137.70491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.77693761814744%"),
    top: hp("3.142076502732266%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_36_770: {
    width: wp("31.379962192816635%"),
    minWidth: wp("31.379962192816635%"),
    height: hp("137.70491803278688%"),
    minHeight: hp("137.70491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_66_10: {
    width: wp("93.88783868935097%"),
    minWidth: wp("93.88783868935097%"),
    height: hp("98.36065573770492%"),
    minHeight: hp("98.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.662885948330183%"),
    top: hp("29.6448087431694%")
  },
  View_36_760: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_36_760: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_36_762: {
    width: wp("25.456836798991812%"),
    minWidth: wp("25.456836798991812%"),
    minHeight: hp("47.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.43100189035917%"),
    top: hp("24.59016393442623%")
  },
  Text_36_762: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  ImageBackground_36_773: {
    width: wp("62.6339004410838%"),
    minWidth: wp("62.6339004410838%"),
    height: hp("84.15300546448088%"),
    minHeight: hp("84.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.20765027322404%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_121_1256: {
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
  ImageBackground_I121_1256_121_1207: {
    flexGrow: 1,
    width: wp("2.520478890989288%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I121_1256_121_1210: {
    flexGrow: 1,
    width: wp("6.427221172022684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4026465028355384%"),
    top: hp("0.5464480874316955%")
  },
  Text_I121_1256_121_1210: {
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
