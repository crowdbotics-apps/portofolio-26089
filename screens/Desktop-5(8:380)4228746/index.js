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
      <View style={styles.View_10_408}>
        <View style={styles.View_10_409}>
          <View style={styles.View_10_410} />
          <View style={styles.View_10_411}>
            <View style={styles.View_10_412}>
              <View style={styles.View_10_413}>
                <View style={styles.View_10_414}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d27a/7649/6e32129b300f9012d738f3e7299696bf"
                    }}
                    style={styles.ImageBackground_10_415}
                  />
                  <View style={styles.View_10_416}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1612/8995/0251aed3cd1a802478b824f5e58a1179"
                      }}
                      style={styles.ImageBackground_10_417}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a61/56a1/747d7ecaee5b5250a21801665f2dd864"
                      }}
                      style={styles.ImageBackground_10_418}
                    />
                    <View style={styles.View_10_419}>
                      <Text style={styles.Text_10_419}>Nikerja.com</Text>
                    </View>
                  </View>
                  <View style={styles.View_10_420}>
                    <View style={styles.View_10_421} />
                    <View style={styles.View_10_422}>
                      <View style={styles.View_10_423} />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b88/2299/d6a8998e4233fc515bdc66217d4fbf54"
                        }}
                        style={styles.ImageBackground_10_424}
                      />
                    </View>
                  </View>
                  <View style={styles.View_10_425}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_10_426}
                    />
                    <View style={styles.View_10_427}>
                      <View style={styles.View_10_428}>
                        <View style={styles.View_10_429} />
                        <View style={styles.View_10_430} />
                      </View>
                      <View style={styles.View_10_431}>
                        <View style={styles.View_10_432} />
                        <View style={styles.View_10_433} />
                        <View style={styles.View_10_434} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_10_435}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_10_436}
                    />
                    <View style={styles.View_10_437}>
                      <View style={styles.View_10_438}>
                        <View style={styles.View_10_439}>
                          <View style={styles.View_10_440} />
                          <View style={styles.View_10_441} />
                          <View style={styles.View_10_442} />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b090/cf2f/0107c9ce46d10470128ac656305c0ca0"
                          }}
                          style={styles.ImageBackground_10_443}
                        />
                      </View>
                      <View style={styles.View_10_444} />
                      <View style={styles.View_10_445} />
                      <View style={styles.View_10_446} />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f951/7778/aa23ade073938ad951aedcddf4f2eb21"
                    }}
                    style={styles.ImageBackground_10_447}
                  />
                  <View style={styles.View_10_451}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70c7/2486/6684f7765eec3bdb4ffd2978a1f1fc0f"
                      }}
                      style={styles.ImageBackground_10_452}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c3/d6a9/738acc6a9e84fcdb4b22b0ab78dc107a"
                      }}
                      style={styles.ImageBackground_10_455}
                    />
                  </View>
                  <View style={styles.View_10_458}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_10_459}
                    />
                    <View style={styles.View_10_460}>
                      <View style={styles.View_10_461}>
                        <View style={styles.View_10_462} />
                        <View style={styles.View_10_463} />
                      </View>
                      <View style={styles.View_10_464} />
                      <View style={styles.View_10_465} />
                      <View style={styles.View_10_466} />
                      <View style={styles.View_10_467} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_10_468}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a47b/83d7/5f9517e188c1019840fa982e39c55f46"
                  }}
                  style={styles.ImageBackground_10_469}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6fe/d12a/3aaa913158400b105633223873dd2cc8"
                  }}
                  style={styles.ImageBackground_121_87}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_10_471}>
            <Text style={styles.Text_10_471}>
              Landing page perusahaan untuk nikerja Landing page nikerja
              memiliki fitur untuk memperlihatkan apa saja yang bisa dilakukan
              di nikerja bukan hanya dapat memperlihatkan di landing page
              nikerja kamu dapat mencari kandidat dengan mencari nya di halaman
              search
            </Text>
          </View>
        </View>
        <View style={styles.View_10_472}>
          <View style={styles.View_10_473} />
          <View style={styles.View_10_474}>
            <View style={styles.View_10_475}>
              <View style={styles.View_10_476}>
                <View style={styles.View_10_477}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d23e/5d39/7e7334fddb71eb0a81eb34f39e058017"
                    }}
                    style={styles.ImageBackground_121_83}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d27a/7649/6e32129b300f9012d738f3e7299696bf"
                    }}
                    style={styles.ImageBackground_10_478}
                  />
                  <View style={styles.View_10_480}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1612/8995/0251aed3cd1a802478b824f5e58a1179"
                      }}
                      style={styles.ImageBackground_10_481}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a61/56a1/747d7ecaee5b5250a21801665f2dd864"
                      }}
                      style={styles.ImageBackground_10_482}
                    />
                    <View style={styles.View_10_483}>
                      <Text style={styles.Text_10_483}>Nikerja.com</Text>
                    </View>
                  </View>
                  <View style={styles.View_10_484}>
                    <View style={styles.View_10_485} />
                    <View style={styles.View_10_486}>
                      <View style={styles.View_10_487} />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b88/2299/d6a8998e4233fc515bdc66217d4fbf54"
                        }}
                        style={styles.ImageBackground_10_488}
                      />
                    </View>
                  </View>
                  <View style={styles.View_10_489}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_10_490}
                    />
                    <View style={styles.View_10_491}>
                      <View style={styles.View_10_492}>
                        <View style={styles.View_10_493} />
                        <View style={styles.View_10_494} />
                      </View>
                      <View style={styles.View_10_495}>
                        <View style={styles.View_10_496} />
                        <View style={styles.View_10_497} />
                        <View style={styles.View_10_498} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_10_499}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_10_500}
                    />
                    <View style={styles.View_10_501}>
                      <View style={styles.View_10_502}>
                        <View style={styles.View_10_503}>
                          <View style={styles.View_10_504} />
                          <View style={styles.View_10_505} />
                          <View style={styles.View_10_506} />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b090/cf2f/0107c9ce46d10470128ac656305c0ca0"
                          }}
                          style={styles.ImageBackground_10_507}
                        />
                      </View>
                      <View style={styles.View_10_508} />
                      <View style={styles.View_10_509} />
                      <View style={styles.View_10_510} />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f951/7778/aa23ade073938ad951aedcddf4f2eb21"
                    }}
                    style={styles.ImageBackground_10_511}
                  />
                  <View style={styles.View_10_515}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70c7/2486/6684f7765eec3bdb4ffd2978a1f1fc0f"
                      }}
                      style={styles.ImageBackground_10_516}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c3/d6a9/738acc6a9e84fcdb4b22b0ab78dc107a"
                      }}
                      style={styles.ImageBackground_10_519}
                    />
                  </View>
                  <View style={styles.View_10_522}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                      }}
                      style={styles.ImageBackground_10_523}
                    />
                    <View style={styles.View_10_524}>
                      <View style={styles.View_10_525}>
                        <View style={styles.View_10_526} />
                        <View style={styles.View_10_527} />
                      </View>
                      <View style={styles.View_10_528} />
                      <View style={styles.View_10_529} />
                      <View style={styles.View_10_530} />
                      <View style={styles.View_10_531} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_10_532}>
            <Text style={styles.Text_10_532}>
              Talent Search Nikerja Talent Search nikerja memiliki fungsi
              mencarikan kandidat sesuai dengan keahlian yang dicari oleh
              pencari kandidat
            </Text>
          </View>
        </View>
        <View style={styles.View_66_9}>
          <View style={styles.View_10_533}>
            <View style={styles.View_10_534} />
            <View style={styles.View_10_535}>
              <View style={styles.View_10_536}>
                <View style={styles.View_10_537}>
                  <View style={styles.View_10_538}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d27a/7649/6e32129b300f9012d738f3e7299696bf"
                      }}
                      style={styles.ImageBackground_10_539}
                    />
                    <View style={styles.View_10_540}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1612/8995/0251aed3cd1a802478b824f5e58a1179"
                        }}
                        style={styles.ImageBackground_10_541}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a61/56a1/747d7ecaee5b5250a21801665f2dd864"
                        }}
                        style={styles.ImageBackground_10_542}
                      />
                      <View style={styles.View_10_543}>
                        <Text style={styles.Text_10_543}>Nikerja.com</Text>
                      </View>
                    </View>
                    <View style={styles.View_10_544}>
                      <View style={styles.View_10_545} />
                      <View style={styles.View_10_546}>
                        <View style={styles.View_10_547} />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b88/2299/d6a8998e4233fc515bdc66217d4fbf54"
                          }}
                          style={styles.ImageBackground_10_548}
                        />
                      </View>
                    </View>
                    <View style={styles.View_10_549}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                        }}
                        style={styles.ImageBackground_10_550}
                      />
                      <View style={styles.View_10_551}>
                        <View style={styles.View_10_552}>
                          <View style={styles.View_10_553} />
                          <View style={styles.View_10_554} />
                        </View>
                        <View style={styles.View_10_555}>
                          <View style={styles.View_10_556} />
                          <View style={styles.View_10_557} />
                          <View style={styles.View_10_558} />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_10_559}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                        }}
                        style={styles.ImageBackground_10_560}
                      />
                      <View style={styles.View_10_561}>
                        <View style={styles.View_10_562}>
                          <View style={styles.View_10_563}>
                            <View style={styles.View_10_564} />
                            <View style={styles.View_10_565} />
                            <View style={styles.View_10_566} />
                          </View>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b090/cf2f/0107c9ce46d10470128ac656305c0ca0"
                            }}
                            style={styles.ImageBackground_10_567}
                          />
                        </View>
                        <View style={styles.View_10_568} />
                        <View style={styles.View_10_569} />
                        <View style={styles.View_10_570} />
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f951/7778/aa23ade073938ad951aedcddf4f2eb21"
                      }}
                      style={styles.ImageBackground_10_571}
                    />
                    <View style={styles.View_10_575}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9da/cf15/f0fb016caa0a6bfe659c350764739764"
                        }}
                        style={styles.ImageBackground_10_576}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82c3/d6a9/738acc6a9e84fcdb4b22b0ab78dc107a"
                        }}
                        style={styles.ImageBackground_10_579}
                      />
                    </View>
                    <View style={styles.View_10_582}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86c0/203d/5ecf11b40b01d4524309b26ee14c5b6b"
                        }}
                        style={styles.ImageBackground_10_583}
                      />
                      <View style={styles.View_10_584}>
                        <View style={styles.View_10_585}>
                          <View style={styles.View_10_586} />
                          <View style={styles.View_10_587} />
                        </View>
                        <View style={styles.View_10_588} />
                        <View style={styles.View_10_589} />
                        <View style={styles.View_10_590} />
                        <View style={styles.View_10_591} />
                      </View>
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c8c/3918/caf7387d2599b47604d6292f8ed4076d"
                  }}
                  style={styles.ImageBackground_121_86}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_10_593}>
            <Text style={styles.Text_10_593}>
              Fitur Profile perusahaan Disini perusahaan langsung dapat melihat
              karya dari kandidat ,pengalaman dan sertifikat dalam satu menu.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10_594}>
        <View style={styles.View_10_595} />
      </View>
      <View style={styles.View_66_7}>
        <View style={styles.View_10_401}>
          <Text style={styles.Text_10_401}>Muhammad Rizqi</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e9f/ba27/beb93ff1e3e903f9653b2d4fe4b3cc63"
          }}
          style={styles.ImageBackground_10_402}
        />
        <View style={styles.View_10_403}>
          <View style={styles.View_10_404}>
            <Text style={styles.Text_10_404}>Home</Text>
          </View>
          <View style={styles.View_10_405}>
            <Text style={styles.Text_10_405}>Project</Text>
          </View>
          <View style={styles.View_10_406}>
            <Text style={styles.Text_10_406}>About</Text>
          </View>
          <View style={styles.View_10_407}>
            <Text style={styles.Text_10_407}>Kontak</Text>
          </View>
        </View>
        <View style={styles.View_10_596}>
          <Text style={styles.Text_10_596}>Nikerja Project</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efbd/680c/156e457ee9beaa0fd9d39f4014526ef2"
          }}
          style={styles.ImageBackground_10_597}
        />
        <View style={styles.View_10_598}>
          <Text style={styles.Text_10_598}>
            Nikerja adalah suatu aplikasi yang dapat menghubungkan pencari
            lowongan dengan perusahaan yang membutuhkan kandidat  Nikerja
            memiliki beberapa fitur
          </Text>
        </View>
      </View>
      <View style={styles.View_121_1251}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e188/8597/3f233d4aa446e24357afb394263dd712"
          }}
          style={styles.ImageBackground_I121_1251_121_1207}
        />
        <View style={styles.View_I121_1251_121_1210}>
          <Text style={styles.Text_I121_1251_121_1210}>Kembali</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10_408: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("557.9234972677596%"),
    minHeight: hp("557.9234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.459987397605545%"),
    top: hp("148.224043715847%")
  },
  View_10_409: {
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
  View_10_410: {
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
  View_10_411: {
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
  View_10_412: {
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
  View_10_413: {
    width: wp("90.73724007561437%"),
    height: hp("5.629872494056577%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_414: {
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
  ImageBackground_10_415: {
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
  View_10_416: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.364134126890356%"),
    top: hp("1.0651135053791165%")
  },
  ImageBackground_10_417: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_418: {
    width: wp("0.8309665384274575%"),
    height: hp("1.9767847217497279%"),
    top: hp("0.7608048902834526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.72562593533397%")
  },
  View_10_419: {
    width: wp("6.64299121801404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.87170171707625%"),
    top: hp("0.596310141308038%")
  },
  Text_10_419: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 12.272727966308594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_10_420: {
    width: wp("1.8117249650480467%"),
    minWidth: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.8500191989603%"),
    top: hp("1.9780727032104153%")
  },
  View_10_421: {
    width: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_10_422: {
    width: wp("0.830378108754726%"),
    height: hp("1.6737454575919062%"),
    top: hp("1.0651135053790597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5284021542218085%")
  },
  View_10_423: {
    width: wp("0.07549591160601765%"),
    height: hp("1.6737454575919062%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37742571479205367%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_10_424: {
    width: wp("0.8303802120062114%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.7607882140112849%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_425: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.30205748857908%"),
    top: hp("1.0651135053791165%")
  },
  ImageBackground_10_426: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_427: {
    width: wp("0.905854430075479%"),
    height: hp("1.825815602078464%"),
    top: hp("0.9129425215590743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568658435727798%")
  },
  View_10_428: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0.45639621755464077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_429: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_430: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.1520375736424171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07550360349716811%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_431: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22644927536231307%")
  },
  View_10_432: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_433: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694283740768016%"),
    top: hp("0.304241910006823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1509764394297406%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_434: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.15205424991461314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593258669%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_435: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.90507221762759%"),
    top: hp("1.0651135053791165%")
  },
  ImageBackground_10_436: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_437: {
    width: wp("0.8303704168635792%"),
    height: hp("2.3138934797276565%"),
    top: hp("0.5771157520064776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568350760081984%")
  },
  View_10_438: {
    width: wp("0.8303704168635792%"),
    height: hp("2.130362375186441%"),
    top: hp("0.18352237555498618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_439: {
    width: wp("0.8303704168635792%"),
    minWidth: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    minHeight: hp("1.5215865901259125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6087839929132599%")
  },
  View_10_440: {
    width: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_441: {
    width: wp("0.6794016693249842%"),
    height: hp("1.217269506610808%"),
    top: hp("0.15215430754781778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_442: {
    width: wp("0.22646046766486647%"),
    height: hp("0.30425477549026575%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3019528788594812%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_10_443: {
    width: wp("0.07549591160601765%"),
    height: hp("1.369427722659919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920679%")
  },
  View_10_444: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08906796981727894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10399436830498132%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_445: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08906796981727894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.406039549858221%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_446: {
    width: wp("0.10676066230961416%"),
    height: hp("0.2150207757949829%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3618265595463157%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_10_447: {
    width: wp("3.9253999244963964%"),
    height: hp("1.8259070610088075%"),
    top: hp("1.9780727032104153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.132338679505355%")
  },
  View_10_451: {
    width: wp("4.000888624954464%"),
    minWidth: wp("4.000888624954464%"),
    height: hp("3.6518104740830717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.963584741257087%"),
    top: hp("1.0651135053791165%")
  },
  ImageBackground_10_452: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_455: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0381973160838083%")
  },
  View_10_458: {
    width: wp("2.944053068203076%"),
    minWidth: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568381527646503%"),
    top: hp("1.0651135053791165%")
  },
  ImageBackground_10_459: {
    width: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_460: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259044553412767%"),
    top: hp("0.9129425215590743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9058894041430392%")
  },
  View_10_461: {
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
  View_10_462: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259041947745234%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_463: {
    width: wp("0.9813516637252875%"),
    height: hp("1.5215868506926655%"),
    top: hp("0.15215430754781778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_464: {
    width: wp("0.07548821971487082%"),
    height: hp("1.8259043250579001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920572%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_465: {
    width: wp("0.15097678496391426%"),
    height: hp("0.1520428826900128%"),
    top: hp("0.304241910006823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_466: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.6085171725580665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_467: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.9129591978312703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_468: {
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
  ImageBackground_10_469: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("132.5136695403219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_121_87: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("132.5136695403219%"),
    minHeight: hp("132.5136695403219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_471: {
    width: wp("74.60617517328294%"),
    minWidth: wp("74.60617517328294%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("151.0928961748634%")
  },
  Text_10_471: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_10_472: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("190.84699453551912%"),
    minHeight: hp("190.84699453551912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("185.9289617486339%")
  },
  View_10_473: {
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
  View_10_474: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    height: hp("121.0382513661202%"),
    minHeight: hp("121.0382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("16.393442622950772%")
  },
  View_10_475: {
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
  View_10_476: {
    width: wp("90.73724007561437%"),
    height: hp("132.37704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_477: {
    flexGrow: 1,
    width: wp("90.73724007561437%"),
    height: hp("132.37704918032787%"),
    minHeight: hp("132.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_121_83: {
    width: wp("90.42218021424071%"),
    minWidth: wp("90.42218021424071%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.31505986137366015%"),
    top: hp("5.601092896174919%")
  },
  ImageBackground_10_478: {
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
  View_10_480: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.364134126890356%"),
    top: hp("1.065113505379088%")
  },
  ImageBackground_10_481: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_482: {
    width: wp("0.8309665384274575%"),
    height: hp("1.9767847217497279%"),
    top: hp("0.7608048902835094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.72562593533397%")
  },
  View_10_483: {
    width: wp("6.64299121801404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.87170171707625%"),
    top: hp("0.5963101413081517%")
  },
  Text_10_483: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 12.272727966308594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_10_484: {
    width: wp("1.8117249650480467%"),
    minWidth: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.8500191989603%"),
    top: hp("1.9780727032104437%")
  },
  View_10_485: {
    width: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_10_486: {
    width: wp("0.830378108754726%"),
    height: hp("1.6737454575919062%"),
    top: hp("1.065113505379088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5284021542218085%")
  },
  View_10_487: {
    width: wp("0.07549591160601765%"),
    height: hp("1.6737454575919062%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37742571479205367%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_10_488: {
    width: wp("0.8303802120062114%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.7608048902834526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_489: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.30205748857908%"),
    top: hp("1.065113505379088%")
  },
  ImageBackground_10_490: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_491: {
    width: wp("0.905854430075479%"),
    height: hp("1.825815602078464%"),
    top: hp("0.9129591978313556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568658435727798%")
  },
  View_10_492: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0.45639621755464077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_493: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_494: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.1520542499145563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07550360349716811%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_495: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22644927536231307%")
  },
  View_10_496: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_497: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694283740768016%"),
    top: hp("0.30424191000679457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1509764394297406%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_498: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.1520542499145563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593258669%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_499: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.90507221762759%"),
    top: hp("1.065113505379088%")
  },
  ImageBackground_10_500: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_501: {
    width: wp("0.8303704168635792%"),
    height: hp("2.3138934797276565%"),
    top: hp("0.5771324282787305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568350760081984%")
  },
  View_10_502: {
    width: wp("0.8303704168635792%"),
    height: hp("2.130362375186441%"),
    top: hp("0.1835390518271538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_503: {
    width: wp("0.8303704168635792%"),
    minWidth: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    minHeight: hp("1.5215865901259125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6087839929132883%")
  },
  View_10_504: {
    width: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_505: {
    width: wp("0.6794016693249842%"),
    height: hp("1.217269506610808%"),
    top: hp("0.15215430754778936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_506: {
    width: wp("0.22646046766486647%"),
    height: hp("0.30425477549026575%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3019528788594812%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_10_507: {
    width: wp("0.07549591160601765%"),
    height: hp("1.369427722659919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920679%")
  },
  View_10_508: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08908464608947497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10399436830498132%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_509: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08908464608947497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.406039549858221%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_510: {
    width: wp("0.10676066230961416%"),
    height: hp("0.2150207757949829%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3618265595463157%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_10_511: {
    width: wp("3.9253999244963964%"),
    height: hp("1.8259070610088075%"),
    top: hp("1.9780727032104437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.132338679505355%")
  },
  View_10_515: {
    width: wp("4.000888624954464%"),
    minWidth: wp("4.000888624954464%"),
    height: hp("3.6518104740830717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.963584741257087%"),
    top: hp("1.065113505379088%")
  },
  ImageBackground_10_516: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_519: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0381973160838083%")
  },
  View_10_522: {
    width: wp("2.944053068203076%"),
    minWidth: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568381527646503%"),
    top: hp("1.065113505379088%")
  },
  ImageBackground_10_523: {
    width: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_524: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259044553412767%"),
    top: hp("0.9129591978313556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9058894041430392%")
  },
  View_10_525: {
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
  View_10_526: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259041947745234%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_527: {
    width: wp("0.9813516637252875%"),
    height: hp("1.5215868506926655%"),
    top: hp("0.15215430754778936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_528: {
    width: wp("0.07548821971487082%"),
    height: hp("1.8259043250579001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920572%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_529: {
    width: wp("0.15097678496391426%"),
    height: hp("0.1520428826900128%"),
    top: hp("0.30424191000679457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_530: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.608517172558038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_531: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.9129591978312419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_532: {
    width: wp("66.79269061121613%"),
    minWidth: wp("66.79269061121613%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.06805293005671%"),
    top: hp("162.2950819672131%")
  },
  Text_10_532: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_66_9: {
    width: wp("120.98298676748583%"),
    minWidth: wp("120.98298676748583%"),
    height: hp("170.4918032786885%"),
    minHeight: hp("170.4918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("387.43169398907105%")
  },
  View_10_533: {
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
  View_10_534: {
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
  View_10_535: {
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
  View_10_536: {
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
  View_10_537: {
    width: wp("90.73724007561437%"),
    height: hp("5.629872494056577%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_538: {
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
  ImageBackground_10_539: {
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
  View_10_540: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.364134126890356%"),
    top: hp("1.065113505379145%")
  },
  ImageBackground_10_541: {
    width: wp("40.08442158209278%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_542: {
    width: wp("0.8309665384274575%"),
    height: hp("1.9767847217497279%"),
    top: hp("0.7608048902835662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.72562593533397%")
  },
  View_10_543: {
    width: wp("6.64299121801404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.87170171707625%"),
    top: hp("0.5963101413080949%")
  },
  Text_10_543: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 12.272727966308594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_10_544: {
    width: wp("1.8117249650480467%"),
    minWidth: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.8500191989603%"),
    top: hp("1.9780727032103869%")
  },
  View_10_545: {
    width: wp("1.8117249650480467%"),
    height: hp("3.651807868415541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(202, 202, 202, 1)"
  },
  View_10_546: {
    width: wp("0.830378108754726%"),
    height: hp("1.6737454575919062%"),
    top: hp("1.065113505379145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5284021542218085%")
  },
  View_10_547: {
    width: wp("0.07549591160601765%"),
    height: hp("1.6737454575919062%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37742571479205367%"),
    backgroundColor: "rgba(132, 132, 132, 1)"
  },
  ImageBackground_10_548: {
    width: wp("0.8303802120062114%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.7608048902835662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_549: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.30205748857908%"),
    top: hp("1.065113505379145%")
  },
  ImageBackground_10_550: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_551: {
    width: wp("0.905854430075479%"),
    height: hp("1.825815602078464%"),
    top: hp("0.9129591978312419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568658435727798%")
  },
  View_10_552: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0.4563962175546976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_553: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694275923765422%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_554: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.15205424991461314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07550360349716811%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_555: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.22644927536231307%")
  },
  View_10_556: {
    width: wp("0.6793939774338374%"),
    height: hp("1.369428243793425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_557: {
    width: wp("0.6793939774338374%"),
    height: hp("1.3694283740768016%"),
    top: hp("0.30424191000690826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1509764394297406%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_558: {
    width: wp("0.5284175380040957%"),
    height: hp("1.0651107694281907%"),
    top: hp("0.15205424991461314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593258669%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_559: {
    width: wp("2.944055952662256%"),
    minWidth: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.90507221762759%"),
    top: hp("1.065113505379145%")
  },
  ImageBackground_10_560: {
    width: wp("2.944055952662256%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_561: {
    width: wp("0.8303704168635792%"),
    height: hp("2.3138934797276565%"),
    top: hp("0.5771324282786736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0568350760081984%")
  },
  View_10_562: {
    width: wp("0.8303704168635792%"),
    height: hp("2.130362375186441%"),
    top: hp("0.18353905182721064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_563: {
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
  View_10_564: {
    width: wp("0.8303704168635792%"),
    height: hp("1.5215865901259125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_565: {
    width: wp("0.6794016693249842%"),
    height: hp("1.217269506610808%"),
    top: hp("0.15215430754778936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_566: {
    width: wp("0.22646046766486647%"),
    height: hp("0.30425477549026575%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3019528788594812%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_10_567: {
    width: wp("0.07549591160601765%"),
    height: hp("1.369427722659919%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920679%")
  },
  View_10_568: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08908464608953182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10399436830498132%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_569: {
    width: wp("0.3203629095297455%"),
    height: hp("0.6452422975842418%"),
    top: hp("0.08908464608953182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.406039549858221%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_570: {
    width: wp("0.10676066230961416%"),
    height: hp("0.2150207757949829%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3618265595463157%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_10_571: {
    width: wp("3.9253999244963964%"),
    height: hp("1.8259070610088075%"),
    top: hp("1.9780727032103869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.132338679505355%")
  },
  View_10_575: {
    width: wp("4.000888624954464%"),
    minWidth: wp("4.000888624954464%"),
    height: hp("3.6518104740830717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.963584741257087%"),
    top: hp("1.065113505379145%")
  },
  ImageBackground_10_576: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_579: {
    width: wp("1.9627023659641818%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0381973160838083%")
  },
  View_10_582: {
    width: wp("2.944053068203076%"),
    minWidth: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.568381527646503%"),
    top: hp("1.065113505379145%")
  },
  ImageBackground_10_583: {
    width: wp("2.944053068203076%"),
    height: hp("3.651809171249306%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_584: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259044553412767%"),
    top: hp("0.9129591978312419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9058894041430392%")
  },
  View_10_585: {
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
  View_10_586: {
    width: wp("1.1323281031550292%"),
    height: hp("1.8259041947745234%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_587: {
    width: wp("0.9813516637252875%"),
    height: hp("1.5215868506926655%"),
    top: hp("0.15215430754790304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07547283593257248%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_588: {
    width: wp("0.07548821971487082%"),
    height: hp("1.8259043250579001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3774257147920572%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_589: {
    width: wp("0.15097678496391426%"),
    height: hp("0.1520428826900128%"),
    top: hp("0.30424191000690826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_590: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.6085171725580949%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  View_10_591: {
    width: wp("0.15097678496391426%"),
    height: hp("0.15204262212325964%"),
    top: hp("0.9129591978313556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15097643942973704%"),
    backgroundColor: "rgba(147, 147, 147, 1)"
  },
  ImageBackground_121_86: {
    width: wp("89.66603654694391%"),
    minWidth: wp("89.66603654694391%"),
    height: hp("122.54098360655739%"),
    minHeight: hp("122.54098360655739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0712035286704467%"),
    top: hp("5.601092896174919%")
  },
  View_10_593: {
    width: wp("60.050409577819785%"),
    minWidth: wp("60.050409577819785%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.122873345935728%"),
    top: hp("137.70491803278696%")
  },
  Text_10_593: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_10_594: {
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
  View_10_595: {
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
  View_66_7: {
    width: wp("96.59735349716446%"),
    minWidth: wp("96.59735349716446%"),
    height: hp("138.66120218579235%"),
    minHeight: hp("138.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9533711405166982%"),
    top: hp("2.185792349726776%")
  },
  View_10_401: {
    width: wp("13.547574039067422%"),
    minWidth: wp("13.547574039067422%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.128544423440454%"),
    top: hp("3.5519125683060104%")
  },
  Text_10_401: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_402: {
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
  View_10_403: {
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
  View_10_404: {
    width: wp("4.59987397605545%"),
    minWidth: wp("4.59987397605545%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_404: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_405: {
    width: wp("5.356017643352237%"),
    minWidth: wp("5.356017643352237%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.750472589792054%"),
    top: hp("0%")
  },
  Text_10_405: {
    color: "rgba(41, 140, 232, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_406: {
    width: wp("4.662885948330183%"),
    minWidth: wp("4.662885948330183%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.185885318210453%"),
    top: hp("0%")
  },
  Text_10_406: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_407: {
    width: wp("5.482041587901701%"),
    minWidth: wp("5.482041587901701%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.928166351606805%"),
    top: hp("0%")
  },
  Text_10_407: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_596: {
    width: wp("90.73724007561437%"),
    minWidth: wp("90.73724007561437%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.709514807813485%"),
    top: hp("27.459016393442624%")
  },
  Text_10_596: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10_597: {
    width: wp("67.73787019533711%"),
    minWidth: wp("67.73787019533711%"),
    height: hp("99.86338797814209%"),
    minHeight: hp("99.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2684310018903586%"),
    top: hp("38.797814207650276%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10_598: {
    width: wp("25.456836798991812%"),
    minWidth: wp("25.456836798991812%"),
    minHeight: hp("42.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.14051669817266%"),
    top: hp("52.049180327868854%")
  },
  Text_10_598: {
    color: "rgba(132, 132, 132, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.43636366724967957,
    textTransform: "none"
  },
  View_121_1251: {
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
  ImageBackground_I121_1251_121_1207: {
    flexGrow: 1,
    width: wp("2.520478890989288%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I121_1251_121_1210: {
    flexGrow: 1,
    width: wp("6.427221172022684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4026465028355384%"),
    top: hp("0.5464480874316955%")
  },
  Text_I121_1251_121_1210: {
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
