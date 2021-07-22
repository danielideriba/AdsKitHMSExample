/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect, Component } from "react";
 import {
   View,
   StyleSheet,
   Button,
   Switch,
   ScrollView,
   Text,
   TextInput,
   FlatList
 } from "react-native";

 import {
  HMSBanner,
  BannerAdSizes,
  HMSNative,
  HMSInterstitial,
  HMSSplash,
} from '@hmscore/react-native-hms-ads';

 
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNativeAdVisible: true,
    };
  }

  _showInterstitialAd() {
    HMSInterstitial.isLoaded().then((result) => {
      if (result) {
        HMSInterstitial.show(); // if result is true show the ad
      }
    });
  }
  _showSplashAd() {
    HMSSplash.setAdId('testd7c5cewoj6');
    HMSSplash.show(); // if result is true show the ad
  }

  render() {
    HMSInterstitial.setAdId('testb4znbuh3n2'); // video ad
    HMSInterstitial.loadAd();
    return (
      <View style={styles.main}>
        <View style={{flex: 1}}>
          <View style={{paddingTop: 10}}>
            <Button
              title="Show Interstitial Ads"
              onPress={this._showInterstitialAd}></Button>
          </View>
          <View style={{paddingTop: 10}}>
            <Button
              title="Show Splash Ads"
              onPress={this._showSplashAd}></Button>
          </View>
        </View>

        <Text>Native ads example</Text>
        <HMSNative style={{height: 322}} />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  main: {
    flex: 2,
  },
});

export default App;
