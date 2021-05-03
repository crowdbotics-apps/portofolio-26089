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
        style={styles.ImageBackground_1_145}
      />
      <View style={styles.View_120_2}>
        <Text style={styles.Text_120_2}>Muhammad Rizqi</Text>
      </View>
      <View style={styles.View_120_123}>
        <View style={styles.View_120_124}>
          <Text style={styles.Text_120_124}>Home</Text>
        </View>
        <View style={styles.View_120_125}>
          <Text style={styles.Text_120_125}>Project</Text>
        </View>
        <View style={styles.View_120_126}>
          <Text style={styles.Text_120_126}>About</Text>
        </View>
        <View style={styles.View_120_127}>
          <Text style={styles.Text_120_127}>Kontak</Text>
        </View>
      </View>
      <View style={styles.View_121_898}>
        <View style={styles.View_121_899}>
          <Text style={styles.Text_121_899}>2019</Text>
        </View>
        <View style={styles.View_121_900}>
          <Text style={styles.Text_121_900}>E-semka mobile</Text>
        </View>
        <View style={styles.View_121_901} />
        <View style={styles.View_121_902}>
          <View style={styles.View_121_903}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78a7/cf11/9fd6839e6c4677976acd9a5af2bb9c2b"
              }}
              style={styles.ImageBackground_121_904}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f97/a18e/10dc6b87020ee6c0c14640c2475e4bd1"
              }}
              style={styles.ImageBackground_121_905}
            />
            <View style={styles.View_121_906}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/7222/4b3d8ad2d4232248cf8c348966c9a50d"
                }}
                style={styles.ImageBackground_121_907}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b961/62da/825d0b3e6d0ab03b6329792f1fa88229"
                }}
                style={styles.ImageBackground_121_908}
              />
              <View style={styles.View_121_909}>
                <Text style={styles.Text_121_909}>website.co</Text>
              </View>
            </View>
            <View style={styles.View_121_910}>
              <View style={styles.View_121_911} />
              <View style={styles.View_121_912}>
                <View style={styles.View_121_913} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4d/0528/41c158d210bfaa734ac690182e3e6a7d"
                  }}
                  style={styles.ImageBackground_121_914}
                />
              </View>
            </View>
            <View style={styles.View_121_915}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_916}
              />
              <View style={styles.View_121_917}>
                <View style={styles.View_121_918}>
                  <View style={styles.View_121_919} />
                  <View style={styles.View_121_920} />
                </View>
                <View style={styles.View_121_921}>
                  <View style={styles.View_121_922} />
                  <View style={styles.View_121_923} />
                  <View style={styles.View_121_924} />
                </View>
              </View>
            </View>
            <View style={styles.View_121_925}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_926}
              />
              <View style={styles.View_121_927}>
                <View style={styles.View_121_928}>
                  <View style={styles.View_121_929}>
                    <View style={styles.View_121_930} />
                    <View style={styles.View_121_931} />
                    <View style={styles.View_121_932} />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b03b/4c0c/df0b5f001f981859dbdd48447512c2d5"
                    }}
                    style={styles.ImageBackground_121_933}
                  />
                </View>
                <View style={styles.View_121_934} />
                <View style={styles.View_121_935} />
                <View style={styles.View_121_936} />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8aa/fc0f/b6d1b9f11bda3be224f9dd9835a7b070"
              }}
              style={styles.ImageBackground_121_937}
            />
            <View style={styles.View_121_941}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0944/9747/a5673347db3f4e7b1fdedc0b120e7260"
                }}
                style={styles.ImageBackground_121_942}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2e/ca06/ff2a1725d812635d96ff8fc7a1db8151"
                }}
                style={styles.ImageBackground_121_945}
              />
            </View>
            <View style={styles.View_121_948}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_949}
              />
              <View style={styles.View_121_950}>
                <View style={styles.View_121_951}>
                  <View style={styles.View_121_952} />
                  <View style={styles.View_121_953} />
                </View>
                <View style={styles.View_121_954} />
                <View style={styles.View_121_955} />
                <View style={styles.View_121_956} />
                <View style={styles.View_121_957} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_121_958}>
        <View style={styles.View_121_959}>
          <Text style={styles.Text_121_959}>2021</Text>
        </View>
        <View style={styles.View_121_960}>
          <Text style={styles.Text_121_960}>Branding Dapoer paramount</Text>
        </View>
        <View style={styles.View_121_961} />
        <View style={styles.View_121_962}>
          <View style={styles.View_121_963}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78a7/cf11/9fd6839e6c4677976acd9a5af2bb9c2b"
              }}
              style={styles.ImageBackground_121_964}
            />
            <View style={styles.View_121_965}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/7222/4b3d8ad2d4232248cf8c348966c9a50d"
                }}
                style={styles.ImageBackground_121_966}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b961/62da/825d0b3e6d0ab03b6329792f1fa88229"
                }}
                style={styles.ImageBackground_121_967}
              />
              <View style={styles.View_121_968}>
                <Text style={styles.Text_121_968}>Catering Paramount</Text>
              </View>
            </View>
            <View style={styles.View_121_969}>
              <View style={styles.View_121_970} />
              <View style={styles.View_121_971}>
                <View style={styles.View_121_972} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4d/0528/41c158d210bfaa734ac690182e3e6a7d"
                  }}
                  style={styles.ImageBackground_121_973}
                />
              </View>
            </View>
            <View style={styles.View_121_974}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_975}
              />
              <View style={styles.View_121_976}>
                <View style={styles.View_121_977}>
                  <View style={styles.View_121_978} />
                  <View style={styles.View_121_979} />
                </View>
                <View style={styles.View_121_980}>
                  <View style={styles.View_121_981} />
                  <View style={styles.View_121_982} />
                  <View style={styles.View_121_983} />
                </View>
              </View>
            </View>
            <View style={styles.View_121_984}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_985}
              />
              <View style={styles.View_121_986}>
                <View style={styles.View_121_987}>
                  <View style={styles.View_121_988}>
                    <View style={styles.View_121_989} />
                    <View style={styles.View_121_990} />
                    <View style={styles.View_121_991} />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b03b/4c0c/df0b5f001f981859dbdd48447512c2d5"
                    }}
                    style={styles.ImageBackground_121_992}
                  />
                </View>
                <View style={styles.View_121_993} />
                <View style={styles.View_121_994} />
                <View style={styles.View_121_995} />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8aa/fc0f/b6d1b9f11bda3be224f9dd9835a7b070"
              }}
              style={styles.ImageBackground_121_996}
            />
            <View style={styles.View_121_1000}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0944/9747/a5673347db3f4e7b1fdedc0b120e7260"
                }}
                style={styles.ImageBackground_121_1001}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2e/ca06/ff2a1725d812635d96ff8fc7a1db8151"
                }}
                style={styles.ImageBackground_121_1004}
              />
            </View>
            <View style={styles.View_121_1007}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_1008}
              />
              <View style={styles.View_121_1009}>
                <View style={styles.View_121_1010}>
                  <View style={styles.View_121_1011} />
                  <View style={styles.View_121_1012} />
                </View>
                <View style={styles.View_121_1013} />
                <View style={styles.View_121_1014} />
                <View style={styles.View_121_1015} />
                <View style={styles.View_121_1016} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_121_1017}>
        <View style={styles.View_121_1018}>
          <Text style={styles.Text_121_1018}>2020</Text>
        </View>
        <View style={styles.View_121_1019}>
          <Text style={styles.Text_121_1019}>Nikerja Perusahaan</Text>
        </View>
        <View style={styles.View_121_1020} />
        <View style={styles.View_121_1021}>
          <View style={styles.View_121_1022}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65e1/eba9/d9088b68fcf1e3b20e9603a7ad395947"
              }}
              style={styles.ImageBackground_121_1023}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/546b/4691/c14f634b03f21ff111d8dc6017bdf2c5"
              }}
              style={styles.ImageBackground_121_1024}
            />
          </View>
          <View style={styles.View_121_1025}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78a7/cf11/9fd6839e6c4677976acd9a5af2bb9c2b"
              }}
              style={styles.ImageBackground_121_1026}
            />
            <View style={styles.View_121_1027}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/7222/4b3d8ad2d4232248cf8c348966c9a50d"
                }}
                style={styles.ImageBackground_121_1028}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b961/62da/825d0b3e6d0ab03b6329792f1fa88229"
                }}
                style={styles.ImageBackground_121_1029}
              />
              <View style={styles.View_121_1030}>
                <Text style={styles.Text_121_1030}>website.co</Text>
              </View>
            </View>
            <View style={styles.View_121_1031}>
              <View style={styles.View_121_1032} />
              <View style={styles.View_121_1033}>
                <View style={styles.View_121_1034} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4d/0528/41c158d210bfaa734ac690182e3e6a7d"
                  }}
                  style={styles.ImageBackground_121_1035}
                />
              </View>
            </View>
            <View style={styles.View_121_1036}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_1037}
              />
              <View style={styles.View_121_1038}>
                <View style={styles.View_121_1039}>
                  <View style={styles.View_121_1040} />
                  <View style={styles.View_121_1041} />
                </View>
                <View style={styles.View_121_1042}>
                  <View style={styles.View_121_1043} />
                  <View style={styles.View_121_1044} />
                  <View style={styles.View_121_1045} />
                </View>
              </View>
            </View>
            <View style={styles.View_121_1046}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_1047}
              />
              <View style={styles.View_121_1048}>
                <View style={styles.View_121_1049}>
                  <View style={styles.View_121_1050}>
                    <View style={styles.View_121_1051} />
                    <View style={styles.View_121_1052} />
                    <View style={styles.View_121_1053} />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b03b/4c0c/df0b5f001f981859dbdd48447512c2d5"
                    }}
                    style={styles.ImageBackground_121_1054}
                  />
                </View>
                <View style={styles.View_121_1055} />
                <View style={styles.View_121_1056} />
                <View style={styles.View_121_1057} />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8aa/fc0f/b6d1b9f11bda3be224f9dd9835a7b070"
              }}
              style={styles.ImageBackground_121_1058}
            />
            <View style={styles.View_121_1062}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0944/9747/a5673347db3f4e7b1fdedc0b120e7260"
                }}
                style={styles.ImageBackground_121_1063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2e/ca06/ff2a1725d812635d96ff8fc7a1db8151"
                }}
                style={styles.ImageBackground_121_1066}
              />
            </View>
            <View style={styles.View_121_1069}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_1070}
              />
              <View style={styles.View_121_1071}>
                <View style={styles.View_121_1072}>
                  <View style={styles.View_121_1073} />
                  <View style={styles.View_121_1074} />
                </View>
                <View style={styles.View_121_1075} />
                <View style={styles.View_121_1076} />
                <View style={styles.View_121_1077} />
                <View style={styles.View_121_1078} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_121_1079}>
        <View style={styles.View_121_1080}>
          <Text style={styles.Text_121_1080}>
            {" "}
            Dikerjakan pada 2020-present
          </Text>
        </View>
        <View style={styles.View_121_1081}>
          <Text style={styles.Text_121_1081}>Nikerja</Text>
        </View>
        <View style={styles.View_121_1082} />
        <View style={styles.View_121_1083}>
          <View style={styles.View_121_1084}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78a7/cf11/9fd6839e6c4677976acd9a5af2bb9c2b"
              }}
              style={styles.ImageBackground_121_1085}
            />
            <View style={styles.View_121_1086}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/7222/4b3d8ad2d4232248cf8c348966c9a50d"
                }}
                style={styles.ImageBackground_121_1087}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b961/62da/825d0b3e6d0ab03b6329792f1fa88229"
                }}
                style={styles.ImageBackground_121_1088}
              />
              <View style={styles.View_121_1089}>
                <Text style={styles.Text_121_1089}>Nikerja.com</Text>
              </View>
            </View>
            <View style={styles.View_121_1090}>
              <View style={styles.View_121_1091} />
              <View style={styles.View_121_1092}>
                <View style={styles.View_121_1093} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4d/0528/41c158d210bfaa734ac690182e3e6a7d"
                  }}
                  style={styles.ImageBackground_121_1094}
                />
              </View>
            </View>
            <View style={styles.View_121_1095}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_1096}
              />
              <View style={styles.View_121_1097}>
                <View style={styles.View_121_1098}>
                  <View style={styles.View_121_1099} />
                  <View style={styles.View_121_1100} />
                </View>
                <View style={styles.View_121_1101}>
                  <View style={styles.View_121_1102} />
                  <View style={styles.View_121_1103} />
                  <View style={styles.View_121_1104} />
                </View>
              </View>
            </View>
            <View style={styles.View_121_1105}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_1106}
              />
              <View style={styles.View_121_1107}>
                <View style={styles.View_121_1108}>
                  <View style={styles.View_121_1109}>
                    <View style={styles.View_121_1110} />
                    <View style={styles.View_121_1111} />
                    <View style={styles.View_121_1112} />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b03b/4c0c/df0b5f001f981859dbdd48447512c2d5"
                    }}
                    style={styles.ImageBackground_121_1113}
                  />
                </View>
                <View style={styles.View_121_1114} />
                <View style={styles.View_121_1115} />
                <View style={styles.View_121_1116} />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8aa/fc0f/b6d1b9f11bda3be224f9dd9835a7b070"
              }}
              style={styles.ImageBackground_121_1117}
            />
            <View style={styles.View_121_1121}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0944/9747/a5673347db3f4e7b1fdedc0b120e7260"
                }}
                style={styles.ImageBackground_121_1122}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2e/ca06/ff2a1725d812635d96ff8fc7a1db8151"
                }}
                style={styles.ImageBackground_121_1125}
              />
            </View>
            <View style={styles.View_121_1128}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_1129}
              />
              <View style={styles.View_121_1130}>
                <View style={styles.View_121_1131}>
                  <View style={styles.View_121_1132} />
                  <View style={styles.View_121_1133} />
                </View>
                <View style={styles.View_121_1134} />
                <View style={styles.View_121_1135} />
                <View style={styles.View_121_1136} />
                <View style={styles.View_121_1137} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_121_1138}>
        <View style={styles.View_121_1139}>
          <Text style={styles.Text_121_1139}> Dikerjakan pada april 2021</Text>
        </View>
        <View style={styles.View_121_1140}>
          <Text style={styles.Text_121_1140}>BCA Redesign</Text>
        </View>
        <View style={styles.View_121_1141} />
        <View style={styles.View_121_1142}>
          <View style={styles.View_121_1143}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78a7/cf11/9fd6839e6c4677976acd9a5af2bb9c2b"
              }}
              style={styles.ImageBackground_121_1144}
            />
            <View style={styles.View_121_1145}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cdc/7222/4b3d8ad2d4232248cf8c348966c9a50d"
                }}
                style={styles.ImageBackground_121_1146}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b961/62da/825d0b3e6d0ab03b6329792f1fa88229"
                }}
                style={styles.ImageBackground_121_1147}
              />
              <View style={styles.View_121_1148}>
                <Text style={styles.Text_121_1148}>Nikerja.com</Text>
              </View>
            </View>
            <View style={styles.View_121_1149}>
              <View style={styles.View_121_1150} />
              <View style={styles.View_121_1151}>
                <View style={styles.View_121_1152} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4d/0528/41c158d210bfaa734ac690182e3e6a7d"
                  }}
                  style={styles.ImageBackground_121_1153}
                />
              </View>
            </View>
            <View style={styles.View_121_1154}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_1155}
              />
              <View style={styles.View_121_1156}>
                <View style={styles.View_121_1157}>
                  <View style={styles.View_121_1158} />
                  <View style={styles.View_121_1159} />
                </View>
                <View style={styles.View_121_1160}>
                  <View style={styles.View_121_1161} />
                  <View style={styles.View_121_1162} />
                  <View style={styles.View_121_1163} />
                </View>
              </View>
            </View>
            <View style={styles.View_121_1164}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_1165}
              />
              <View style={styles.View_121_1166}>
                <View style={styles.View_121_1167}>
                  <View style={styles.View_121_1168}>
                    <View style={styles.View_121_1169} />
                    <View style={styles.View_121_1170} />
                    <View style={styles.View_121_1171} />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b03b/4c0c/df0b5f001f981859dbdd48447512c2d5"
                    }}
                    style={styles.ImageBackground_121_1172}
                  />
                </View>
                <View style={styles.View_121_1173} />
                <View style={styles.View_121_1174} />
                <View style={styles.View_121_1175} />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8aa/fc0f/b6d1b9f11bda3be224f9dd9835a7b070"
              }}
              style={styles.ImageBackground_121_1176}
            />
            <View style={styles.View_121_1180}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0944/9747/a5673347db3f4e7b1fdedc0b120e7260"
                }}
                style={styles.ImageBackground_121_1181}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c2e/ca06/ff2a1725d812635d96ff8fc7a1db8151"
                }}
                style={styles.ImageBackground_121_1184}
              />
            </View>
            <View style={styles.View_121_1187}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/7f6c/ed2f34ba9fa31e2117aa7c54185c4bde"
                }}
                style={styles.ImageBackground_121_1188}
              />
              <View style={styles.View_121_1189}>
                <View style={styles.View_121_1190}>
                  <View style={styles.View_121_1191} />
                  <View style={styles.View_121_1192} />
                </View>
                <View style={styles.View_121_1193} />
                <View style={styles.View_121_1194} />
                <View style={styles.View_121_1195} />
                <View style={styles.View_121_1196} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_121_1197}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63e2/315a/844816dee6155bd0c646e5db758fae93"
          }}
          style={styles.ImageBackground_121_1198}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d88/32e0/704c191b304d21f0ac588677f6d90607"
          }}
          style={styles.ImageBackground_121_1199}
        />
      </View>
      <View style={styles.View_121_1200}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63e2/315a/844816dee6155bd0c646e5db758fae93"
          }}
          style={styles.ImageBackground_121_1201}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b618/b67c/e1760b7fb250ae3539316de94d4929ba"
          }}
          style={styles.ImageBackground_121_1202}
        />
      </View>
      <View style={styles.View_121_1203}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/066b/2db6/5104654be88923d1cde8d9a6205ddc39"
          }}
          style={styles.ImageBackground_121_1204}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f5/d8b5/90a145789dc2c2d144651804e93ea382"
          }}
          style={styles.ImageBackground_121_1205}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1_145: {
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
  View_120_2: {
    width: wp("13.547574039067422%"),
    minWidth: wp("13.547574039067422%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.081915563957152%"),
    top: hp("5.737704918032787%")
  },
  Text_120_2: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_123: {
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
  View_120_124: {
    width: wp("4.59987397605545%"),
    minWidth: wp("4.59987397605545%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_120_124: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_125: {
    width: wp("5.356017643352237%"),
    minWidth: wp("5.356017643352237%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.750472589792054%"),
    top: hp("0%")
  },
  Text_120_125: {
    color: "rgba(41, 140, 232, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_126: {
    width: wp("4.662885948330183%"),
    minWidth: wp("4.662885948330183%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.185885318210453%"),
    top: hp("0%")
  },
  Text_120_126: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_127: {
    width: wp("5.482041587901701%"),
    minWidth: wp("5.482041587901701%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.928166351606805%"),
    top: hp("0%")
  },
  Text_120_127: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_898: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    height: hp("69.67213114754098%"),
    minHeight: hp("69.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.183364839319471%"),
    top: hp("186.74863387978144%")
  },
  View_121_899: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.39344262295083%")
  },
  Text_121_899: {
    color: "rgba(115, 128, 141, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_121_900: {
    width: wp("16.761184625078766%"),
    minWidth: wp("16.761184625078766%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.289617486338784%")
  },
  Text_121_900: {
    color: "rgba(16, 18, 20, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_121_901: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    height: hp("56.01092896174863%"),
    minHeight: hp("56.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 236, 255, 1)"
  },
  View_121_902: {
    width: wp("32.26213749655403%"),
    height: hp("45.62841530054645%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.2929979791863575%")
  },
  View_121_903: {
    flexGrow: 1,
    width: wp("32.26213749655403%"),
    height: hp("45.62841530054645%"),
    minHeight: hp("45.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_121_904: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    minHeight: hp("1.8607505683690473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000015383782294264847%"),
    top: hp("0%")
  },
  ImageBackground_121_905: {
    width: wp("32.136105860113425%"),
    minWidth: wp("32.136105860113425%"),
    height: hp("43.85245901639344%"),
    minHeight: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7759562841530112%"),
    resizeMode: "cover"
  },
  View_121_906: {
    width: wp("14.24207200625443%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.01193504597905%"),
    top: hp("0.3776175076844197%")
  },
  ImageBackground_121_907: {
    width: wp("14.24207200625443%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_121_908: {
    width: wp("0.2952447385253137%"),
    height: hp("0.7008554505520179%"),
    top: hp("0.26972202655397837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.75929334288358%")
  },
  View_121_909: {
    width: wp("2.3602697784673814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.994544603123032%"),
    top: hp("0.209970943263329%")
  },
  Text_121_909: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 4,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_910: {
    width: wp("0.6437105131960547%"),
    minWidth: wp("0.6437105131960547%"),
    height: hp("1.2947234951081823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.5053784779655%"),
    top: hp("0.4286469006147513%")
  },
  View_121_911: {
    width: wp("0.6437105131960547%"),
    height: hp("1.2947234951081823%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_121_912: {
    width: wp("0.29503834946169066%"),
    height: hp("0.5934149841141831%"),
    top: hp("0.3776175076844197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18774367911153433%")
  },
  View_121_913: {
    width: wp("0.026758166326992756%"),
    height: hp("0.5934149189724948%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025361773%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_121_914: {
    width: wp("0.29503834946169066%"),
    height: hp("0.053886767945002995%"),
    top: hp("0.269738702826146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_915: {
    width: wp("1.046026166159925%"),
    minWidth: wp("1.046026166159925%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.307997166922654%"),
    top: hp("0.3776175076844197%")
  },
  ImageBackground_121_916: {
    width: wp("1.046026166159925%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_917: {
    width: wp("0.32196492613976907%"),
    height: hp("0.6473338017698194%"),
    top: hp("0.3236864433914093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3755027420053594%")
  },
  View_121_918: {
    width: wp("0.24139287716649807%"),
    height: hp("0.4855211966676139%"),
    top: hp("0.16180986915128415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_919: {
    width: wp("0.24139287716649807%"),
    height: hp("0.4855211966676139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_920: {
    width: wp("0.1877474198945303%"),
    height: hp("0.37762773492948604%"),
    top: hp("0.05388103547642231%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026767781190919493%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_921: {
    width: wp("0.24138709322491306%"),
    height: hp("0.485521457234367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08058025165406235%")
  },
  View_121_922: {
    width: wp("0.24138709322491306%"),
    height: hp("0.485521457234367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_923: {
    width: wp("0.24138901619769976%"),
    height: hp("0.4855213269509905%"),
    top: hp("0.10786212858604927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_924: {
    width: wp("0.1877474198945303%"),
    height: hp("0.37762766978779777%"),
    top: hp("0.05389771174861835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026598559585700343%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_925: {
    width: wp("1.0460280891327116%"),
    minWidth: wp("1.0460280891327116%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.101047143293165%"),
    top: hp("0.3776175076844197%")
  },
  ImageBackground_121_926: {
    width: wp("1.0460280891327116%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_927: {
    width: wp("0.295032520450431%"),
    height: hp("0.8203751402474492%"),
    top: hp("0.20461785988729275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3755027420053523%")
  },
  View_121_928: {
    width: wp("0.295032520450431%"),
    height: hp("0.7553054986755705%"),
    top: hp("0.06507081412226512%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_929: {
    width: wp("0.295032520450431%"),
    minWidth: wp("0.295032520450431%"),
    height: hp("0.5394680903908985%"),
    minHeight: hp("0.5394680903908985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.21584099107755605%")
  },
  View_121_930: {
    width: wp("0.295032520450431%"),
    height: hp("0.5394680903908985%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_931: {
    width: wp("0.24139480013928477%"),
    height: hp("0.43157456351108237%"),
    top: hp("0.05406447447060714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026721629844047357%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_932: {
    width: wp("0.08057578975627012%"),
    height: hp("0.10787141127664535%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.107286497715819%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_121_933: {
    width: wp("0.026758166326992756%"),
    height: hp("0.4855211966676139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025362484%")
  },
  View_121_934: {
    width: wp("0.11393122501769905%"),
    height: hp("0.22890010818106232%"),
    top: hp("0.03156818327357769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03685954237555933%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_935: {
    width: wp("0.11393122501769905%"),
    height: hp("0.22890010818106232%"),
    top: hp("0.03156818327357769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14425372656742752%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_936: {
    width: wp("0.03788176015554619%"),
    height: hp("0.07610540083848714%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1285930361925054%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_121_937: {
    width: wp("1.3947033176049541%"),
    height: hp("0.6473633760962981%"),
    top: hp("0.701303951075829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.40233975021660484%")
  },
  View_121_941: {
    width: wp("1.4215239805475148%"),
    minWidth: wp("1.4215239805475148%"),
    height: hp("1.2947270127593493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1188929461050723%"),
    top: hp("0.3776175076844197%")
  },
  ImageBackground_121_942: {
    width: wp("0.697351538616678%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_121_945: {
    width: wp("0.6973520193598747%"),
    height: hp("1.2947240162416886%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7241761676906098%")
  },
  View_121_948: {
    width: wp("1.0460276083895148%"),
    minWidth: wp("1.0460276083895148%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7549812687066773%"),
    top: hp("0.3776175076844197%")
  },
  ImageBackground_121_949: {
    width: wp("1.0460276083895148%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_950: {
    width: wp("0.4023185674695002%"),
    height: hp("0.6473620732625325%"),
    top: hp("0.3236864433914093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3218594931474499%")
  },
  View_121_951: {
    width: wp("0.4023185674695002%"),
    minWidth: wp("0.4023185674695002%"),
    height: hp("0.647361942979156%"),
    minHeight: hp("0.647361942979156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_952: {
    width: wp("0.4023185674695002%"),
    height: hp("0.647361942979156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_953: {
    width: wp("0.34867600967993734%"),
    height: hp("0.5394682858159633%"),
    top: hp("0.05406447447063556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026729321735192713%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_954: {
    width: wp("0.026754320381419346%"),
    height: hp("0.647361942979156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025362484%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_955: {
    width: wp("0.05371893962074092%"),
    height: hp("0.05388694708464575%"),
    top: hp("0.10786212858604927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_956: {
    width: wp("0.05371893962074092%"),
    height: hp("0.053886857514824374%"),
    top: hp("0.21575760971651903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_957: {
    width: wp("0.05371893962074092%"),
    height: hp("0.053886857514824374%"),
    top: hp("0.32368644339138086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_958: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    height: hp("69.67213114754098%"),
    minHeight: hp("69.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.490233144297417%"),
    top: hp("109.69945355191257%")
  },
  View_121_959: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.39344262295083%")
  },
  Text_121_959: {
    color: "rgba(115, 128, 141, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_121_960: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.289617486338784%")
  },
  Text_121_960: {
    color: "rgba(16, 18, 20, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_121_961: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    height: hp("56.01092896174863%"),
    minHeight: hp("56.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 239, 215, 1)"
  },
  View_121_962: {
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.2930056710775055%")
  },
  View_121_963: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    minHeight: hp("1.8607505683690473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_121_964: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    minHeight: hp("1.8607505683690473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_965: {
    width: wp("14.24207200625443%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.011927354087902%"),
    top: hp("0.37762584582053194%")
  },
  ImageBackground_121_966: {
    width: wp("14.24207200625443%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_121_967: {
    width: wp("0.2952447385253137%"),
    height: hp("0.7008554505520179%"),
    top: hp("0.2697303646900622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.75929334288358%")
  },
  View_121_968: {
    width: wp("3.087586641461878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.984922047298358%"),
    top: hp("0.1688222416111671%")
  },
  Text_121_968: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 4,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_969: {
    width: wp("0.6437105131960547%"),
    minWidth: wp("0.6437105131960547%"),
    height: hp("1.2947234951081823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.50537078607435%"),
    top: hp("0.4286469006147797%")
  },
  View_121_970: {
    width: wp("0.6437105131960547%"),
    height: hp("1.2947234951081823%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_121_971: {
    width: wp("0.29503834946169066%"),
    height: hp("0.5934149841141831%"),
    top: hp("0.3776258458205177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18774367911153433%")
  },
  View_121_972: {
    width: wp("0.026758166326992756%"),
    height: hp("0.5934149189724948%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025361773%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_121_973: {
    width: wp("0.29503834946169066%"),
    height: hp("0.053886767945002995%"),
    top: hp("0.2697470409622582%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_974: {
    width: wp("1.046026166159925%"),
    minWidth: wp("1.046026166159925%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.307989475031505%"),
    top: hp("0.37762584582053194%")
  },
  ImageBackground_121_975: {
    width: wp("1.046026166159925%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_976: {
    width: wp("0.32196492613976907%"),
    height: hp("0.6473338017698194%"),
    top: hp("0.32367810525531127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3755027420053523%")
  },
  View_121_977: {
    width: wp("0.24139287716649807%"),
    height: hp("0.4855211966676139%"),
    top: hp("0.16180986915128415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_978: {
    width: wp("0.24139287716649807%"),
    height: hp("0.4855211966676139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_979: {
    width: wp("0.1877474198945303%"),
    height: hp("0.37762773492948604%"),
    top: hp("0.05388937361254875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0267677811909266%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_980: {
    width: wp("0.24138709322491306%"),
    height: hp("0.485521457234367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08058025165406946%")
  },
  View_121_981: {
    width: wp("0.24138709322491306%"),
    height: hp("0.485521457234367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_982: {
    width: wp("0.24138901619769976%"),
    height: hp("0.4855213269509905%"),
    top: hp("0.1078704667221615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_983: {
    width: wp("0.1877474198945303%"),
    height: hp("0.37762766978779777%"),
    top: hp("0.05388937361252033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026598559585693238%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_984: {
    width: wp("1.0460280891327116%"),
    minWidth: wp("1.0460280891327116%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.10102406761972%"),
    top: hp("0.37762584582053194%")
  },
  ImageBackground_121_985: {
    width: wp("1.0460280891327116%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_986: {
    width: wp("0.295032520450431%"),
    height: hp("0.8203751402474492%"),
    top: hp("0.20461785988730696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3755027420053594%")
  },
  View_121_987: {
    width: wp("0.295032520450431%"),
    height: hp("0.7553054986755705%"),
    top: hp("0.0650624759861671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_988: {
    width: wp("0.295032520450431%"),
    minWidth: wp("0.295032520450431%"),
    height: hp("0.5394680903908985%"),
    minHeight: hp("0.5394680903908985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.21584099107751342%")
  },
  View_121_989: {
    width: wp("0.295032520450431%"),
    height: hp("0.5394680903908985%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_990: {
    width: wp("0.24139480013928477%"),
    height: hp("0.43157456351108237%"),
    top: hp("0.05405613633453754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02673701362633807%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_991: {
    width: wp("0.08057578975627012%"),
    height: hp("0.10787141127664535%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10728649771581189%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_121_992: {
    width: wp("0.026758166326992756%"),
    height: hp("0.4855211966676139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025362484%")
  },
  View_121_993: {
    width: wp("0.11393122501769905%"),
    height: hp("0.22890010818106232%"),
    top: hp("0.03156818327356348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03685954237555222%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_994: {
    width: wp("0.11393122501769905%"),
    height: hp("0.22890010818106232%"),
    top: hp("0.03156818327356348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14425372656742041%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_995: {
    width: wp("0.03788176015554619%"),
    height: hp("0.07610540083848714%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1285930361925054%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_121_996: {
    width: wp("1.3947033176049541%"),
    height: hp("0.6473633760962981%"),
    top: hp("0.7013122892119412%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4023243664343088%")
  },
  View_121_1000: {
    width: wp("1.4215239805475148%"),
    minWidth: wp("1.4215239805475148%"),
    height: hp("1.2947270127593493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.11887756232278%"),
    top: hp("0.37762584582053194%")
  },
  ImageBackground_121_1001: {
    width: wp("0.697351538616678%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_121_1004: {
    width: wp("0.6973520193598747%"),
    height: hp("1.2947240162416886%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7241761676906098%")
  },
  View_121_1007: {
    width: wp("1.0460276083895148%"),
    minWidth: wp("1.0460276083895148%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7549658849243848%"),
    top: hp("0.37762584582053194%")
  },
  ImageBackground_121_1008: {
    width: wp("1.0460276083895148%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1009: {
    width: wp("0.4023185674695002%"),
    height: hp("0.6473620732625325%"),
    top: hp("0.32367810525531127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3218594931474481%")
  },
  View_121_1010: {
    width: wp("0.4023185674695002%"),
    minWidth: wp("0.4023185674695002%"),
    height: hp("0.647361942979156%"),
    minHeight: hp("0.647361942979156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_1011: {
    width: wp("0.4023185674695002%"),
    height: hp("0.647361942979156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1012: {
    width: wp("0.34867600967993734%"),
    height: hp("0.5394682858159633%"),
    top: hp("0.05406447447062135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026729321735190936%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1013: {
    width: wp("0.026754320381419346%"),
    height: hp("0.647361942979156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025362128%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1014: {
    width: wp("0.05371893962074092%"),
    height: hp("0.05388694708464575%"),
    top: hp("0.1078704667221615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1015: {
    width: wp("0.05371893962074092%"),
    height: hp("0.053886857514824374%"),
    top: hp("0.2157492715804068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1016: {
    width: wp("0.05371893962074092%"),
    height: hp("0.053886857514824374%"),
    top: hp("0.32367810525528284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1017: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    height: hp("69.67213114754098%"),
    minHeight: hp("69.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.74102079395085%"),
    top: hp("109.69945355191257%")
  },
  View_121_1018: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.39344262295083%")
  },
  Text_121_1018: {
    color: "rgba(115, 128, 141, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_121_1019: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.289617486338784%")
  },
  Text_121_1019: {
    color: "rgba(16, 18, 20, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_121_1020: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    height: hp("56.01092896174863%"),
    minHeight: hp("56.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 243, 243, 1)"
  },
  View_121_1021: {
    width: wp("32.262129804662884%"),
    height: hp("42.34973094502433%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.293005671077502%")
  },
  View_121_1022: {
    width: wp("32.26212211277174%"),
    minWidth: wp("32.26212211277174%"),
    height: hp("40.50938757390924%"),
    minHeight: hp("40.50938757390924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.8403433711151251%")
  },
  ImageBackground_121_1023: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("40.50938757390924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_121_1024: {
    width: wp("32.26212211277174%"),
    minWidth: wp("32.26212211277174%"),
    height: hp("40.50938757390924%"),
    minHeight: hp("40.50938757390924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_1025: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    minHeight: hp("1.8607505683690473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_121_1026: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    minHeight: hp("1.8607505683690473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_1027: {
    width: wp("14.24207200625443%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.011927354087895%"),
    top: hp("0.37762584582053194%")
  },
  ImageBackground_121_1028: {
    width: wp("14.24207200625443%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_121_1029: {
    width: wp("0.2952447385253137%"),
    height: hp("0.7008554505520179%"),
    top: hp("0.2697303646900622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.759285650992439%")
  },
  View_121_1030: {
    width: wp("2.3602697784673814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.994552295014188%"),
    top: hp("0.2099709432633432%")
  },
  Text_121_1030: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 4,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_1031: {
    width: wp("0.6437105131960547%"),
    minWidth: wp("0.6437105131960547%"),
    height: hp("1.2947234951081823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.50537078607436%"),
    top: hp("0.4286469006147797%")
  },
  View_121_1032: {
    width: wp("0.6437105131960547%"),
    height: hp("1.2947234951081823%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_121_1033: {
    width: wp("0.29503834946169066%"),
    height: hp("0.5934149841141831%"),
    top: hp("0.3776258458205177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18774367911153433%")
  },
  View_121_1034: {
    width: wp("0.026758166326992756%"),
    height: hp("0.5934149189724948%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025361063%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_121_1035: {
    width: wp("0.29503834946169066%"),
    height: hp("0.053886767945002995%"),
    top: hp("0.2697470409622582%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1036: {
    width: wp("1.046026166159925%"),
    minWidth: wp("1.046026166159925%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.307989475031512%"),
    top: hp("0.37762584582053194%")
  },
  ImageBackground_121_1037: {
    width: wp("1.046026166159925%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1038: {
    width: wp("0.32196492613976907%"),
    height: hp("0.6473338017698194%"),
    top: hp("0.32367810525531127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3755027420053523%")
  },
  View_121_1039: {
    width: wp("0.24139287716649807%"),
    height: hp("0.4855211966676139%"),
    top: hp("0.16180986915128415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1040: {
    width: wp("0.24139287716649807%"),
    height: hp("0.4855211966676139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1041: {
    width: wp("0.1877474198945303%"),
    height: hp("0.37762773492948604%"),
    top: hp("0.05388937361254875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0267677811909266%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1042: {
    width: wp("0.24138709322491306%"),
    height: hp("0.485521457234367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08058025165406946%")
  },
  View_121_1043: {
    width: wp("0.24138709322491306%"),
    height: hp("0.485521457234367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1044: {
    width: wp("0.24138901619769976%"),
    height: hp("0.4855213269509905%"),
    top: hp("0.1078704667221615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.053720167769384375%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1045: {
    width: wp("0.1877474198945303%"),
    height: hp("0.37762766978779777%"),
    top: hp("0.05388937361252033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026598559585693238%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1046: {
    width: wp("1.0460280891327116%"),
    minWidth: wp("1.0460280891327116%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.101024067619726%"),
    top: hp("0.37762584582053194%")
  },
  ImageBackground_121_1047: {
    width: wp("1.0460280891327116%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1048: {
    width: wp("0.295032520450431%"),
    height: hp("0.8203751402474492%"),
    top: hp("0.20461785988730696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3755027420053523%")
  },
  View_121_1049: {
    width: wp("0.295032520450431%"),
    height: hp("0.7553054986755705%"),
    top: hp("0.0650624759861671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1050: {
    width: wp("0.295032520450431%"),
    minWidth: wp("0.295032520450431%"),
    height: hp("0.5394680903908985%"),
    minHeight: hp("0.5394680903908985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.21584099107751342%")
  },
  View_121_1051: {
    width: wp("0.295032520450431%"),
    height: hp("0.5394680903908985%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1052: {
    width: wp("0.24139480013928477%"),
    height: hp("0.43157456351108237%"),
    top: hp("0.05405613633453754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026737013626330963%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1053: {
    width: wp("0.08057578975627012%"),
    height: hp("0.10787141127664535%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.107286497715819%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_121_1054: {
    width: wp("0.026758166326992756%"),
    height: hp("0.4855211966676139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025362484%")
  },
  View_121_1055: {
    width: wp("0.11393122501769905%"),
    height: hp("0.22890010818106232%"),
    top: hp("0.03156818327356348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03685954237555222%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1056: {
    width: wp("0.11393122501769905%"),
    height: hp("0.22890010818106232%"),
    top: hp("0.03156818327356348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14425372656742752%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1057: {
    width: wp("0.03788176015554619%"),
    height: hp("0.07610540083848714%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1285930361925125%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_121_1058: {
    width: wp("1.3947033176049541%"),
    height: hp("0.6473633760962981%"),
    top: hp("0.7013122892119412%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4023166745431652%")
  },
  View_121_1062: {
    width: wp("1.4215239805475148%"),
    minWidth: wp("1.4215239805475148%"),
    height: hp("1.2947270127593493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.118869870431631%"),
    top: hp("0.37762584582053194%")
  },
  ImageBackground_121_1063: {
    width: wp("0.697351538616678%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_121_1066: {
    width: wp("0.6973520193598747%"),
    height: hp("1.2947240162416886%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7241761676906151%")
  },
  View_121_1069: {
    width: wp("1.0460276083895148%"),
    minWidth: wp("1.0460276083895148%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7549658849243883%"),
    top: hp("0.37762584582053194%")
  },
  ImageBackground_121_1070: {
    width: wp("1.0460276083895148%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1071: {
    width: wp("0.4023185674695002%"),
    height: hp("0.6473620732625325%"),
    top: hp("0.32367810525531127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3218594931474499%")
  },
  View_121_1072: {
    width: wp("0.4023185674695002%"),
    minWidth: wp("0.4023185674695002%"),
    height: hp("0.647361942979156%"),
    minHeight: hp("0.647361942979156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_1073: {
    width: wp("0.4023185674695002%"),
    height: hp("0.647361942979156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1074: {
    width: wp("0.34867600967993734%"),
    height: hp("0.5394682858159633%"),
    top: hp("0.05406447447062135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02673701362633807%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1075: {
    width: wp("0.026754320381419346%"),
    height: hp("0.647361942979156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025362484%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1076: {
    width: wp("0.05371893962074092%"),
    height: hp("0.05388694708464575%"),
    top: hp("0.1078704667221615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1077: {
    width: wp("0.05371893962074092%"),
    height: hp("0.053886857514824374%"),
    top: hp("0.2157492715804068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1078: {
    width: wp("0.05371893962074092%"),
    height: hp("0.053886857514824374%"),
    top: hp("0.32367810525528284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1079: {
    width: wp("43.41524889729049%"),
    minWidth: wp("43.41524889729049%"),
    height: hp("69.67213114754098%"),
    minHeight: hp("69.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.229993698802772%"),
    top: hp("30.191256830601095%")
  },
  View_121_1080: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.39344262295083%")
  },
  Text_121_1080: {
    color: "rgba(115, 128, 141, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_121_1081: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5671077504725899%"),
    top: hp("59.2896174863388%")
  },
  Text_121_1081: {
    color: "rgba(16, 18, 20, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_121_1082: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    height: hp("56.01092896174863%"),
    minHeight: hp("56.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 236, 255, 1)"
  },
  View_121_1083: {
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    top: hp("6.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.2930056710775055%")
  },
  View_121_1084: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    minHeight: hp("1.8607505683690473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_121_1085: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    minHeight: hp("1.8607505683690473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_1086: {
    width: wp("14.24207200625443%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.011927354087902%"),
    top: hp("0.3776258458205177%")
  },
  ImageBackground_121_1087: {
    width: wp("14.24207200625443%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_121_1088: {
    width: wp("0.2952447385253137%"),
    height: hp("0.7008554505520179%"),
    top: hp("0.2697303646900622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.759293342883584%")
  },
  View_121_1089: {
    width: wp("2.3602697784673814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.994544603123028%"),
    top: hp("0.20997094326332189%")
  },
  Text_121_1089: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 4,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_1090: {
    width: wp("0.6437105131960547%"),
    minWidth: wp("0.6437105131960547%"),
    height: hp("1.2947234951081823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.505370786074355%"),
    top: hp("0.4286469006147513%")
  },
  View_121_1091: {
    width: wp("0.6437105131960547%"),
    height: hp("1.2947234951081823%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_121_1092: {
    width: wp("0.29503834946169066%"),
    height: hp("0.5934149841141831%"),
    top: hp("0.37762584582052483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18774367911152723%")
  },
  View_121_1093: {
    width: wp("0.026758166326992756%"),
    height: hp("0.5934149189724948%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025362484%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_121_1094: {
    width: wp("0.29503834946169066%"),
    height: hp("0.053886767945002995%"),
    top: hp("0.2697428718942092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1095: {
    width: wp("1.046026166159925%"),
    minWidth: wp("1.046026166159925%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.3079894750315%"),
    top: hp("0.3776258458205177%")
  },
  ImageBackground_121_1096: {
    width: wp("1.046026166159925%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1097: {
    width: wp("0.32196492613976907%"),
    height: hp("0.6473338017698194%"),
    top: hp("0.32367810525529706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3755027420053594%")
  },
  View_121_1098: {
    width: wp("0.24139287716649807%"),
    height: hp("0.4855211966676139%"),
    top: hp("0.16180986915129836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1099: {
    width: wp("0.24139287716649807%"),
    height: hp("0.4855211966676139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1100: {
    width: wp("0.1877474198945303%"),
    height: hp("0.37762773492948604%"),
    top: hp("0.05388520454448553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0267677811909266%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1101: {
    width: wp("0.24138709322491306%"),
    height: hp("0.485521457234367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08058025165406235%")
  },
  View_121_1102: {
    width: wp("0.24138709322491306%"),
    height: hp("0.485521457234367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1103: {
    width: wp("0.24138901619769976%"),
    height: hp("0.4855213269509905%"),
    top: hp("0.1078704667221615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1104: {
    width: wp("0.1877474198945303%"),
    height: hp("0.37762766978779777%"),
    top: hp("0.05388937361253454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026598559585700343%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1105: {
    width: wp("1.0460280891327116%"),
    minWidth: wp("1.0460280891327116%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.101024067619722%"),
    top: hp("0.3776258458205177%")
  },
  ImageBackground_121_1106: {
    width: wp("1.0460280891327116%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1107: {
    width: wp("0.295032520450431%"),
    height: hp("0.8203751402474492%"),
    top: hp("0.20461785988729986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3755027420053594%")
  },
  View_121_1108: {
    width: wp("0.295032520450431%"),
    height: hp("0.7553054986755705%"),
    top: hp("0.06506664505421611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1109: {
    width: wp("0.295032520450431%"),
    minWidth: wp("0.295032520450431%"),
    height: hp("0.5394680903908985%"),
    minHeight: hp("0.5394680903908985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.21584099107752763%")
  },
  View_121_1110: {
    width: wp("0.295032520450431%"),
    height: hp("0.5394680903908985%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1111: {
    width: wp("0.24139480013928477%"),
    height: hp("0.43157456351108237%"),
    top: hp("0.054060305402579445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02673701362633807%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1112: {
    width: wp("0.08057578975627012%"),
    height: hp("0.10787141127664535%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10728649771581189%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_121_1113: {
    width: wp("0.026758166326992756%"),
    height: hp("0.4855211966676139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025361773%")
  },
  View_121_1114: {
    width: wp("0.11393122501769905%"),
    height: hp("0.22890010818106232%"),
    top: hp("0.03156818327356348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03685954237554512%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1115: {
    width: wp("0.11393122501769905%"),
    height: hp("0.22890010818106232%"),
    top: hp("0.03156818327356348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14425372656742041%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1116: {
    width: wp("0.03788176015554619%"),
    height: hp("0.07610540083848714%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1285930361924983%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_121_1117: {
    width: wp("1.3947033176049541%"),
    height: hp("0.6473633760962981%"),
    top: hp("0.7013122892119199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4023243664343106%")
  },
  View_121_1121: {
    width: wp("1.4215239805475148%"),
    minWidth: wp("1.4215239805475148%"),
    height: hp("1.2947270127593493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.118877562322778%"),
    top: hp("0.3776258458205177%")
  },
  ImageBackground_121_1122: {
    width: wp("0.697351538616678%"),
    height: hp("1.294723885958312%"),
    top: hp("0.000004169068056114611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_121_1125: {
    width: wp("0.6973520193598747%"),
    height: hp("1.2947240162416886%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7241761676906115%")
  },
  View_121_1128: {
    width: wp("1.0460276083895148%"),
    minWidth: wp("1.0460276083895148%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.754965884924383%"),
    top: hp("0.3776258458205177%")
  },
  ImageBackground_121_1129: {
    width: wp("1.0460276083895148%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1130: {
    width: wp("0.4023185674695002%"),
    height: hp("0.6473620732625325%"),
    top: hp("0.32367810525529706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3218594931474499%")
  },
  View_121_1131: {
    width: wp("0.4023185674695002%"),
    minWidth: wp("0.4023185674695002%"),
    height: hp("0.647361942979156%"),
    minHeight: hp("0.647361942979156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_1132: {
    width: wp("0.4023185674695002%"),
    height: hp("0.647361942979156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1133: {
    width: wp("0.34867600967993734%"),
    height: hp("0.5394682858159633%"),
    top: hp("0.054060305402579445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026729321735192713%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1134: {
    width: wp("0.026754320381419346%"),
    height: hp("0.647361942979156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025362306%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1135: {
    width: wp("0.05371893962074092%"),
    height: hp("0.05388694708464575%"),
    top: hp("0.1078704667221615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937549%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1136: {
    width: wp("0.05371893962074092%"),
    height: hp("0.053886857514824374%"),
    top: hp("0.21574927158043522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937549%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1137: {
    width: wp("0.05371893962074092%"),
    height: hp("0.053886857514824374%"),
    top: hp("0.32367810525529706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937549%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1138: {
    width: wp("43.41524889729049%"),
    minWidth: wp("43.41524889729049%"),
    height: hp("69.67213114754098%"),
    minHeight: hp("69.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.74102079395085%"),
    top: hp("30.191256830601095%")
  },
  View_121_1139: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.39344262295083%")
  },
  Text_121_1139: {
    color: "rgba(115, 128, 141, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_121_1140: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5671077504725872%"),
    top: hp("59.2896174863388%")
  },
  Text_121_1140: {
    color: "rgba(16, 18, 20, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_121_1141: {
    width: wp("42.848141146817895%"),
    minWidth: wp("42.848141146817895%"),
    height: hp("56.01092896174863%"),
    minHeight: hp("56.01092896174863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 236, 255, 1)"
  },
  View_121_1142: {
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    top: hp("6.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.293005671077502%")
  },
  View_121_1143: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    minHeight: hp("1.8607505683690473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_121_1144: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("1.8607505683690473%"),
    minHeight: hp("1.8607505683690473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_1145: {
    width: wp("14.24207200625443%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.011927354087895%"),
    top: hp("0.3776258458205177%")
  },
  ImageBackground_121_1146: {
    width: wp("14.24207200625443%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_121_1147: {
    width: wp("0.2952447385253137%"),
    height: hp("0.7008554505520179%"),
    top: hp("0.2697303646900622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.759285650992439%")
  },
  View_121_1148: {
    width: wp("2.3602697784673814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.994552295014188%"),
    top: hp("0.20997094326332189%")
  },
  Text_121_1148: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 4,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_1149: {
    width: wp("0.6437105131960547%"),
    minWidth: wp("0.6437105131960547%"),
    height: hp("1.2947234951081823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.50537078607436%"),
    top: hp("0.4286469006147513%")
  },
  View_121_1150: {
    width: wp("0.6437105131960547%"),
    height: hp("1.2947234951081823%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_121_1151: {
    width: wp("0.29503834946169066%"),
    height: hp("0.5934149841141831%"),
    top: hp("0.37762584582052483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18774367911153433%")
  },
  View_121_1152: {
    width: wp("0.026758166326992756%"),
    height: hp("0.5934149189724948%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025361063%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_121_1153: {
    width: wp("0.29503834946169066%"),
    height: hp("0.053886767945002995%"),
    top: hp("0.2697428718942092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1154: {
    width: wp("1.046026166159925%"),
    minWidth: wp("1.046026166159925%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.307989475031512%"),
    top: hp("0.3776258458205177%")
  },
  ImageBackground_121_1155: {
    width: wp("1.046026166159925%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1156: {
    width: wp("0.32196492613976907%"),
    height: hp("0.6473338017698194%"),
    top: hp("0.32367810525529706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3755027420053523%")
  },
  View_121_1157: {
    width: wp("0.24139287716649807%"),
    height: hp("0.4855211966676139%"),
    top: hp("0.16180986915129836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1158: {
    width: wp("0.24139287716649807%"),
    height: hp("0.4855211966676139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1159: {
    width: wp("0.1877474198945303%"),
    height: hp("0.37762773492948604%"),
    top: hp("0.05388520454448553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0267677811909266%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1160: {
    width: wp("0.24138709322491306%"),
    height: hp("0.485521457234367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08058025165406946%")
  },
  View_121_1161: {
    width: wp("0.24138709322491306%"),
    height: hp("0.485521457234367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1162: {
    width: wp("0.24138901619769976%"),
    height: hp("0.4855213269509905%"),
    top: hp("0.1078704667221615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.053720167769384375%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1163: {
    width: wp("0.1877474198945303%"),
    height: hp("0.37762766978779777%"),
    top: hp("0.05388937361253454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026598559585693238%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1164: {
    width: wp("1.0460280891327116%"),
    minWidth: wp("1.0460280891327116%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.101024067619726%"),
    top: hp("0.3776258458205177%")
  },
  ImageBackground_121_1165: {
    width: wp("1.0460280891327116%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1166: {
    width: wp("0.295032520450431%"),
    height: hp("0.8203751402474492%"),
    top: hp("0.20461785988729986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3755027420053523%")
  },
  View_121_1167: {
    width: wp("0.295032520450431%"),
    height: hp("0.7553054986755705%"),
    top: hp("0.06506664505421611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1168: {
    width: wp("0.295032520450431%"),
    minWidth: wp("0.295032520450431%"),
    height: hp("0.5394680903908985%"),
    minHeight: hp("0.5394680903908985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.21584099107752763%")
  },
  View_121_1169: {
    width: wp("0.295032520450431%"),
    height: hp("0.5394680903908985%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1170: {
    width: wp("0.24139480013928477%"),
    height: hp("0.43157456351108237%"),
    top: hp("0.054060305402579445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026737013626330963%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1171: {
    width: wp("0.08057578975627012%"),
    height: hp("0.10787141127664535%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.107286497715819%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_121_1172: {
    width: wp("0.026758166326992756%"),
    height: hp("0.4855211966676139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025362484%")
  },
  View_121_1173: {
    width: wp("0.11393122501769905%"),
    height: hp("0.22890010818106232%"),
    top: hp("0.03156818327356348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03685954237555222%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1174: {
    width: wp("0.11393122501769905%"),
    height: hp("0.22890010818106232%"),
    top: hp("0.03156818327356348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14425372656742752%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1175: {
    width: wp("0.03788176015554619%"),
    height: hp("0.07610540083848714%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1285930361925125%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_121_1176: {
    width: wp("1.3947033176049541%"),
    height: hp("0.6473633760962981%"),
    top: hp("0.7013122892119199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4023166745431652%")
  },
  View_121_1180: {
    width: wp("1.4215239805475148%"),
    minWidth: wp("1.4215239805475148%"),
    height: hp("1.2947270127593493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.118869870431631%"),
    top: hp("0.3776258458205177%")
  },
  ImageBackground_121_1181: {
    width: wp("0.697351538616678%"),
    height: hp("1.294723885958312%"),
    top: hp("0.000004169068056114611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_121_1184: {
    width: wp("0.6973520193598747%"),
    height: hp("1.2947240162416886%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7241761676906151%")
  },
  View_121_1187: {
    width: wp("1.0460276083895148%"),
    minWidth: wp("1.0460276083895148%"),
    height: hp("1.294723885958312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7549658849243883%"),
    top: hp("0.3776258458205177%")
  },
  ImageBackground_121_1188: {
    width: wp("1.0460276083895148%"),
    height: hp("1.294723885958312%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_121_1189: {
    width: wp("0.4023185674695002%"),
    height: hp("0.6473620732625325%"),
    top: hp("0.32367810525529706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3218594931474499%")
  },
  View_121_1190: {
    width: wp("0.4023185674695002%"),
    minWidth: wp("0.4023185674695002%"),
    height: hp("0.647361942979156%"),
    minHeight: hp("0.647361942979156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_1191: {
    width: wp("0.4023185674695002%"),
    height: hp("0.647361942979156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1192: {
    width: wp("0.34867600967993734%"),
    height: hp("0.5394682858159633%"),
    top: hp("0.054060305402579445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02673701362633807%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1193: {
    width: wp("0.026754320381419346%"),
    height: hp("0.647361942979156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13410043025362484%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1194: {
    width: wp("0.05371893962074092%"),
    height: hp("0.05388694708464575%"),
    top: hp("0.1078704667221615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1195: {
    width: wp("0.05371893962074092%"),
    height: hp("0.053886857514824374%"),
    top: hp("0.21574927158043522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1196: {
    width: wp("0.05371893962074092%"),
    height: hp("0.053886857514824374%"),
    top: hp("0.32367810525529706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05372016776937727%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_121_1197: {
    width: wp("32.26212211277174%"),
    minWidth: wp("32.26212211277174%"),
    height: hp("40.43715846994536%"),
    minHeight: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.586003650263862%"),
    top: hp("38.17914118532275%")
  },
  ImageBackground_121_1198: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_121_1199: {
    width: wp("32.26212211277174%"),
    minWidth: wp("32.26212211277174%"),
    height: hp("40.43715846994536%"),
    minHeight: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_1200: {
    width: wp("32.26212211277174%"),
    minWidth: wp("32.26212211277174%"),
    height: hp("40.43715846994536%"),
    minHeight: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.097038437303084%"),
    top: hp("38.17914118532275%")
  },
  ImageBackground_121_1201: {
    flexGrow: 1,
    width: wp("32.26212211277174%"),
    height: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_121_1202: {
    width: wp("32.26212211277174%"),
    minWidth: wp("32.26212211277174%"),
    height: hp("40.43715846994536%"),
    minHeight: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_1203: {
    width: wp("32.514177693761816%"),
    minWidth: wp("32.514177693761816%"),
    height: hp("40.645999595767165%"),
    minHeight: hp("40.645999595767165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.405166981726527%"),
    top: hp("117.41411386291838%")
  },
  ImageBackground_121_1204: {
    flexGrow: 1,
    width: wp("32.514177693761816%"),
    height: hp("40.645999595767165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_121_1205: {
    width: wp("32.514177693761816%"),
    minWidth: wp("32.514177693761816%"),
    height: hp("40.645999595767165%"),
    minHeight: hp("40.645999595767165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2: { height: 2028 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
