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
      <View style={styles.View_4_12}>
        <View style={styles.View_4_13}>
          <View style={styles.View_4_14} />
          <View style={styles.View_4_15}>
            <View style={styles.View_4_16}>
              <View style={styles.View_4_17}>
                <View style={styles.View_4_18}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d27a/7649/6e32129b300f9012d738f3e7299696bf"
                    }}
                    style={styles.ImageBackground_4_19}
                  />
                  <View style={styles.View_4_20}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1612/8995/0251aed3cd1a802478b824f5e58a1179"
                      }}
                      style={styles.ImageBackground_4_21}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a61/56a1/747d7ecaee5b5250a21801665f2dd864"
                      }}
                      style={styles.ImageBackground_4_22}
                    />
                    <View style={styles.View_4_23}>
                      <Text style={styles.Text_4_23}>Nikerja.com</Text>
                    </View>
                  </View>
                  <View style={styles.View_4_24}>
                    <View style={styles.View_4_25} />
                    <View style={styles.View_4_26}>
                      <View style={styles.View_4_27} />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b88/2299/d6a8998e4233fc515bdc66217d4fbf54"
                        }}
                        style={styles.ImageBackground_4_28}
                      />
                    </View>
                  </View>
                  <View style={styles.View_4_29}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_30}
                    />
                    <View style={styles.View_4_31}>
                      <View style={styles.View_4_32}>
                        <View style={styles.View_4_33} />
                        <View style={styles.View_4_34} />
                      </View>
                      <View style={styles.View_4_35}>
                        <View style={styles.View_4_36} />
                        <View style={styles.View_4_37} />
                        <View style={styles.View_4_38} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_4_39}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_40}
                    />
                    <View style={styles.View_4_41}>
                      <View style={styles.View_4_42}>
                        <View style={styles.View_4_43}>
                          <View style={styles.View_4_44} />
                          <View style={styles.View_4_45} />
                          <View style={styles.View_4_46} />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b090/cf2f/0107c9ce46d10470128ac656305c0ca0"
                          }}
                          style={styles.ImageBackground_4_47}
                        />
                      </View>
                      <View style={styles.View_4_48} />
                      <View style={styles.View_4_49} />
                      <View style={styles.View_4_50} />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f951/7778/aa23ade073938ad951aedcddf4f2eb21"
                    }}
                    style={styles.ImageBackground_4_51}
                  />
                  <View style={styles.View_4_55}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5057/067c/3760c272f8de861e62b4129d52e6bcfc"
                      }}
                      style={styles.ImageBackground_4_56}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c3/d6a9/738acc6a9e84fcdb4b22b0ab78dc107a"
                      }}
                      style={styles.ImageBackground_4_59}
                    />
                  </View>
                  <View style={styles.View_4_62}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_63}
                    />
                    <View style={styles.View_4_64}>
                      <View style={styles.View_4_65}>
                        <View style={styles.View_4_66} />
                        <View style={styles.View_4_67} />
                      </View>
                      <View style={styles.View_4_68} />
                      <View style={styles.View_4_69} />
                      <View style={styles.View_4_70} />
                      <View style={styles.View_4_71} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_4_72}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a47b/83d7/5f9517e188c1019840fa982e39c55f46"
                  }}
                  style={styles.ImageBackground_4_73}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c894/bba5/a62bb9d850195d3fa83070ad50524d6b"
                  }}
                  style={styles.ImageBackground_4_74}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_4_261}>
            <Text style={styles.Text_4_261}>
              Fitur lowongan Fitur lowonganmerupakan sebuah fitur yang
              memberikan kesempatan pada user untuk memudahkan dalam mendapatkan
              pekerjaan
            </Text>
          </View>
        </View>
        <View style={styles.View_4_75}>
          <View style={styles.View_4_76} />
          <View style={styles.View_4_77}>
            <View style={styles.View_4_78}>
              <View style={styles.View_4_79}>
                <View style={styles.View_4_80}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d27a/7649/6e32129b300f9012d738f3e7299696bf"
                    }}
                    style={styles.ImageBackground_4_81}
                  />
                  <View style={styles.View_4_82}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1612/8995/0251aed3cd1a802478b824f5e58a1179"
                      }}
                      style={styles.ImageBackground_4_83}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a61/56a1/747d7ecaee5b5250a21801665f2dd864"
                      }}
                      style={styles.ImageBackground_4_84}
                    />
                    <View style={styles.View_4_85}>
                      <Text style={styles.Text_4_85}>website.co</Text>
                    </View>
                  </View>
                  <View style={styles.View_4_86}>
                    <View style={styles.View_4_87} />
                    <View style={styles.View_4_88}>
                      <View style={styles.View_4_89} />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b88/2299/d6a8998e4233fc515bdc66217d4fbf54"
                        }}
                        style={styles.ImageBackground_4_90}
                      />
                    </View>
                  </View>
                  <View style={styles.View_4_91}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_92}
                    />
                    <View style={styles.View_4_93}>
                      <View style={styles.View_4_94}>
                        <View style={styles.View_4_95} />
                        <View style={styles.View_4_96} />
                      </View>
                      <View style={styles.View_4_97}>
                        <View style={styles.View_4_98} />
                        <View style={styles.View_4_99} />
                        <View style={styles.View_4_100} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_4_101}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_102}
                    />
                    <View style={styles.View_4_103}>
                      <View style={styles.View_4_104}>
                        <View style={styles.View_4_105}>
                          <View style={styles.View_4_106} />
                          <View style={styles.View_4_107} />
                          <View style={styles.View_4_108} />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b090/cf2f/0107c9ce46d10470128ac656305c0ca0"
                          }}
                          style={styles.ImageBackground_4_109}
                        />
                      </View>
                      <View style={styles.View_4_110} />
                      <View style={styles.View_4_111} />
                      <View style={styles.View_4_112} />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f951/7778/aa23ade073938ad951aedcddf4f2eb21"
                    }}
                    style={styles.ImageBackground_4_113}
                  />
                  <View style={styles.View_4_117}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5057/067c/3760c272f8de861e62b4129d52e6bcfc"
                      }}
                      style={styles.ImageBackground_4_118}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c3/d6a9/738acc6a9e84fcdb4b22b0ab78dc107a"
                      }}
                      style={styles.ImageBackground_4_121}
                    />
                  </View>
                  <View style={styles.View_4_124}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_125}
                    />
                    <View style={styles.View_4_126}>
                      <View style={styles.View_4_127}>
                        <View style={styles.View_4_128} />
                        <View style={styles.View_4_129} />
                      </View>
                      <View style={styles.View_4_130} />
                      <View style={styles.View_4_131} />
                      <View style={styles.View_4_132} />
                      <View style={styles.View_4_133} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_4_134}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a47b/83d7/5f9517e188c1019840fa982e39c55f46"
                  }}
                  style={styles.ImageBackground_4_135}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2641/1798/0e1bc3c8d5f4b918ef8c1e086ef4f52e"
                  }}
                  style={styles.ImageBackground_4_136}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_4_262}>
            <Text style={styles.Text_4_262}>
              Fitur CV Fitur CV dibuat dengan proses yang Simple sehingga sangat
              mempermudah user dalam membuat cv.karena fitur cv ini dibuat
              secara otomatis. Sehingga mereka dapat membuat cv mereka sendiri
              tanpa harus membuat desain karena di nikerja fitur cv hanya dengan
              mengisi data diri, lalu bisa terbuat secara otomatis menjadi
              desain
            </Text>
          </View>
        </View>
        <View style={styles.View_4_137}>
          <View style={styles.View_4_138} />
          <View style={styles.View_4_269}>
            <Text style={styles.Text_4_269}>
              Fitur Profile Fitur profile adalah fitur yang dibuat untuk
              memudahkan user dalam membuat portofolio,tanpa harus membuat
              website yang sulit untuk memperlihatkan karya portofolio dari user
              itu sendiri Hanya dengan sekali klik portofolio dapat terlihat di
              profile user
            </Text>
          </View>
          <View style={styles.View_4_139}>
            <View style={styles.View_4_140}>
              <View style={styles.View_4_141}>
                <View style={styles.View_4_143}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d27a/7649/6e32129b300f9012d738f3e7299696bf"
                    }}
                    style={styles.ImageBackground_4_144}
                  />
                  <View style={styles.View_4_145}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1612/8995/0251aed3cd1a802478b824f5e58a1179"
                      }}
                      style={styles.ImageBackground_4_146}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a61/56a1/747d7ecaee5b5250a21801665f2dd864"
                      }}
                      style={styles.ImageBackground_4_147}
                    />
                    <View style={styles.View_4_148}>
                      <Text style={styles.Text_4_148}>Nikerja.com</Text>
                    </View>
                  </View>
                  <View style={styles.View_4_149}>
                    <View style={styles.View_4_150} />
                    <View style={styles.View_4_151}>
                      <View style={styles.View_4_152} />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b88/2299/d6a8998e4233fc515bdc66217d4fbf54"
                        }}
                        style={styles.ImageBackground_4_153}
                      />
                    </View>
                  </View>
                  <View style={styles.View_4_154}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_155}
                    />
                    <View style={styles.View_4_156}>
                      <View style={styles.View_4_157}>
                        <View style={styles.View_4_158} />
                        <View style={styles.View_4_159} />
                      </View>
                      <View style={styles.View_4_160}>
                        <View style={styles.View_4_161} />
                        <View style={styles.View_4_162} />
                        <View style={styles.View_4_163} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_4_164}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_165}
                    />
                    <View style={styles.View_4_166}>
                      <View style={styles.View_4_167}>
                        <View style={styles.View_4_168}>
                          <View style={styles.View_4_169} />
                          <View style={styles.View_4_170} />
                          <View style={styles.View_4_171} />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b090/cf2f/0107c9ce46d10470128ac656305c0ca0"
                          }}
                          style={styles.ImageBackground_4_172}
                        />
                      </View>
                      <View style={styles.View_4_173} />
                      <View style={styles.View_4_174} />
                      <View style={styles.View_4_175} />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f951/7778/aa23ade073938ad951aedcddf4f2eb21"
                    }}
                    style={styles.ImageBackground_4_176}
                  />
                  <View style={styles.View_4_180}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5057/067c/3760c272f8de861e62b4129d52e6bcfc"
                      }}
                      style={styles.ImageBackground_4_181}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c3/d6a9/738acc6a9e84fcdb4b22b0ab78dc107a"
                      }}
                      style={styles.ImageBackground_4_184}
                    />
                  </View>
                  <View style={styles.View_4_187}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_188}
                    />
                    <View style={styles.View_4_189}>
                      <View style={styles.View_4_190}>
                        <View style={styles.View_4_191} />
                        <View style={styles.View_4_192} />
                      </View>
                      <View style={styles.View_4_193} />
                      <View style={styles.View_4_194} />
                      <View style={styles.View_4_195} />
                      <View style={styles.View_4_196} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4_267}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a47b/83d7/5f9517e188c1019840fa982e39c55f46"
              }}
              style={styles.ImageBackground_4_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7b1/1396/e5a386d280e5c6e8d719b9f0cb4c1c08"
              }}
              style={styles.ImageBackground_4_266}
            />
          </View>
        </View>
        <View style={styles.View_4_197}>
          <View style={styles.View_4_198} />
          <View style={styles.View_4_199}>
            <View style={styles.View_4_200}>
              <View style={styles.View_4_201}>
                <View style={styles.View_4_203}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d27a/7649/6e32129b300f9012d738f3e7299696bf"
                    }}
                    style={styles.ImageBackground_4_204}
                  />
                  <View style={styles.View_4_205}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1612/8995/0251aed3cd1a802478b824f5e58a1179"
                      }}
                      style={styles.ImageBackground_4_206}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a61/56a1/747d7ecaee5b5250a21801665f2dd864"
                      }}
                      style={styles.ImageBackground_4_207}
                    />
                    <View style={styles.View_4_208}>
                      <Text style={styles.Text_4_208}>Nikerja.com</Text>
                    </View>
                  </View>
                  <View style={styles.View_4_209}>
                    <View style={styles.View_4_210} />
                    <View style={styles.View_4_211}>
                      <View style={styles.View_4_212} />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b88/2299/d6a8998e4233fc515bdc66217d4fbf54"
                        }}
                        style={styles.ImageBackground_4_213}
                      />
                    </View>
                  </View>
                  <View style={styles.View_4_214}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_215}
                    />
                    <View style={styles.View_4_216}>
                      <View style={styles.View_4_217}>
                        <View style={styles.View_4_218} />
                        <View style={styles.View_4_219} />
                      </View>
                      <View style={styles.View_4_220}>
                        <View style={styles.View_4_221} />
                        <View style={styles.View_4_222} />
                        <View style={styles.View_4_223} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_4_224}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_225}
                    />
                    <View style={styles.View_4_226}>
                      <View style={styles.View_4_227}>
                        <View style={styles.View_4_228}>
                          <View style={styles.View_4_229} />
                          <View style={styles.View_4_230} />
                          <View style={styles.View_4_231} />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b090/cf2f/0107c9ce46d10470128ac656305c0ca0"
                          }}
                          style={styles.ImageBackground_4_232}
                        />
                      </View>
                      <View style={styles.View_4_233} />
                      <View style={styles.View_4_234} />
                      <View style={styles.View_4_235} />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f951/7778/aa23ade073938ad951aedcddf4f2eb21"
                    }}
                    style={styles.ImageBackground_4_236}
                  />
                  <View style={styles.View_4_240}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5057/067c/3760c272f8de861e62b4129d52e6bcfc"
                      }}
                      style={styles.ImageBackground_4_241}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c3/d6a9/738acc6a9e84fcdb4b22b0ab78dc107a"
                      }}
                      style={styles.ImageBackground_4_244}
                    />
                  </View>
                  <View style={styles.View_4_247}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_4_248}
                    />
                    <View style={styles.View_4_249}>
                      <View style={styles.View_4_250}>
                        <View style={styles.View_4_251} />
                        <View style={styles.View_4_252} />
                      </View>
                      <View style={styles.View_4_253} />
                      <View style={styles.View_4_254} />
                      <View style={styles.View_4_255} />
                      <View style={styles.View_4_256} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_4_271}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9133/882d/8e72ebbf8db29abb8d9fbe80c50cd2a9"
                  }}
                  style={styles.ImageBackground_4_202}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/504d/e103/7077184fa0f6d43a7eaddba245330e08"
                  }}
                  style={styles.ImageBackground_127_18}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_4_272}>
            <Text style={styles.Text_4_272}>
              Fitur Status Fitur status adalah sebuah fitur yang dibuat dengan
              sistem, melamar pekerjaan secara virtual. Yang dimaksudkan dari
              penjelasan tersebut adalah user tidak perlu datang ke perusahaan
              untuk mengirim lamarannya melainkan hanya dengan memperlihatkan cv
              dan portofolio yang dibuat secara otomatis pada profile,lalu user
              dapat melamar pekerjaan sesuai keahliaan nya tanpa harus datang ke
              perusahaan
            </Text>
          </View>
        </View>
        <View style={styles.View_64_132}>
          <View style={styles.View_4_5}>
            <Text style={styles.Text_4_5}>Muhammad Rizqi</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e9f/ba27/beb93ff1e3e903f9653b2d4fe4b3cc63"
            }}
            style={styles.ImageBackground_4_6}
          />
          <View style={styles.View_4_7}>
            <View style={styles.View_4_8}>
              <Text style={styles.Text_4_8}>Home</Text>
            </View>
            <View style={styles.View_4_9}>
              <Text style={styles.Text_4_9}>Project</Text>
            </View>
            <View style={styles.View_4_10}>
              <Text style={styles.Text_4_10}>About</Text>
            </View>
            <View style={styles.View_4_11}>
              <Text style={styles.Text_4_11}>Kontak</Text>
            </View>
          </View>
          <View style={styles.View_64_131}>
            <View style={styles.View_4_257}>
              <Text style={styles.Text_4_257}>Nikerja Project</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efbd/680c/156e457ee9beaa0fd9d39f4014526ef2"
              }}
              style={styles.ImageBackground_4_259}
            />
            <View style={styles.View_4_260}>
              <Text style={styles.Text_4_260}>
                Nikerja adalah suatu aplikasi yang dapat menghubungkan pencari
                lowongan dengan perusahaan yang membutuhkan kandidat  Nikerja
                memiliki beberapa fitur
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_4_258}>
        <Text style={styles.Text_4_258}>Lowongan</Text>
      </View>
      <View style={styles.View_121_1212}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e188/8597/3f233d4aa446e24357afb394263dd712"
          }}
          style={styles.ImageBackground_121_1207}
        />
        <View style={styles.View_121_1210}>
          <Text style={styles.Text_121_1210}>Kembali</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_4_12: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("879.6448087431694%"),
    minHeight: hp("879.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.459987397605545%"),
    top: hp("2.185792349726776%")
  },
  View_4_13: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("170.4918032786885%"),
    minHeight: hp("170.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("148.224043715847%")
  },
  View_4_14: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("170.4918032786885%"),
    minHeight: hp("170.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 236, 255, 1)"
  },
  View_4_15: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("121.0382513661202%"),
    minHeight: hp("121.0382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("11.202185792349724%")
  },
  View_4_16: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("121.0382513661202%"),
    minHeight: hp("121.0382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_17: {
    width: wp("90.73724007561437%"),
    height: hp("5.629872494056577%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_18: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("5.629872494056577%"),
    minHeight: hp("5.629872494056577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_19: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("5.261137185852385%"),
    minHeight: hp("5.261137185852385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_20: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.364134126890356%"),
    top: hp("1.0651135053791165%")
  },
  ImageBackground_4_21: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_22: {
    width: wp("0.8309665384274575%"),
    height: hp("1.9767847217497279%"),
    top: hp("0.760804890283481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.72562593533397%")
  },
  View_4_23: {
    width: wp("6.64299121801404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.87170171707625%"),
    top: hp("0.596310141308038%")
  },
  Text_4_23: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 12.272727966308594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_4_24: {
    width: wp("1.8117249650480467%"),
    minWidth: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.8500191989603%"),
    top: hp("1.9780727032103869%")
  },
  View_4_25: {
    width: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_4_26: {
    width: wp("0.830378108754726%"),
    height: hp("1.6737454575919062%"),
    top: hp("1.0651135053791165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5284021542218085%")
  },
  View_4_27: {
    width: wp("0.07549591160601765%"),
    height: hp("1.6737454575919062%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37742571479205367%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_4_28: {
    width: wp("0.8303802120062114%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.7607882140112849%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_29: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.30205748857908%"),
    top: hp("1.0651135053791165%")
  },
  ImageBackground_4_30: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_31: {
    width: wp("0.905854430075479%"),
    height: hp("1.825815602078464%"),
    top: hp("0.9129425215590743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568658435727798%")
  },
  View_4_32: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0.4563962175546692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_33: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_34: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.1520375736424171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07550360349716811%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_35: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22644927536231307%")
  },
  View_4_36: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_37: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694283740768016%"),
    top: hp("0.304241910006823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1509764394297406%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_38: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.15205424991464156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593258669%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_39: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.90507221762759%"),
    top: hp("1.0651135053791165%")
  },
  ImageBackground_4_40: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_41: {
    width: wp("0.8303704168635792%"),
    height: hp("2.3138934797276565%"),
    top: hp("0.577115752006506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568350760081984%")
  },
  View_4_42: {
    width: wp("0.8303704168635792%"),
    height: hp("2.130362375186441%"),
    top: hp("0.18352237555498618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_43: {
    width: wp("0.8303704168635792%"),
    minWidth: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    minHeight: hp("1.5215865901259125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6087839929132315%")
  },
  View_4_44: {
    width: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_45: {
    width: wp("0.6794016693249842%"),
    height: hp("1.217269506610808%"),
    top: hp("0.15215430754781778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_46: {
    width: wp("0.22646046766486647%"),
    height: hp("0.30425477549026575%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3019528788594812%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_4_47: {
    width: wp("0.07549591160601765%"),
    height: hp("1.369427722659919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920679%")
  },
  View_4_48: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08906796981725051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10399436830498132%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_49: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08906796981725051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.406039549858221%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_50: {
    width: wp("0.10676066230961416%"),
    height: hp("0.2150207757949829%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3618265595463157%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_4_51: {
    width: wp("3.9253999244963964%"),
    height: hp("1.8259070610088075%"),
    top: hp("1.9780727032103869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.132338679505355%")
  },
  View_4_55: {
    width: wp("4.000888624954464%"),
    minWidth: wp("4.000888624954464%"),
    height: hp("3.6518104740830717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.963584741257087%"),
    top: hp("1.0651135053791165%")
  },
  ImageBackground_4_56: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_59: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.038181932301514%")
  },
  View_4_62: {
    width: wp("2.944053068203076%"),
    minWidth: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568381527646503%"),
    top: hp("1.0651135053791165%")
  },
  ImageBackground_4_63: {
    width: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_64: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259044553412767%"),
    top: hp("0.9129425215590743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9058894041430392%")
  },
  View_4_65: {
    width: wp("1.1323281031550292%"),
    minWidth: wp("1.1323281031550292%"),
    height: hp("1.8259041947745234%"),
    minHeight: hp("1.8259041947745234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_66: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259041947745234%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_67: {
    width: wp("0.9813516637252875%"),
    height: hp("1.5215868506926655%"),
    top: hp("0.15215430754781778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_68: {
    width: wp("0.07548821971487082%"),
    height: hp("1.8259043250579001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920572%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_69: {
    width: wp("0.15097678496391426%"),
    height: hp("0.1520428826900128%"),
    top: hp("0.304241910006823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_70: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.6085171725580665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_71: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.9129591978312988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_72: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("132.5136695403219%"),
    minHeight: hp("132.5136695403219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601105%")
  },
  ImageBackground_4_73: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("132.5136695403219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_74: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("132.5136695403219%"),
    minHeight: hp("132.5136695403219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_4_261: {
    width: wp("51.60680529300568%"),
    minWidth: wp("51.60680529300568%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("151.09289617486337%")
  },
  Text_4_261: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_4_75: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("201.50273224043715%"),
    minHeight: hp("201.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("325.54644808743166%")
  },
  View_4_76: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("201.50273224043715%"),
    minHeight: hp("201.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 236, 255, 1)"
  },
  View_4_77: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("121.0382513661202%"),
    minHeight: hp("121.0382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("16.39344262295083%")
  },
  View_4_78: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("121.0382513661202%"),
    minHeight: hp("121.0382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_79: {
    width: wp("90.73724007561437%"),
    height: hp("5.629872494056577%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_80: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("5.629872494056577%"),
    minHeight: hp("5.629872494056577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_81: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("5.261137185852385%"),
    minHeight: hp("5.261137185852385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_82: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.364134126890356%"),
    top: hp("1.065113505379088%")
  },
  ImageBackground_4_83: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_84: {
    width: wp("0.8309665384274575%"),
    height: hp("1.9767847217497279%"),
    top: hp("0.7608048902834526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.72562593533397%")
  },
  View_4_85: {
    width: wp("6.64299121801404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.87170171707625%"),
    top: hp("0.5963101413080949%")
  },
  Text_4_85: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 12.272727966308594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_4_86: {
    width: wp("1.8117249650480467%"),
    minWidth: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.8500191989603%"),
    top: hp("1.9780727032103869%")
  },
  View_4_87: {
    width: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_4_88: {
    width: wp("0.830378108754726%"),
    height: hp("1.6737454575919062%"),
    top: hp("1.065113505379088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5284021542218085%")
  },
  View_4_89: {
    width: wp("0.07549591160601765%"),
    height: hp("1.6737454575919062%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37742571479205367%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_4_90: {
    width: wp("0.8303802120062114%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.7608048902835094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_91: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.30205748857908%"),
    top: hp("1.065113505379088%")
  },
  ImageBackground_4_92: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_93: {
    width: wp("0.905854430075479%"),
    height: hp("1.825815602078464%"),
    top: hp("0.9129591978312988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568658435727798%")
  },
  View_4_94: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0.45639621755464077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_95: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_96: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.15205424991461314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07550360349716811%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_97: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22644927536231307%")
  },
  View_4_98: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_99: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694283740768016%"),
    top: hp("0.30424191000679457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1509764394297406%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_100: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.15205424991461314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593258669%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_101: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.90507221762759%"),
    top: hp("1.065113505379088%")
  },
  ImageBackground_4_102: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_103: {
    width: wp("0.8303704168635792%"),
    height: hp("2.3138934797276565%"),
    top: hp("0.5771324282787305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568350760081984%")
  },
  View_4_104: {
    width: wp("0.8303704168635792%"),
    height: hp("2.130362375186441%"),
    top: hp("0.1835390518271538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_105: {
    width: wp("0.8303704168635792%"),
    minWidth: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    minHeight: hp("1.5215865901259125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6087839929132315%")
  },
  View_4_106: {
    width: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_107: {
    width: wp("0.6794016693249842%"),
    height: hp("1.217269506610808%"),
    top: hp("0.1521543075478462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_108: {
    width: wp("0.22646046766486647%"),
    height: hp("0.30425477549026575%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3019528788594812%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_4_109: {
    width: wp("0.07549591160601765%"),
    height: hp("1.369427722659919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920679%")
  },
  View_4_110: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08908464608947497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10399436830498132%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_111: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08908464608947497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.406039549858221%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_112: {
    width: wp("0.10676066230961416%"),
    height: hp("0.2150207757949829%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3618265595463157%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_4_113: {
    width: wp("3.9253999244963964%"),
    height: hp("1.8259070610088075%"),
    top: hp("1.9780727032103869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.132338679505355%")
  },
  View_4_117: {
    width: wp("4.000888624954464%"),
    minWidth: wp("4.000888624954464%"),
    height: hp("3.6518104740830717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.963584741257087%"),
    top: hp("1.065113505379088%")
  },
  ImageBackground_4_118: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_121: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.038181932301514%")
  },
  View_4_124: {
    width: wp("2.944053068203076%"),
    minWidth: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568381527646503%"),
    top: hp("1.065113505379088%")
  },
  ImageBackground_4_125: {
    width: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_126: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259044553412767%"),
    top: hp("0.9129591978312988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9058894041430392%")
  },
  View_4_127: {
    width: wp("1.1323281031550292%"),
    minWidth: wp("1.1323281031550292%"),
    height: hp("1.8259041947745234%"),
    minHeight: hp("1.8259041947745234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_128: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259041947745234%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_129: {
    width: wp("0.9813516637252875%"),
    height: hp("1.5215868506926655%"),
    top: hp("0.1521543075478462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_130: {
    width: wp("0.07548821971487082%"),
    height: hp("1.8259043250579001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920572%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_131: {
    width: wp("0.15097678496391426%"),
    height: hp("0.1520428826900128%"),
    top: hp("0.30424191000679457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_132: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.608517172558038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_133: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.9129591978312988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_134: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("132.5136612021858%"),
    minHeight: hp("132.5136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601105%")
  },
  ImageBackground_4_135: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("132.5136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_136: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("132.5136612021858%"),
    minHeight: hp("132.5136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_262: {
    width: wp("70.4473850031506%"),
    minWidth: wp("70.4473850031506%"),
    minHeight: hp("23.770491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.06805293005671%"),
    top: hp("162.2950819672131%")
  },
  Text_4_262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_4_137: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("170.4918032786885%"),
    minHeight: hp("170.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("532.6502732240438%")
  },
  View_4_138: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("170.4918032786885%"),
    minHeight: hp("170.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 236, 255, 1)"
  },
  View_4_269: {
    width: wp("68.49401386263389%"),
    minWidth: wp("68.49401386263389%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("144.5355191256831%")
  },
  Text_4_269: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_4_139: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("121.0382513661202%"),
    minHeight: hp("121.0382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("3.5519125683059656%")
  },
  View_4_140: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("121.0382513661202%"),
    minHeight: hp("121.0382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_141: {
    width: wp("90.73724007561437%"),
    height: hp("5.629872494056577%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_143: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("5.629872494056577%"),
    minHeight: hp("5.629872494056577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_144: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("5.261137185852385%"),
    minHeight: hp("5.261137185852385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_145: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.364134126890356%"),
    top: hp("1.065113505379145%")
  },
  ImageBackground_4_146: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_147: {
    width: wp("0.8309665384274575%"),
    height: hp("1.9767847217497279%"),
    top: hp("0.7608048902834526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.72562593533397%")
  },
  View_4_148: {
    width: wp("6.64299121801404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.87170171707625%"),
    top: hp("0.5963101413079812%")
  },
  Text_4_148: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 12.272727966308594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_4_149: {
    width: wp("1.8117249650480467%"),
    minWidth: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.8500191989603%"),
    top: hp("1.9780727032103869%")
  },
  View_4_150: {
    width: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_4_151: {
    width: wp("0.830378108754726%"),
    height: hp("1.6737454575919062%"),
    top: hp("1.065113505379145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5284021542218085%")
  },
  View_4_152: {
    width: wp("0.07549591160601765%"),
    height: hp("1.6737454575919062%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37742571479205367%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_4_153: {
    width: wp("0.8303802120062114%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.7608048902834526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_154: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.30205748857908%"),
    top: hp("1.065113505379145%")
  },
  ImageBackground_4_155: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_156: {
    width: wp("0.905854430075479%"),
    height: hp("1.825815602078464%"),
    top: hp("0.9129591978312419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568658435727798%")
  },
  View_4_157: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0.4563962175546976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_158: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_159: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.15205424991461314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07550360349716811%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_160: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22644927536231307%")
  },
  View_4_161: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_162: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694283740768016%"),
    top: hp("0.30424191000679457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1509764394297406%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_163: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.15205424991461314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593258669%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_164: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.90507221762759%"),
    top: hp("1.065113505379145%")
  },
  ImageBackground_4_165: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_166: {
    width: wp("0.8303704168635792%"),
    height: hp("2.3138934797276565%"),
    top: hp("0.5771324282786736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568350760081984%")
  },
  View_4_167: {
    width: wp("0.8303704168635792%"),
    height: hp("2.130362375186441%"),
    top: hp("0.18353905182721064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_168: {
    width: wp("0.8303704168635792%"),
    minWidth: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    minHeight: hp("1.5215865901259125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6087839929132315%")
  },
  View_4_169: {
    width: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_170: {
    width: wp("0.6794016693249842%"),
    height: hp("1.217269506610808%"),
    top: hp("0.15215430754778936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_171: {
    width: wp("0.22646046766486647%"),
    height: hp("0.30425477549026575%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3019528788594812%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_4_172: {
    width: wp("0.07549591160601765%"),
    height: hp("1.369427722659919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920679%")
  },
  View_4_173: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08908464608953182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10399436830498132%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_174: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08908464608953182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.406039549858221%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_175: {
    width: wp("0.10676066230961416%"),
    height: hp("0.2150207757949829%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3618265595463157%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_4_176: {
    width: wp("3.9253999244963964%"),
    height: hp("1.8259070610088075%"),
    top: hp("1.9780727032103869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.132338679505355%")
  },
  View_4_180: {
    width: wp("4.000888624954464%"),
    minWidth: wp("4.000888624954464%"),
    height: hp("3.6518104740830717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.963584741257087%"),
    top: hp("1.065113505379145%")
  },
  ImageBackground_4_181: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_184: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.038181932301514%")
  },
  View_4_187: {
    width: wp("2.944053068203076%"),
    minWidth: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568381527646503%"),
    top: hp("1.065113505379145%")
  },
  ImageBackground_4_188: {
    width: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_189: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259044553412767%"),
    top: hp("0.9129591978312419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9058894041430392%")
  },
  View_4_190: {
    width: wp("1.1323281031550292%"),
    minWidth: wp("1.1323281031550292%"),
    height: hp("1.8259041947745234%"),
    minHeight: hp("1.8259041947745234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_191: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259041947745234%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_192: {
    width: wp("0.9813516637252875%"),
    height: hp("1.5215868506926655%"),
    top: hp("0.15215430754778936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_193: {
    width: wp("0.07548821971487082%"),
    height: hp("1.8259043250579001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920572%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_194: {
    width: wp("0.15097678496391426%"),
    height: hp("0.1520428826900128%"),
    top: hp("0.30424191000679457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_195: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.6085171725580949%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_196: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.9129591978313556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_267: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("132.5136612021858%"),
    minHeight: hp("132.5136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("9.153005464480884%")
  },
  ImageBackground_4_142: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("132.5136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_266: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("132.5136612021858%"),
    minHeight: hp("132.5136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_4_197: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("170.4918032786885%"),
    minHeight: hp("170.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("709.1530054644809%")
  },
  View_4_198: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("170.4918032786885%"),
    minHeight: hp("170.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 236, 255, 1)"
  },
  View_4_199: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("121.0382513661202%"),
    minHeight: hp("121.0382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("4.781420765027406%")
  },
  View_4_200: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("121.0382513661202%"),
    minHeight: hp("121.0382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_201: {
    width: wp("90.73724007561437%"),
    height: hp("5.629872494056577%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_203: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("5.629872494056577%"),
    minHeight: hp("5.629872494056577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_204: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("5.261137185852385%"),
    minHeight: hp("5.261137185852385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_205: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.364134126890356%"),
    top: hp("1.0651468579234233%")
  },
  ImageBackground_4_206: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_207: {
    width: wp("0.8309665384274575%"),
    height: hp("1.9767847217497279%"),
    top: hp("0.7607715377390605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.72562593533397%")
  },
  View_4_208: {
    width: wp("6.64299121801404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.87170171707625%"),
    top: hp("0.5962767887637028%")
  },
  Text_4_208: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 12.272727966308594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_4_209: {
    width: wp("1.8117249650480467%"),
    minWidth: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.8500191989603%"),
    top: hp("1.9780727032102732%")
  },
  View_4_210: {
    width: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_4_211: {
    width: wp("0.830378108754726%"),
    height: hp("1.6737454575919062%"),
    top: hp("1.0650801528347529%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5284021542218085%")
  },
  View_4_212: {
    width: wp("0.07549591160601765%"),
    height: hp("1.6737454575919062%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37742571479205367%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_4_213: {
    width: wp("0.8303802120062114%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.7607715377390605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_214: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.30205748857908%"),
    top: hp("1.0651468579234233%")
  },
  ImageBackground_4_215: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_216: {
    width: wp("0.905854430075479%"),
    height: hp("1.825815602078464%"),
    top: hp("0.9129258452868498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568658435727798%")
  },
  View_4_217: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0.4563962175546976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_218: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_219: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.15202089737022106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07550360349716811%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_220: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22644927536231307%")
  },
  View_4_221: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_222: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694283740768016%"),
    top: hp("0.30424191000690826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1509764394297406%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_223: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.15202089737033475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593258669%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_224: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.90507221762759%"),
    top: hp("1.0651468579234233%")
  },
  ImageBackground_4_225: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_226: {
    width: wp("0.8303704168635792%"),
    height: hp("2.3138934797276565%"),
    top: hp("0.5771324282786736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568350760081984%")
  },
  View_4_227: {
    width: wp("0.8303704168635792%"),
    height: hp("2.130362375186441%"),
    top: hp("0.18350569928281857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_228: {
    width: wp("0.8303704168635792%"),
    minWidth: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    minHeight: hp("1.5215865901259125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6087506403688394%")
  },
  View_4_229: {
    width: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_230: {
    width: wp("0.6794016693249842%"),
    height: hp("1.217269506610808%"),
    top: hp("0.15215430754790304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_231: {
    width: wp("0.22646046766486647%"),
    height: hp("0.30425477549026575%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3019528788594812%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_4_232: {
    width: wp("0.07549591160601765%"),
    height: hp("1.369427722659919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920679%")
  },
  View_4_233: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08905129354513974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10399436830498132%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_234: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08905129354513974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.406039549858221%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_235: {
    width: wp("0.10676066230961416%"),
    height: hp("0.2150207757949829%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3618265595463157%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_4_236: {
    width: wp("3.9253999244963964%"),
    height: hp("1.8259070610088075%"),
    top: hp("1.9780727032102732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.132338679505355%")
  },
  View_4_240: {
    width: wp("4.000888624954464%"),
    minWidth: wp("4.000888624954464%"),
    height: hp("3.6518104740830717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.963584741257087%"),
    top: hp("1.0651468579234233%")
  },
  ImageBackground_4_241: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_244: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.038181932301514%")
  },
  View_4_247: {
    width: wp("2.944053068203076%"),
    minWidth: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568381527646503%"),
    top: hp("1.0651468579234233%")
  },
  ImageBackground_4_248: {
    width: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_249: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259044553412767%"),
    top: hp("0.9129258452868498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9058894041430392%")
  },
  View_4_250: {
    width: wp("1.1323281031550292%"),
    minWidth: wp("1.1323281031550292%"),
    height: hp("1.8259041947745234%"),
    minHeight: hp("1.8259041947745234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_251: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259041947745234%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_252: {
    width: wp("0.9813516637252875%"),
    height: hp("1.5215868506926655%"),
    top: hp("0.15215430754790304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_253: {
    width: wp("0.07548821971487082%"),
    height: hp("1.8259043250579001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920572%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_254: {
    width: wp("0.15097678496391426%"),
    height: hp("0.1520428826900128%"),
    top: hp("0.30424191000690826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_255: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.6084838200137028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_256: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.9129258452869635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_4_271: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("115.84699453551912%"),
    minHeight: hp("115.84699453551912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830600992%")
  },
  ImageBackground_4_202: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("115.84699453551912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_127_18: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("115.84699453551912%"),
    minHeight: hp("115.84699453551912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_272: {
    width: wp("64.7763074984247%"),
    minWidth: wp("64.7763074984247%"),
    minHeight: hp("31.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.942028985507246%"),
    top: hp("129.2349726775957%")
  },
  Text_4_272: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_64_132: {
    width: wp("96.59735349716446%"),
    minWidth: wp("96.59735349716446%"),
    height: hp("138.66120218579235%"),
    minHeight: hp("138.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.413358538122242%"),
    top: hp("0%")
  },
  View_4_5: {
    width: wp("13.547574039067422%"),
    minWidth: wp("13.547574039067422%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.128544423440454%"),
    top: hp("3.5519125683060104%")
  },
  Text_4_5: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_6: {
    width: wp("6.490233144297417%"),
    minWidth: wp("6.490233144297417%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_7: {
    width: wp("27.410207939508506%"),
    minWidth: wp("27.410207939508506%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.93257718966604%"),
    top: hp("2.0491803278688523%")
  },
  View_4_8: {
    width: wp("4.59987397605545%"),
    minWidth: wp("4.59987397605545%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_4_8: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9: {
    width: wp("5.356017643352237%"),
    minWidth: wp("5.356017643352237%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.750472589792054%"),
    top: hp("0%")
  },
  Text_4_9: {
    color: "rgba(41, 140, 232, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_10: {
    width: wp("4.662885948330183%"),
    minWidth: wp("4.662885948330183%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.185885318210453%"),
    top: hp("0%")
  },
  Text_4_10: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_11: {
    width: wp("5.482041587901701%"),
    minWidth: wp("5.482041587901701%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.928166351606805%"),
    top: hp("0%")
  },
  Text_4_11: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_64_131: {
    width: wp("94.3289224952741%"),
    minWidth: wp("94.3289224952741%"),
    height: hp("111.20218579234972%"),
    minHeight: hp("111.20218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2684310018903586%"),
    top: hp("27.459016393442624%")
  },
  View_4_257: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44108380592312635%"),
    top: hp("0%")
  },
  Text_4_257: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_4_259: {
    width: wp("67.73787019533711%"),
    minWidth: wp("67.73787019533711%"),
    height: hp("99.86338797814209%"),
    minHeight: hp("99.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.338797814207652%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_4_260: {
    width: wp("25.456836798991812%"),
    minWidth: wp("25.456836798991812%"),
    minHeight: hp("42.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8720856962823%"),
    top: hp("24.59016393442623%")
  },
  Text_4_260: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_4_258: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.662885948330183%"),
    top: hp("154.5081967213115%")
  },
  Text_4_258: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_121_1212: {
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
  ImageBackground_121_1207: {
    flexGrow: 1,
    width: wp("2.520478890989288%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_121_1210: {
    flexGrow: 1,
    width: wp("6.427221172022684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4026465028355384%"),
    top: hp("0.5464480874316955%")
  },
  Text_121_1210: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 6679 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
